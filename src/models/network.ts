import axios, { AxiosResponse } from 'axios'

export const getProducts = async (param: any[]): Promise<AxiosResponse> => {
  // define param string
  let paramString = '?'

  // add params to request
  param.map((keyVal: any, i: number) => {
    if (i > 0) paramString += '&'
    Object.keys(keyVal).map((k: string) => (paramString += `${k}=${keyVal[k]}`))
  })

  // request data with params if present
  const response = await axios.get(
    `https://api.theurge.com.au/search-results${
      param.length > 0 ? paramString : ''
    }`
  )
  return response
}
