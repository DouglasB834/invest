import { TransactionType } from "@prisma/client";

export type ITypesPercentage = {
  [key in TransactionType]: number;
};
