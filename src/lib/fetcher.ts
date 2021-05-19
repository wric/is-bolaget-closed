type Props = {
  input: RequestInfo;
  init?: RequestInit;
};

export const fetcher = async (args: Props) => {
  const { input, init } = args;
  const res = await fetch(input, init);
  return res.json();
};
