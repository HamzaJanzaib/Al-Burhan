// services/EditProfile.js
import { fetchUtil } from "./fetchUtil";

export const EditProfile = async (profileData, id) => {
  try {
    // Get stored user_id from sessionStorage
    const storedUserId = sessionStorage.getItem("user_id");
    
    if (!storedUserId) {
      console.warn("No user_id found in sessionStorage");
    }

    // Prepare data with user_id
    const updatedData = {
      ...profileData,
      user_id: storedUserId || id,
    };

    const response = await fetchUtil({
      url: `/users/${id}`,
      method: "PUT",
      body: updatedData,
      requiresAuth: true,
    });

    console.log("Profile updated successfully:", response);
    return response;
  } catch (error) {
    console.error("Error updating profile:", error);
    
    // Handle backend validation errors
    if (error.status === 400) {
      throw new Error("Invalid data. Please check your input and try again.");
    }
    
    throw error;
  }
};

// For backward compatibility
export default EditProfile;