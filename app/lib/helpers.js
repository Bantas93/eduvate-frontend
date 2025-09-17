"use server";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export async function getSecondLocal(data) {
  dayjs.extend(duration);
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const expiresAt = dayjs.tz(data, "Asia/Jakarta");
  const now = dayjs().tz("Asia/Jakarta");
  const maxAgeInSeconds = expiresAt.diff(now, "s");

  const maxAge = Math.max(maxAgeInSeconds, 0);
  return maxAge;
}
