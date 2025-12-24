import { getErrorMessage } from "@/lib/utils";
import type { SendMessageParameter as SendEmailParameter } from "@/type";
import axios from "axios";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_EMAIL_JS_BASE_URL;
const api = {
  send: "/send",
};

const AxiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendEmail = async (body: SendEmailParameter) => {
  try {
    const { data } = await AxiosClient.post(api.send, body);
    toast.success("Message sent successfully!");
    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    toast.error(errorMessage);
    return errorMessage;
  }
};
