import { CircleIcon } from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";

interface TransationTypeBadgeProps {
  transaction: Transaction;
}

export const TransationTypeBadge = ({
  transaction,
}: TransationTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon size={10} className="mr-2 fill-primary" />
        Deposito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="text-danger bg-danger bg-opacity-10 font-bold hover:bg-muted">
        <CircleIcon size={10} className="fill-danger mr-2" />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted font-bold text-white hover:bg-muted">
      <CircleIcon size={10} className="mr-2 fill-white" />
      Investimento
    </Badge>
  );
};
