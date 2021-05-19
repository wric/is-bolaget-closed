import { SystembolagetOpeningHour } from "@models/OpeningHour";

const NEW_YEARS_EVE = "Nyårsafton";

export const mapOpeningHour = (
  store: string,
  openingHour: SystembolagetOpeningHour,
) => {
  const date = new Date(openingHour.date + "Z");
  const openTo = openingHour.openTo.substring(0, 5);

  return {
    isClosed: !isOpen(openTo),
    isDeviant: isDeviant(date, openTo),
    shortDescription: shortDescription(date, openTo),
    fullDescription: fullDescription(store, date, openTo, openingHour.reason),
  };
};

const shortDescription = (date: Date, openTo: string): string => {
  const shortDay = date.toLocaleDateString("en-US", { weekday: "short" });
  return isOpen(openTo) ? `${shortDay} ${openTo}` : shortDay;
};

const fullDescription = (
  storeName: string,
  date: Date,
  openTo: string,
  reason: string | null,
): string => {
  const longDay = date.toLocaleDateString("en-US", { weekday: "long" });
  const longDate = date.toISOString().substring(0, 10);

  if (isOpen(openTo)) {
    return `Systembolaget ${storeName} is open to ${openTo} on ${longDay} (${longDate}).`;
  }

  reason = parseReason(date, reason);

  return reason
    ? `Systembolaget ${storeName} is closed on ${longDay} (${longDate}) due to ${reason}.`
    : `Systembolaget ${storeName} is closed on ${longDay} (${longDate}).`;
};

const parseReason = (date: Date, reason: string | null): string => {
  if (isNewYearsEve(date)) return NEW_YEARS_EVE;
  if (reason === "0") return "";
  if (reason === "-") return "";
  if (!reason) return "";
  return reason;
};

const isDeviant = (date: Date, openTo: string): boolean => {
  if (isSunday(date)) {
    // Sites are always closed on Sundays.
    return false;
  }

  if (!isOpen(openTo)) {
    // Sites are usually open all days other than Sunday.
    return true;
  }

  if (isNewYearsEve(date)) {
    // New years eve is treated as a Saturday.
    return isWeekday(date);
  }

  return false;
};

const isOpen = (openTo: string): boolean => {
  return openTo !== "00:00";
};

const isSunday = (date: Date): boolean => {
  return date.getDay() === 0;
};

const isWeekday = (date: Date): boolean => {
  return date.getDay() > 0 && date.getDay() < 6;
};

const isNewYearsEve = (date: Date): boolean => {
  return date.getUTCMonth() === 11 && date.getUTCDate() === 31;
};
