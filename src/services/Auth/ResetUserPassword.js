import { COMPANY_ID } from "../../config/BaseUrl";
import { fetchUtil } from "../fetchUtil";

export const ResetPassword = async (userData) => {
  try {
    const response = await fetchUtil({
      url: "/auth/reset-password",
      method: "POST",
      body: {
        email: userData.email,
        password: userData.password,
        password_otp: userData.passwordOtp,
        company_id: COMPANY_ID,
      },
    });

    console.log("Reset Password successfully:", response);
    return response;
  } catch (error) {
    console.error("Error Reset Password:", error);

    if (error.message.includes("email not found")) {
      throw new Error(
        "This email is not registered. Please use a different email or login.",
      );
    }

    if (error.message.includes("password otp not found")) {
      throw new Error(
        "This password otp is not registered. Please use a different password otp or login.",
      );
    }

    throw error;
  }
};

export default ResetPassword;
