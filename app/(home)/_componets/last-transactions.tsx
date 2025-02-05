import Link from "next/link";
import React from "react";

import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Button } from "@/app/_components/ui/button";
import { Transaction } from "@prisma/client";

interface ILastTransactionsProps {
  lastTransactions: Transaction[];
}

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
        <ul>
          {lastTransactions.map((transaction: Transaction) => (
            <li key={transaction.id} className="flex justify-between py-2">
              <span className="text-sm text-muted-foreground">
                {transaction.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {transaction.category}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </ScrollArea>
  );
};
