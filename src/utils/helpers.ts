/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unused-modules */
interface PostRequestParams {
  url: string
  data: Record<string, any> | null
}

interface RequestParams {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  headers?: HeadersInit
  data?: any
}

const request = async <T = any>(
  url: string,
  params: RequestParams
): Promise<T> => {
  const { method, headers, data } = params

  const res = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  })
  const json = await res.json()

  if (res.ok) {
    if (json) {
      return json
    } else throw new Error("No proper json response")
  } else throw new Error("Failed to fetch", { cause: json.error })
}

export const getRequest = async (url: string) =>
  request(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

export const postRequest = async <T = any>({
  url,
  data = {},
}: PostRequestParams) =>
  request<T>(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  })
