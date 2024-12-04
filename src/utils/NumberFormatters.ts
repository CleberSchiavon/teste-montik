type MoneyFormatter = {
  currency: string;
  price: number;
};

export const moneyFormatter = ({ currency, price }: MoneyFormatter) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
  }).format(price);
