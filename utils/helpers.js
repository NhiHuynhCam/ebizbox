import { createStandaloneToast } from "@chakra-ui/toast";
const { toast } = createStandaloneToast();
export const toastError = (title, error, description, stay) => {
    toast({
      status: "error",
      title: title || "Could not connect to the Base servers",
      description:
        description ||
        error?.errorMessage?.message ||
        (error?.errorMessage?.errors && error?.errorMessage?.errors[0][0]) ||
        error?.errorMessage?.error ||
        "Kindly try again later",
      duration: stay ? null : 4000,
      position: "top",
    });
};
  
export const toastSuccess = (title, description, stay) => {

toast({
    status: "success",
    title: title || "Successful!",
    description: description || "",
    duration: stay ? null : 4000,
    position: "top",
});
};
  