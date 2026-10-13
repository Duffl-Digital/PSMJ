import sanitizeHtml from "sanitize-html";

export function sanitizeInput(data: any) {
  return {
    name: sanitizeHtml(data.name || {}, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim(),

    email: sanitizeHtml(data.email || {}, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim(),

    phone: sanitizeHtml(data.phone || {}, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim(),

    subject: sanitizeHtml(data.subject || {}, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim(),

    message: sanitizeHtml(data.message || {}, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim(),
  };
}