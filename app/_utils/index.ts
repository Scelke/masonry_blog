export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

export const chunk = <T>(array: T[], size: number = 2): T[][] => {
  if (!Array.isArray(array) || !array.length) return [];

  const result: T[][] = [];
  array.forEach((element, index) => {
    result[index % size]
      ? result[index % size].push(element)
      : (result[index % size] = [element]);
  });
  return result;
};
