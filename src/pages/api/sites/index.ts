import { NextApiRequest, NextApiResponse } from "next";
import { searchSite } from "../../../lib/systembolaget";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search },
    method,
  } = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }

  if (search === "" || search === []) {
    res.status(400).end("`search` query is required");
    return;
  }

  const sites = await searchSite(search as string);
  res.status(200).json(sites);
};

export default handler;
