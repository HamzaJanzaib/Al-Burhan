import { COMPANY_ID } from "../../config/BaseUrl";
import { fetchUtil } from "../fetchUtil";

export const ForgetPassword = async (email) => {
  try {
    const response = await fetchUtil({
      url: "/auth/forget-password",
      method: "POST",
      body: {
        email: email,
        company_id: COMPANY_ID,
      },
    });

    console.log("Forget Password successfully:", response);
    return response;
  } catch (error) {
    console.error("Error Forget Password:", error);

    if (error.message.includes("email not found")) {
      throw new Error(
        "This email is not registered. Please use a different email or login.",
      );
    }

    throw error;
  }
};

export default ForgetPassword;
