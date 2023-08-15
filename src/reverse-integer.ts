export function reverse(x: number): number {
  const isNegative = x < 0;
  const result = parseInt(
    `${isNegative ? "-" : ""}${Array.from(Math.abs(x).toString())
      .reverse()
      .join("")}`
  );
  return !Number.isNaN(result) ? result : 0;
}
