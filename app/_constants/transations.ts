import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdDevicesOther } from "react-icons/md";
import { PiPixLogo } from "react-icons/pi";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.BANK_SLIP]: CiBarcode,
  [TransactionPaymentMethod.BANK_TRANSFER]: FaMoneyBillTransfer,
  [TransactionPaymentMethod.CASH]: BsCashCoin,
  [TransactionPaymentMethod.CREDIT_CARD]: FaRegCreditCard,
  [TransactionPaymentMethod.DEBIT_CARD]: BsCreditCard2Back,
  [TransactionPaymentMethod.PIX]: PiPixLogo,
  [TransactionPaymentMethod.OTHER]: MdDevicesOther,
};

export const TRANSACTION_CATEGORY = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidade",
  INVESTMENT: "Investimento",
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
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Deposito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];

export const TRANSACTION_PAYMENTE_M_OPTIONS = [
  { value: TransactionPaymentMethod.CASH, label: TRANSACTION_PAYMENTE.CASH },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENTE.BANK_SLIP,
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: TRANSACTION_PAYMENTE.CREDIT_CARD,
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: TRANSACTION_PAYMENTE.DEBIT_CARD,
  },
  { value: TransactionPaymentMethod.PIX, label: TRANSACTION_PAYMENTE.PIX },
  { value: TransactionPaymentMethod.OTHER, label: TRANSACTION_PAYMENTE.OTHER },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY[TransactionCategory.UTILITY],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY[TransactionCategory.OTHER],
  },
];
