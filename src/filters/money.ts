import { Helper, Currency } from '@/services';

export default function (value: number) {
  const format = Helper.getStoreData().moneyFormat;
  let formatMethod = Currency.formatMoney;

  if (window.Currency && window.Currency.formatMoney) {
    formatMethod = window.Currency.formatMoney;
  }

  return formatMethod(+value, format);
}
