"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import { TransactionType } from "@prisma/client";
import { ITypesPercentage } from "@/app/_data/get-dashboard/types";

import { PercentageItem } from "./percentage-item";

const chartConfig = {
  [TransactionType.DEPOSIT]: {
    //Enum com cada tipo de transação
    label: "Depósito ",
    color: "#55b82e",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "hsl(var(--destructive)",
  },
  [TransactionType.INVESTMENT]: {
    label: "Investimento",
    color: "#ffffff",
  },
} satisfies ChartConfig;
interface ITransactionPieChartProps {
  totalBalance?: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPercentage: ITypesPercentage;
}

export function TransactionPieChart({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: ITransactionPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT, //Importancia de faze Enum bem feito
      amount: depositsTotal,
      fill: "#55b02e",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#ffffff",
    },
  ];

  return (
    <Card className="xl::p-6 flex flex-col">
      <CardContent className="flex-1 p-0 lg:p-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-success_green" />}
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-danger" />}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} className="text-primary" />}
            title="Investido"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
