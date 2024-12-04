"use client";

import { PencilIcon, TrashIcon } from "lucide-react";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/_components/ui/button";

import { TransationTypeBadge } from "../_components/type-badge";

export const TRANSACTION_CATEGORY = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
  OTHER: "Outros",
};

//metetodos de pagamento
export const TRANSACTION_PAYMENTE = {
  DEBIT_CARD: "Cartão de débito",
  CREDIT_CARD: "Cartão de crédito",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto bancário",
  PIX: "PIX",
  CASH: "Dinheiro",
  OTHER: "Outros",
};

export const transationsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      <TransationTypeBadge transaction={transaction} />;
    },
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
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-primary-foreground"
          >
            <PencilIcon />
          </Button>
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
