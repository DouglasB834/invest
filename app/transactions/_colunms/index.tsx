"use client";

import {
  TRANSACTION_CATEGORY,
  TRANSACTION_PAYMENTE,
} from "@/app/_constants/transations";
import { TrashIcon } from "lucide-react";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/_components/ui/button";

import { EditTransationButton } from "../_components/edit-transaction-button";
import { TransactionTypeBadge } from "../_components/type-badge";

export const transationsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo",
    cell: ({ row: { original: transation } }) =>
      TRANSACTION_PAYMENTE[transation.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      transaction.date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "action",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="flex items-center gap-2">
          <EditTransationButton transaction={transaction} />
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-primary-foreground"
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
