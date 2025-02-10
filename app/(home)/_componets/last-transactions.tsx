import { format } from "date-fns";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiPixLogo } from "react-icons/pi";

import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Button } from "@/app/_components/ui/button";
import { Transaction, TransactionType } from "@prisma/client";
import { formatCurrency } from "@/app/_utils/currentcyPrices";

interface ILastTransactionsProps {
  lastTransactions: Transaction[];
}

const getPriceColor = (transaction: Transaction) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return "text-success_green";
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return "text-danger";
  }
  return "text-white";
};
const princesAmount = (transaction: Transaction) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return "+";
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return "-";
  }
  return "";
};

export const LastTransactions = ({
  lastTransactions,
}: ILastTransactionsProps) => {
  return (
    <ScrollArea className="rounded-md border p-5">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Transações</CardTitle>
        <Button
          className="rounded-full font-semibold"
          variant={"outline"}
          asChild
        >
          <Link href={"/transactions"} className="text-xs font-semibold">
            Ver mais{" "}
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        <ul className="space-y-5">
          {lastTransactions.map((transaction: Transaction) => (
            <li key={transaction.id} className="flex justify-between py-2">
              <div className="flex items-center gap-2 bg-white bg-opacity-[3%]">
                {/* <Image src={""} width={20} height={20} alt="" /> */}
                <PiPixLogo size={20} />
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-sm">{transaction.name}</p>

                  <span className="text-xs text-muted-foreground">
                    {format(transaction.date, "dd 'de' MMM 'de' y ")}
                    {/* {new Date(transaction.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}    */}
                  </span>
                </div>
              </div>

              <span
                className={`text-sm font-semibold ${getPriceColor(transaction)}`}
              >
                {princesAmount(transaction)}{" "}
                {formatCurrency(Number(transaction.amount))}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </ScrollArea>
  );
};
