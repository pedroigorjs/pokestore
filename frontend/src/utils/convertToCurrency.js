export default function convertToCurrency(locale, value) {
  const formatted = new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(value);
  return formatted;
}
