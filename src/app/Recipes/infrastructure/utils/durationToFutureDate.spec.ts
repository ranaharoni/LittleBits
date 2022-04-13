/** @format */

import { durationToFutureDate } from "./durationToFutureDate";

const durations = ["PT15M", "PT1H", "PT1H30M", "PT2H"];

describe("durationToFutureDate", () => {
  it("should return a date object", () => {
    const date = durationToFutureDate(durations[0]);
    expect(date).toBeInstanceOf(Date);
  });

  it("should be exactly 15min ahead of now", () => {
    const date = durationToFutureDate(durations[0]);
    expect(date.getTime()).toBe(new Date().getTime() + 15 * 60 * 1000);
  });

  it("should be exactly 1.5hours ahead of now", () => {
    const date = durationToFutureDate(durations[2]);
    expect(date.getTime()).toBe(new Date().getTime() + 90 * 60 * 1000);
  });
});
