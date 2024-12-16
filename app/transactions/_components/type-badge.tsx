import { CircleIcon } from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";

interface TransationTypeBadgeProps {
  transaction: Transaction;
}

export const TransactionTypeBadge = ({
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
      <Badge className="bg-danger bg-opacity-10 font-bold text-danger hover:bg-muted">
        <CircleIcon size={10} className="mr-2 fill-danger" />
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
