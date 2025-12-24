import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AxiosError } from "axios";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getErrorMessage = (error: unknown): string => {
  console.log("error in getError >>>", error);

  if (error && typeof error === "object" && "isAxiosError" in error) {
    const axiosError = error as AxiosError<{ message?: string }>;

    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Network error, please try again."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected error occurred.";
};
