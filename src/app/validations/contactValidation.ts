import { ContactFormModel } from "../models/contactModel";

export const validateContactForm = (
  formData: ContactFormModel
): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = "Enter name";
  }

  if (!formData.email.trim()) {
    errors.email = "Enter email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = "Enter a valid email";
  }

if (!formData.phone.trim()) {
  errors.phone = "Enter phone number ";
} else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
  errors.phone = "Please enter a valid Indian mobile number";
}

// WhatsApp number is optional
if (
  formData.whatsapp.trim() &&
  !/^[6-9]\d{9}$/.test(formData.whatsapp)
) {
  errors.whatsapp = "Please enter a valid Indian mobile number";
}

  if (!formData.service) {
    errors.service = "  Select a service";
  }



  return errors;
};