// import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";

import { ITotalExpensePerCategory, ITypesPercentage } from "./types";

export const getDashboard = async (month: string) => {
  const currentYear = new Date().getFullYear();
  // const { userId } = await auth();
  // if (!userId) throw new Error("User Unauthorized.");
  // user:"",// add usuario
  const where = {
    // userId,
    date: {
      //Entre dia 1, maior ou igual , e menor que dia 31
      //TOOD colocar pro usuario esoclher o ano
      gte: new Date(`${currentYear}-${month}-01`),
      lt: new Date(`${currentYear}-${month}-31`),
    },
  };

  const transactionValuesTypes = async (typeValue: TransactionType) => {
    return Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: typeValue },
          _sum: { amount: true },
        })
      )._sum?.amount,
    );
  };

  //TODO total tem que ser todo valor, nao somente do mes que estamos pra saber quanto
  // pra saber quando tem no geral nao somente naquele mes
  // colocar um default que seria todos os messes que existe dentr do db
  const depositsTotal = await transactionValuesTypes("DEPOSIT");
  const investmentsTotal = await transactionValuesTypes("INVESTMENT");
  const expensesTotal = await transactionValuesTypes("EXPENSE");

  const totalBalance = depositsTotal - investmentsTotal - expensesTotal;

  const transctionsTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: {
          amount: true,
        },
      })
    )._sum?.amount,
  );

  const typesPercentage: ITypesPercentage = {
    [TransactionType.DEPOSIT]: Math.round(
      ((depositsTotal || 0) / transctionsTotal) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      ((investmentsTotal || 0) / transctionsTotal) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      ((expensesTotal || 0) / transctionsTotal) * 100,
    ),
  };

  const totalExpensePerCategory: ITotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
      },
      _sum: { amount: true },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amount),
    percentageTotal: Math.round(
      (Number(category._sum.amount) / expensesTotal) * 100,
    ),
  }));

  //problema de decimal
  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: {
      date: "desc",
    },
    take: 10,
  });
  // .then(transactions =>
  //   transactions.map(transaction => ({
  //     ...transaction,
  //     amount: Number(transaction.amount)
  //   }))
  // );

  return {
    totalBalance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    transctionsTotal,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions,
  };
};
