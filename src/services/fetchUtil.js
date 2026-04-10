import { BASE_URL } from "../config/BaseUrl";

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const buildQueryParams = (params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, value);
    }
  });
  return query.toString();
};

export const fetchUtil = async ({
  url,
  endpoint,
  method = "GET",
  body,
  headers = {},
  params,
  token,
  signal,
}) => {
  const targetUrl = url || endpoint;

  if (!targetUrl) {
    console.error("fetchUtil: URL or endpoint is missing");
    throw new ApiError("Internal Error: API URL is missing", 0, null);
  }

  const queryString = params ? buildQueryParams(params) : "";
  const fullUrl = `${BASE_URL}${targetUrl}${queryString ? `?${queryString}` : ""}`;
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    signal,
  };

  if (body && method !== "GET") {
    config.body =
      typeof body === "object" && !(body instanceof FormData)
        ? JSON.stringify(body)
        : body;
  }

  let response;
  try {
    response = await fetch(fullUrl, config);
  } catch (error) {
    throw new ApiError("Network error. Please check your connection.", 0, null);
  }

  let data;
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    throw new ApiError(
      data?.message || "API request failed",
      response.status,
      data,
    );
  }
  return data;
};
