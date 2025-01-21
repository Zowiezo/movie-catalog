import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to get error message
export const getErrorMessage = (error) => {
  let errorMessage;

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      errorMessage = errMsg;
    } else {
      errorMessage = error.message;
    }
  } else {
    errorMessage = "Unable to fetch the data. Please try again later.";
  }

  return errorMessage;
};

// Function to save theme in localStorage
export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

// Function to get theme from localStorage
export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "";
};

// Function to merge class names using clsx and tailwind-merge
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
