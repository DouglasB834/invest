import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";

import { Summarycard } from "./summary-card";

export const SummaryCards = () => {
  return (
    <div className="space-y-8">
      <Summarycard
        title="Saldo"
        icon={<WalletIcon size={16} />}
        amount={2.8}
        size="large"
      />

      <div className="grid grid-cols-3 space-x-4">
        <Summarycard
          icon={<PiggyBankIcon size={16} className="text-primary" />}
          title="investimento"
          amount={2.2}
        />
        <Summarycard
          icon={<TrendingUpIcon size={16} className="text-green-700" />}
          title="Receita"
          amount={2.2}
        />
        <Summarycard
          icon={<TrendingDownIcon size={16} className="text-destructive" />}
          title="Despesas"
          amount={2.2}
        />
      </div>
    </div>
  );
};
