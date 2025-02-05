import { TransactionCategory, TransactionType } from "@prisma/client";

export type ITypesPercentage = {
  [key in TransactionType]: number;
};

export interface ITotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageTotal: number;
}
