export type Site = {
  siteId: string;
  alias: string;
  streetAddress: string;
  displayName: string;
  city: string;
  county: string;
  postalCode: string | null;
  isTastingStore: boolean;
  isAgent: boolean;
  isOpen: boolean;
  isBlocked: boolean;
  openingHours: OpeningHour[];
  position: Position;
};

export type OpeningHour = {
  date: string;
  openFrom: string;
  openTo: string;
  reason: string | null;
};

type Position = {
  latitude: number;
  longitude: number;
};
