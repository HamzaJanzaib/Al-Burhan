import { COMPANY_ID } from "../../config/BaseUrl";
import { fetchUtil } from "../fetchUtil";


export const SignupUser = async (userData) => {
  try {
    const response = await fetchUtil({
      url: "/auth/register-user",
      method: "POST",
      body: {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        company_id: COMPANY_ID,
        phone: userData.phone,
      },
    });

    console.log("User created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    
    if (error.message.includes("email already exists")) {
      throw new Error("This email is already registered. Please use a different email or login.");
    }
    
    throw error;
  }
};

export default SignupUser;