// services/GetAppointments.js
import { fetchUtil } from "./fetchUtil";

export const GetAppointments = async () => {
  try {
    const userId = sessionStorage.getItem("user_id");
    
    if (!userId) {
      console.warn("No user ID found. Returning empty array.");
      return [];
    }

    const response = await fetchUtil({
      url: `/appointments/user/${userId}`,
      method: "GET",
      requiresAuth: true,
    });

    console.log("Appointments fetched successfully");
    return response.appointments || [];
  } catch (error) {
    console.error("Error fetching appointments:", error);
    
    // Don't throw error for empty appointments, just return empty array
    if (error.message.includes("No auth token")) {
      // Token expired or invalid
      localStorage.removeItem("authToken");
      return [];
    }
    
    return [];
  }
};

// For backward compatibility
export default GetAppointments;