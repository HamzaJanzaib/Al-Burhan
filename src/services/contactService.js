
// src/services/contactService.js

import { fetchUtil } from "./fetchUtil";

export const submitContactForm = async (formData, signal) => {
  try {
    const response = await fetchUtil({
      url: "/contact",
      method: "POST",
      body: JSON.stringify(formData),
      signal, // optional (useful for abort controller)
    });
    console.log("Contact form submitted successfully:", response);
    return response;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error; // ApiError will be propagated
  }
};

