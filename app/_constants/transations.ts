import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

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

//metetodos de pagamento enum
export const TRANSACTION_PAYMENTE = {
  DEBIT_CARD: "Cartão de débito",
  CREDIT_CARD: "Cartão de crédito",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto bancário",
  PIX: "PIX",
  CASH: "Dinheiro",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  { Value: TransactionType.EXPENSE, Label: "Despesa" },
  { Value: TransactionType.DEPOSIT, Label: "Deposito" },
  { Value: TransactionType.INVESTMENT, Label: "Investimento" },
];

export const TRANSACTION_PAYMENTE_M_OPTIONS = [
  { Value: TransactionPaymentMethod.CASH, Label: TRANSACTION_PAYMENTE.CASH },
  {
    Value: TransactionPaymentMethod.BANK_SLIP,
    Label: TRANSACTION_PAYMENTE.BANK_SLIP,
  },
  {
    Value: TransactionPaymentMethod.CREDIT_CARD,
    Label: TRANSACTION_PAYMENTE.CREDIT_CARD,
  },
  {
    Value: TransactionPaymentMethod.DEBIT_CARD,
    Label: TRANSACTION_PAYMENTE.DEBIT_CARD,
  },
  { Value: TransactionPaymentMethod.PIX, Label: TRANSACTION_PAYMENTE.PIX },
  { Value: TransactionPaymentMethod.OTHER, Label: TRANSACTION_PAYMENTE.OTHER },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    Value: TransactionCategory.EDUCATION,
    Label: TRANSACTION_CATEGORY[TransactionCategory.EDUCATION],
  },
  {
    Value: TransactionCategory.ENTERTAINMENT,
    Label: TRANSACTION_CATEGORY[TransactionCategory.ENTERTAINMENT],
  },
  {
    Value: TransactionCategory.FOOD,
    Label: TRANSACTION_CATEGORY[TransactionCategory.FOOD],
  },
  {
    Value: TransactionCategory.HEALTH,
    Label: TRANSACTION_CATEGORY[TransactionCategory.HEALTH],
  },
  {
    Value: TransactionCategory.HOUSING,
    Label: TRANSACTION_CATEGORY[TransactionCategory.HOUSING],
  },
  {
    Value: TransactionCategory.SALARY,
    Label: TRANSACTION_CATEGORY[TransactionCategory.SALARY],
  },
  {
    Value: TransactionCategory.TRANSPORTATION,
    Label: TRANSACTION_CATEGORY[TransactionCategory.TRANSPORTATION],
  },
  {
    Value: TransactionCategory.UTILITY,
    Label: TRANSACTION_CATEGORY[TransactionCategory.UTILITY],
  },
  {
    Value: TransactionCategory.OTHER,
    Label: TRANSACTION_CATEGORY[TransactionCategory.OTHER],
  },
];
