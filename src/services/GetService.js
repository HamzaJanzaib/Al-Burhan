// services/GetServices.js
import { COMPANY_ID } from "../config/BaseUrl";
import { fetchUtil } from "./fetchUtil";

// services/GetServices.js

export default async function GetServices() {
  try {
    const data = await fetchUtil({
      url: "/services",
      method: "GET",
      params: {
        company_id: COMPANY_ID,
      },
    });


    // API returns { services: [...] }
    return data?.services || [];
  } catch (error) {
    console.error("GetServices failed:", error);
    throw error; // let UI decide what to do
  }
}
