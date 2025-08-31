export const parseQuery = (query) => {
  query = query.toLowerCase();
  let parsed = {};

  if (query.includes("breakfast")) parsed.category = "breakfast";
  if (query.includes("snack")) parsed.category = "snacks";

  const priceMatch = query.match(/under (\d+)/);
  if (priceMatch) parsed.price = { max: parseInt(priceMatch[1]) };

  const qtyMatch = query.match(/(\d+) (pack|kg|piece|items?)/);
  if (qtyMatch) parsed.quantity = parseInt(qtyMatch[1]);

  return parsed;
};
