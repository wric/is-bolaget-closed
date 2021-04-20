const API_ROOT = "https://api-extern.systembolaget.se/site/V2";
const API_KEY = process.env.SYSTEMBOLAGET_API_KEY || "";

export const searchSite = async (search: string): Promise<Response> => {
  return callApi(`${API_ROOT}/Search/Site?q=${search}`);
};

const callApi = async (url: string): Promise<Response> => {
  const headers = { "Ocp-Apim-Subscription-Key": API_KEY };
  const res = await fetch(url, { headers });
  return res.json();
};
