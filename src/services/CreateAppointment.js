// src / services / appointmentService.js
import { fetchUtil } from "./fetchUtil";

export default async function createAppointment(appointmentData) {
  try {
    console.log(appointmentData, "Appointment Data to be sent");
    const result = await fetchUtil({
      url: "/appointments",
      method: "POST",
      body: JSON.stringify(appointmentData),
    });
    return result;
  } catch (error) {

    if (error.name === "ApiError") {
      console.error("API Error:", {
        status: error.status,
        message: error.message,
        data: error.data,
      });
    } else {
      console.error("Unexpected Error:", error);
    }

    throw error;
  }
}
