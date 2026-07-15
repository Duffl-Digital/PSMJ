import axios from "axios";
import { EnquiryRequest } from "../models/contactModel";

const API = axios.create({
  baseURL: "http://localhost:5043/api",
  auth: {
    username: "admin",
    password: "webpassword",
  },
});

export const submitEnquiry = async (data: EnquiryRequest) => {
  try {
    const response = await API.post("/Enquiry/submit", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.log("Status:", error.response.status);
console.log("Data:", JSON.stringify(error.response.data, null, 2));
    } else if (error.request) {
      console.log("No response from server");
      console.log(error.request);
    } else {
      console.log(error.message);
    }

    throw error;
  }
};