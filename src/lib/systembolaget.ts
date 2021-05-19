const API_ROOT = "https://api-extern.systembolaget.se/site/V2";
const API_KEY = process.env.SYSTEMBOLAGET_API_KEY || "";

export const systembolagetApi = async <T>(
  url: string,
): Promise<[boolean, T]> => {
  const headers = { "Ocp-Apim-Subscription-Key": API_KEY };
  const res = await fetch(API_ROOT + url, { headers });
  const data = await res.json();
  return [res.ok, data];
};
