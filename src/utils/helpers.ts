export const formatNumber = (number: number) => {
  return number.toLocaleString("en-US", {
    maximumFractionDigits: 3,
    notation: "compact",
    compactDisplay: "short",
  });
};
