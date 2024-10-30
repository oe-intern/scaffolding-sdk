export default {
  formatMoney(cents: string | number, format?: string) {
    if (typeof cents == 'string') {
      cents = cents.replace('.', '');
    }

    let value = '';
    let placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    let formatString = format ?? '${{amount}}';
    const currencyPrecision = 100.0;

    function formatWithDelimiters(number: string | number, precision?: number, thousands?: string, decimal?: string) {
      precision = precision ?? 2;
      thousands = thousands ?? ',';
      decimal = decimal ?? '.';

      if (isNaN(+number)) {
        return '0';
      }

      number = (+number / currencyPrecision).toFixed(precision);
      const parts = number.split('.');
      const dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const cents = parts[1] ? (decimal + parts[1]) : '';
      return dollars + cents;
    }

    switch (formatString.match(placeholderRegex)?.[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, '\'');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  },
};
