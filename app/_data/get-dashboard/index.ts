import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";

import { ITypesPercentage } from "./types";

export const getDashboard = async (month: string) => {
  const currentYear = new Date().getFullYear();
  const where = {
    date: {
      //1 entre dia 1, maior ou igual , e menor que dia 31
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
  const depositsTotal = await transactionValuesTypes("DEPOSIT");
  const investmentsTotal = await transactionValuesTypes("INVESTMENT");
  const expensesTotal = await transactionValuesTypes("EXPENSE");
  const totalBalance = depositsTotal - expensesTotal + investmentsTotal;

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
  console.log(typesPercentage.DEPOSIT);
  return {
    totalBalance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    transctionsTotal,
    typesPercentage,
  };
};
