// services/LogInUser.js
import { COMPANY_ID } from "../../config/BaseUrl";
import { fetchUtil } from "../fetchUtil";
import { jwtDecode } from "jwt-decode";

export const LogInUser = async (userData) => {
  try {
    const response = await fetchUtil({
      url: "/auth/login",
      method: "POST",
      body: {
        email: userData.email,
        password: userData.password,
        company_id: COMPANY_ID,
      },
      requiresAuth: false,
    });

    // Handle successful login
    if (response?.token) {
      // Save token
      localStorage.setItem("authToken", response.token);
      console.log("Token saved successfully");

      // Decode token for user_id
      try {
        const decoded = jwtDecode(response.token);
        const extractedUserId = decoded?.id || decoded?._id || decoded?.user_id;

        if (extractedUserId) {
          sessionStorage.setItem("user_id", extractedUserId);
          console.log("User ID saved from token:", extractedUserId);
        }
      } catch (decodeError) {
        console.warn("Error decoding token:", decodeError);
      }

      // Save full user data if available
      if (response?.user) {
        sessionStorage.setItem("userData", JSON.stringify(response.user));

        // Use user ID from user object as fallback
        const userId = response.user.id || response.user._id;
        if (userId && !sessionStorage.getItem("user_id")) {
          sessionStorage.setItem("user_id", userId);
        }
      } else if (response?.id || response?._id) {
        // If no user object, try to get ID from response
        const userId = response.id || response._id;
        if (userId) {
          sessionStorage.setItem("user_id", userId);
        }
      }

      console.log("Login successful");
    }

    return response;
  } catch (error) {
    console.error("Login error:", error);

    // Handle specific login errors
    if (error.status === 401) {
      throw new Error("Invalid email or password. Please try again.");
    }

    throw error;
  }
};

// For backward compatibility
export default LogInUser;
