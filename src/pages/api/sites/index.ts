import { mapSite, notAgentNorBlocked } from "@lib/site";
import { systembolagetApi } from "@lib/systembolaget";
import { SystembolagetSearch } from "@models/Search";
import { NextApiRequest, NextApiResponse } from "next";

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search },
    method,
  } = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} not allowed.`);
    return;
  }

  if (!search) {
    const message = "'search' query is required.";
    res.status(400).json({ message });
    return;
  }

  const [ok, result] = await systembolagetApi<SystembolagetSearch>(
    `/Search/Site?q=${search}`,
  );
  if (!ok) {
    const message = `Unable to search for query '${search}'`;
    res.status(400).json({ message });
  }

  const sites = result.siteViewModel.filter(notAgentNorBlocked).map(mapSite);
  res.status(200).json(sites);
};

export default endpoint;
