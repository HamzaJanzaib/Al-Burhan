// services/DeleteAppointment.js
import { fetchUtil } from "./fetchUtil";

export const DeleteAppointment = async (appointmentId) => {
  try {
    if (!appointmentId) {
      throw new Error("No appointment ID provided.");
    }

    await fetchUtil({
      url: `/appointments/${appointmentId}`,
      method: "DELETE",
      requiresAuth: true, // Requires auth token
    });

    console.log("Appointment deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting appointment:", error);
    
    // Handle specific error cases
    if (error.message.includes("No auth token")) {
      // Clear invalid token
      localStorage.removeItem("authToken");
      throw new Error("Your session has expired. Please log in again.");
    }
    
    throw error;
  }
};

// For backward compatibility
export default DeleteAppointment;