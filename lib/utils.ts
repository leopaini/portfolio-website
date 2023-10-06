export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength)
    return false;
  return true;
};

export const getErrorMessage = (error: unknown) => {
  let message = "Unknown error";
  if (typeof error === "string") {
    message = error;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  }
  return message;
};
