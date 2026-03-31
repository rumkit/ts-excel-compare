// provides necessery padding so that the first row is the longest (<=) row in the set
export function normalizeFirstRow(data: any[][]): any[][] {
  if (!Array.isArray(data) || data.length === 0) return data;

  const maxCols = data.reduce(
    (max, row) => Math.max(max, row.length),
    0
  );

  const first = [...data[0]];
  while (first.length < maxCols) {
    first.push("");
  }

  return [first, ...data.slice(1)];
}