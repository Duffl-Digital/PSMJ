export interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  sameAsWhatsapp: boolean;
  whatsapp: string;
  service: string;
  message: string;
}

export interface EnquiryRequest {
  name: string;
  email: string;
  phone: string;
  sameAsWhatsApp: boolean;
  whatsAppNumber: string;
  service: string;
  message: string;
}

export const contactInitialValues: ContactFormModel = {
  name: "",
  email: "",
  phone: "",
  sameAsWhatsapp: false,
  whatsapp: "",
  service: "",
  message: "",
};