import { BolagetSite, SystembolagetSite } from "@models/Site";
import { mapOpeningHour } from "@lib/openinghour";

export const notAgentNorBlocked = (site: SystembolagetSite): boolean => {
  return !site.isAgent && !site.isBlocked;
};

export const mapSite = (site: SystembolagetSite): BolagetSite => {
  const name = site.displayName || site.alias;
  const address = site.postalCode
    ? `${site.streetAddress}, ${site.postalCode} ${site.city}`
    : `${site.streetAddress}, ${site.city}`;

  return {
    siteId: site.siteId,
    name: name,
    address: address.toLowerCase(),
    position: `${site.position.latitude},${site.position.longitude}`,
    openingHours: site.openingHours.map((o) => mapOpeningHour(name, o)),
  };
};
