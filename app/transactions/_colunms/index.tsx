"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { TransationTypeBadge } from "../_components/type-badge";

// vai ditar nossas colunas se quiser mais ou menos so add aqui dentro
export const transationsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: Transaction } }) => {
      <TransationTypeBadge transaction={Transaction} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "action",
  },
];
