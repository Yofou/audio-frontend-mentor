export const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  minimumSignificantDigits: 3,
  /** @ts-ignore */
  roundingPriority: "morePrecision",
});
