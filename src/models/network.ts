import axios, { AxiosResponse } from "axios";

export const getProducts = async (param: any[]): Promise<AxiosResponse> => {
  let paramString = "";

  param.map((keyVal: any, i: number) => {
    if (i > 0) paramString += "&";
    Object.keys(keyVal).map(
      (k: string) => (paramString += `${k}=${keyVal[k]}`)
    );
  });

  const response = await axios.get(
    `https://api.theurge.com.au/search-results?${paramString}`
  );
  return response;
};
