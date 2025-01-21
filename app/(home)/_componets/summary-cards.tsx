import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";

import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";

import { Summarycard } from "./summary-card";

interface ISumaryCardProps {
  month: string;
}

export const SummaryCards = async ({ month }: ISumaryCardProps) => {
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

  // const depositsTotal = Number((await db.transaction.aggregate({
  //     where: { type: "DEPOSIT"},
  //     _sum: { amount: true },
  //   }))._sum?.amount)

  // const investmentsTotal = Number((await db.transaction.aggregate({
  //   where: { type: "INVESTMENT"},
  //   _sum: { amount: true },
  // }))._sum?.amount)

  // const expensesTotal = Number((await db.transaction.aggregate({
  //   where: { type: "EXPENSE"},
  //   _sum: { amount: true },
  // }))._sum?.amount)

  const totalBalance = depositsTotal - expensesTotal + investmentsTotal;

  return (
    <div className="space-y-8">
      <Summarycard
        title="Saldo"
        icon={<WalletIcon size={16} />}
        amount={totalBalance}
        size="large"
      />

      <div className="grid grid-cols-3 space-x-4">
        <Summarycard
          icon={<PiggyBankIcon size={16} className="text-primary" />}
          title="investimento"
          amount={investmentsTotal}
        />
        <Summarycard
          icon={<TrendingUpIcon size={16} className="text-green-700" />}
          title="Receita"
          amount={depositsTotal}
        />
        <Summarycard
          icon={<TrendingDownIcon size={16} className="text-destructive" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};
