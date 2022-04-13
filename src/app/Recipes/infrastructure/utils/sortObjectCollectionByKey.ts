/** @format */

export const sortObjectCollectionByKey = <T = { [key: string]: any }>(
  arrOfObj: T[],
  key: keyof T,
): T[] => {
  return arrOfObj.sort((a: T, b: T) => {
    if (typeof a[key] === "string") {
      // @ts-ignore (its inside of an if statement)
      return a[key].localeCompare(b[key]);
    } else if (
      typeof a[key] === "number" ||
      a[key] instanceof Date ||
      typeof a[key] === "boolean"
    ) {
      // @ts-ignore (its inside of an if statement)
      return a[key] - b[key];
    } else {
      return 0;
    }
  });
};
