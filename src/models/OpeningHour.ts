export type BolagetOpeningHour = {
  isClosed: boolean;
  isDeviant: boolean;
  shortDescription: string;
  fullDescription: string;
};

export type SystembolagetOpeningHour = {
  date: string;
  openFrom: string;
  openTo: string;
  reason: string | null;
};
