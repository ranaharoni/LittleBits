/** @format */

import { parse } from "duration-fns";
import { add } from "date-fns";

export const durationToFutureDate = (duration: string) => {
  const durationObj = parse(duration);
  const date = add(new Date(), durationObj);
  return date;
};
