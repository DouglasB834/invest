"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { Pie, PieChart } from "recharts";

import { TransactionType } from "@prisma/client";

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
}

export function TransactionPieChart({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
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
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
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
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
