import {
  BolagetOpeningHour,
  SystembolagetOpeningHour,
} from "@models/OpeningHour";

export type BolagetSite = {
  siteId: string;
  name: string;
  address: string;
  position: string;
  openingHours: BolagetOpeningHour[];
};

export type SystembolagetSite = {
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
  openingHours: SystembolagetOpeningHour[];
  position: Position;
};

export type SystembolagetStore = {
  siteId: string;
  alias: string;
  isActive: boolean;
  isBlocked: boolean;
  isOpen: boolean;
  isBlockedByOrderLimit: boolean;
  maxOrdersPerDay: number | null;
  ordersToday: number;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  county: string;
  isFullAssortmentOrderStore: boolean;
  isTastingStore: boolean;
  position: Position;
  openingHours: SystembolagetOpeningHour[];
  parentSiteId: string;
  searchArea: string;
};

type Position = {
  latitude: number;
  longitude: number;
};
