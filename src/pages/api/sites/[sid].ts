import { mapOpeningHour } from "@lib/openinghour";
import { systembolagetApi } from "@lib/systembolaget";
import { SystembolagetStore } from "@models/Site";
import { NextApiRequest, NextApiResponse } from "next";

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { sid, daysAhead },
    method,
  } = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method '${method}' not allowed.` });
    return;
  }

  const [ok, site] = await systembolagetApi<SystembolagetStore>(
    `/Store/${sid}`,
  );
  if (!ok) {
    const message = `Unable to fetch Store '${sid}'.`;
    res.status(404).json({ message });
    return;
  }

  const day = daysAhead === undefined ? 0 : Number(daysAhead);
  const openingHour = site.openingHours[day];

  if (!openingHour) {
    const message = `Found no opening hour with daysAhead=${daysAhead}.`;
    res.status(404).json({ message });
    return;
  }

  const siteName = site.alias || site.address;
  res.status(200).json(mapOpeningHour(siteName, openingHour));
};

export default endpoint;
