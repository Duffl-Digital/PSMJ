"use client";

import { useState,useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import {
  ContactFormModel,
  EnquiryRequest,
  contactInitialValues,
} from "../models/contactModel";
import ReCAPTCHA from "react-google-recaptcha";


import { validateContactForm } from "../validations/contactValidation";
import { submitEnquiry } from "../services/contactService";


export default function ContactNewPage() {
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  subject: "",
  message: "",
});
const [captchaToken, setCaptchaToken] = useState("");
 const recaptchaRef = useRef<ReCAPTCHA>(null);
const [errors, setErrors] = useState<Record<string, string>>({});
const [loading, setLoading] = useState(false);
const [sameWhatsapp, setSameWhatsapp] = useState(false);
const [honeypot, setHoneypot] = useState("");
function handleChange(
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) {
  const { name, value } = e.target;

  setForm((prev) => {
    const updated = {
      ...prev,
      [name]: value,
    };

    if (name === "phone" && sameWhatsapp) {
      updated.whatsapp = value;
    }

    return updated;
  });

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
}

function validateForm() {
  const newErrors: Record<string, string> = {};

  if (!form.name.trim()) {
    newErrors.name = "Enter name";
  }

  if (!form.email.trim()) {
    newErrors.email = "Enter email id";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
  ) {
    newErrors.email = "Enter valid email id";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Enter phone number";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Enter a valid 10-digit phone number";
  }

  if (!form.whatsapp.trim()) {
    newErrors.whatsapp = "Enter whatsapp number";
  } else if (!/^[6-9]\d{9}$/.test(form.whatsapp)) {
    newErrors.whatsapp = "Enter valid whatsapp number";
  }

  if (!form.subject) {
    newErrors.subject = "Select service";
  }

  if (!form.message.trim()) {
    newErrors.message = "Enter message";
  }
  if (honeypot) {
      newErrors.honeypot = "Something went wrong";
  }
  if (!captchaToken) {
  newErrors.captcha = "Verify captcha";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
  ...form,
  captchaToken,
  honeypot,
}),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Something went wrong.");
      return;
    }

      Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Enquiry submitted successfully.",
            backdrop: "rgba(0,0,0,0.6)",
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonColor: "#0B6BFF",
    
          });
          recaptchaRef.current?.reset();
          setCaptchaToken("");

    setForm({
      name: "",
      email: "",
      phone: "",
      whatsapp: "",
      subject: "",
      message: "",
    });

    setErrors({});
    setSameWhatsapp(false);
  } finally {
    setLoading(false);
  }
}
function handleNameKeyDown(
  e: React.KeyboardEvent<HTMLInputElement>
) {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Home",
    "End",
  ];

  if (allowedKeys.includes(e.key)) return;

  if (!/^[A-Za-z ]$/.test(e.key)) {
    e.preventDefault();
  }
}

function handleNameInput(
  e: React.FormEvent<HTMLInputElement>
) {
  e.currentTarget.value = e.currentTarget.value.replace(
    /[^A-Za-z ]/g,
    ""
  );
}
function handleNumberKeyDown(
  e: React.KeyboardEvent<HTMLInputElement>
) {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Home",
    "End",
  ];

  if (allowedKeys.includes(e.key)) return;

  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
}

function handleNumberInput(
  e: React.FormEvent<HTMLInputElement>
) {
  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
}
function handleWhatsappCheckbox(
  e: React.ChangeEvent<HTMLInputElement>
) {
  const checked = e.target.checked;

  setSameWhatsapp(checked);

  setForm((prev) => ({
    ...prev,
    whatsapp: checked ? prev.phone : prev.whatsapp,
  }));
   if (checked) {
    setErrors((prev) => ({
      ...prev,
      whatsapp: "",
    }));
  }
}
 
  return (



    <section className="bg-white pt-8  ps-0 2xl:ps-20   overflow-hidden">
      <Header />
      <div className="pt-5 ps-0 lg:ps-20 2xl:ps-0 mx-auto container lg:max-w-none 2xl:container">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start px-5 sm:px-0">

          {/* Left */}


     <motion.div
            className="xl:col-span-4 lg:pt-20 ps-5 lg:ps-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 mb-3"
            ></motion.div>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#1E1E1E] elms-sans-bold text-[18px] leading-[151%] tracking-[0.9px]"
            >
              Get in Touch
            </motion.p>


            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 text-[#1E1E1E] text-[35px] figtree-extra-bold leading-[136%] tracking-[1.75px] uppercase"
            >
              LET'S <br />

              <span className="bg-gradient-to-b from-[#256EAA] via-[#2C92B6] to-[#E9EBBB] bg-clip-text text-transparent">
                CONNECT
              </span>{" "}
              & <br />
              CREATE IMPACT
            </motion.h2>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="space-y-8 mt-16"
            >

              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src="/images/contact/address-icon.svg"
                    alt="Banner"
                    width={10}
                    height={10}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <p className="text-black elms-sans-Regular text-[16.021px] font-normal leading-[21.343px] tracking-[0.481px] [font-feature-settings:'liga'_off]">
                  #6, 5th Floor, Rajakrishnan Street, Alwarpet, Chennai - 600018
                </p>
              </div>


              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src="/images/contact/mail-icon.svg"
                    alt="Banner"
                    width={10}
                    height={10}
                    className="w-full h-auto object-cover"
                  />
                </div>

          <a
  href="mailto:we@psmj.in"
  className="text-black elms-sans-Regular text-[16.021px] font-normal leading-[21.343px] tracking-[0.481px] [font-feature-settings:'liga'_off] no-underline [-webkit-tap-highlight-color:transparent] focus:outline-none"
>
  we@psmj.in
</a>
              </div>


              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src="/images/contact/call.svg"
                    alt="Banner"
                    width={10}
                    height={10}
                    className="w-full h-auto object-cover"
                  />
                </div>

               <p className="text-black elms-sans-Regular text-[16.021px] font-normal leading-[21.343px] tracking-[0.481px] [font-feature-settings:'liga'_off]">
  <a
    href="tel:+919840077635"
    className="text-inherit no-underline"
  >
    +91 98400 77635
  </a>

  {" | "}

  <a
    href="tel:+914428170635"
    className="text-inherit no-underline"
  >
    044 2817 0635
  </a>
</p>
              </div>

            </motion.div>


            <motion.a
              href="https://maps.app.goo.gl/exYHi9sku9gbKNZTA"
              target="_blank"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 rounded-[68.023px] gap-1 border-[0.567px] border-black bg-black text-[#FBFBFB] text-center elms-sans-Regular text-[14.738px] font-normal leading-[134.481%] rounded-full px-4 py-2 flex items-center w-max"
            >
              <div>
                <Image
                  src="/images/contact/map-icon.svg"
                  alt="Banner"
                  width={21}
                  height={21}
                  className="h-auto object-cover"
                />
              </div>

              View on Google Map
            </motion.a>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-1 mt-10"
            >

              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/contact/linkdin.svg"
                  alt="Linkedin"
                  width={30}
                  height={30}
                  className="h-auto object-cover"
                />
              </div>


              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/contact/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="h-auto object-cover"
                />
              </div>

            </motion.div>

          </motion.div>


          {/* Right */}


          <div className="xl:col-span-8 relative flex flex-col items-center justify-center ps-5 md:lg-0">

           
            <div className="overflow-hidden"> <Image src="/images/contact/contact-banner.png" alt="Contact Banner" width={900} height={700} className="w-full h-auto object-cover" /> </div>

              <Image src="/images/contact/arrow-icon.png" alt="arrow" width={312} height={300} className=" h-auto hidden xl:block absolute left-0 "/>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative bg-white rounded-[10px] shadow-[0_14px_80px_0_rgba(0,0,0,0.07),0_9.074px_46.852px_0_rgba(0,0,0,0.05),0_5.393px_25.481px_0_rgba(0,0,0,0.04),0_2.8px_13px_0_rgba(0,0,0,0.04),0_1.141px_6.519px_0_rgba(0,0,0,0.03),0_0.259px_3.148px_0_rgba(0,0,0,0.02)] py-8 px-4 lg:p-10 w-full lg:max-w-xl lg:-mt-[20px] xl:-mt-[70px] xl:ml-[162px]"
            >

              <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#1c61a1] flex items-center justify-center"
            >
              <Image
                src="/images/contact/form-icon.png"
                alt="Form Icon"
                width={60}
                height={60}
              />
            </motion.div>

              




               <form onSubmit={handleSubmit} className="space-y-4 mt-8">
                 <input
  type="text"
  name="website"
  autoComplete="off"
  tabIndex={-1}
  value={honeypot}
  onChange={(e) => setHoneypot(e.target.value)}
  className="hidden"
/>
 {errors.honeypot && (
    <p className="text-red-500 text-xs mt-1 mb-2">{errors.honeypot}</p>
  )}

{/* Full Name */}
<div className="relative">
  <input
    id="name"
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    onKeyDown={handleNameKeyDown}
    onInput={handleNameInput}
    placeholder=" "
    className={`peer w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF] ${
      errors.name
        ? "border-red-500"
        : "border-gray-300 focus:border-blue-600"
    }`}
  />
  <label
    htmlFor="name"
    className="absolute left-0 top-5 elms-sans-medium text-gray-500 transition-all duration-300
    peer-placeholder-shown:top-5
    peer-placeholder-shown:text-base
    peer-focus:top-0
    peer-focus:text-xs
    peer-focus:text-[#0B6BFF]
    peer-[:not(:placeholder-shown)]:top-0
    peer-[:not(:placeholder-shown)]:text-xs"
  >
     Name <span className="text-red-500">*</span>
  </label>
  {errors.name && (
    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
  )}
</div>

{/* Email */}
<div className="relative">
  <input
    id="email"
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder=" "
    className={`peer lowercase w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF] ${
      errors.email
        ? "border-red-500"
        : "border-gray-300 focus:border-blue-600"
    }`}
  />
  <label
    htmlFor="email"
    className="absolute left-0 top-5 elms-sans-medium text-gray-500 transition-all duration-300
    peer-placeholder-shown:top-5
    peer-placeholder-shown:text-base
    peer-focus:top-0
    peer-focus:text-xs
    peer-focus:text-[#0B6BFF]
    peer-[:not(:placeholder-shown)]:top-0
    peer-[:not(:placeholder-shown)]:text-xs"
  >
    Email ID <span className="text-red-500">*</span>
  </label>

  {errors.email && (
    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
  )}
</div>

{/* Phone */}
<div className="relative">
  <input
    id="phone"
    type="tel"
    name="phone"
    value={form.phone}
    maxLength={10}
    inputMode="numeric"
    onChange={handleChange}
    onKeyDown={handleNumberKeyDown}
    onInput={handleNumberInput}
    placeholder=" "
    className={`peer w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF] ${
      errors.phone
        ? "border-red-500"
        : "border-gray-300 focus:border-blue-600"
    }`}
  />

  <label
    htmlFor="phone"
    className="absolute left-0 top-5 elms-sans-medium text-gray-500 transition-all duration-300
      peer-placeholder-shown:top-5
      peer-placeholder-shown:text-base
      peer-focus:top-0
      peer-focus:text-xs
      peer-focus:text-[#0B6BFF]
      peer-[:not(:placeholder-shown)]:top-0
      peer-[:not(:placeholder-shown)]:text-xs"
  >
    Phone Number <span className="text-red-500">*</span>
  </label>

  {errors.phone && (
    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
  )}

  <div className="flex items-center mt-3">
    <input
      id="sameWhatsapp"
      type="checkbox"
      checked={sameWhatsapp}
      onChange={handleWhatsappCheckbox}
      className="mr-2"
    />
    <label htmlFor="sameWhatsapp" className="text-sm">
      WhatsApp number is same as Phone Number
    </label>
  </div>
</div>

{/* WhatsApp */}
<div className="relative">
  <input
    id="whatsapp"
    type="tel"
    name="whatsapp"
    value={form.whatsapp}
    maxLength={10}
    inputMode="numeric"
    onChange={handleChange}
    onKeyDown={handleNumberKeyDown}
    onInput={handleNumberInput}
    readOnly={sameWhatsapp}
    placeholder=" "
    className={`peer w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF] ${
      errors.whatsapp
        ? "border-red-500"
        : "border-gray-300 focus:border-blue-600"
    } ${sameWhatsapp ? "bg-gray-100" : ""}`}
  />

  <label
    htmlFor="whatsapp"
    className="absolute left-0 top-5 elms-sans-medium text-gray-500 transition-all duration-300
      peer-placeholder-shown:top-5
      peer-placeholder-shown:text-base
      peer-focus:top-0
      peer-focus:text-xs
      peer-focus:text-[#0B6BFF]
      peer-[:not(:placeholder-shown)]:top-0
      peer-[:not(:placeholder-shown)]:text-xs"
  >
    WhatsApp Number <span className="text-red-500">*</span>
  </label>

  {errors.whatsapp && (
    <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
  )}
</div>

{/* Service */}
<div className="relative">
  <select
    id="subject"
    name="subject"
    
    value={form.subject}
    onChange={handleChange}
    className={`peer
      w-full
      bg-transparent
      border-0
      border-b
      border-gray-300
      rounded-none
      pt-8
      pb-3
      pr-8
      text-[#1E1E1E]
      outline-none
      focus:border-[#0B6BFF]
      appearance-none
      [-webkit-appearance:none]
      [-moz-appearance:none] ${
      errors.subject
        ? "border-red-500"
        : "border-gray-300 focus:border-blue-600"
    }`}
  >
   
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>

  <label
    htmlFor="subject"
    className="absolute left-0 top-0 z-10 text-[16px] text-gray-500 elms-sans-medium transition-all duration-300 peer-focus:text-[#0B6BFF]"
  >
    Service <span className="text-red-500">*</span>
  </label>

  {errors.subject && (
    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
  )}
</div>

{/* Message */}
<div className="relative">
  <textarea
    id="message"
    name="message"
    rows={5}
    value={form.message}
    onChange={handleChange}
    placeholder=" "
    className={`peer
      w-full
      border
      ps-4
      rounded-[10px]
      border-gray-300
      bg-transparent
      pb-3
      pt-6
      outline-none
      transition-all
      duration-300
      resize-none
   [text-transform:lowercase] first-letter:[text-transform:uppercase]
      focus:border-[#0B6BFF] ${
      errors.message
        ? "border-red-500"
        : "border-gray-300 focus:border-blue-600"
    }`}
  />

  <label
    htmlFor="message"
    className="absolute left-4 top-5 elms-sans-medium text-gray-500 transition-all duration-300
    peer-placeholder-shown:top-5
    peer-placeholder-shown:text-base
    peer-focus:top-2
    peer-focus:text-xs
    peer-focus:text-[#0B6BFF]
    peer-[:not(:placeholder-shown)]:top-2
    peer-[:not(:placeholder-shown)]:text-xs"
  >
    Message <span className="text-red-500">*</span>
  </label>

  {errors.message && (
    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
  )}
</div>

<div className="relative">
 <label className="block elms-sans-medium mb-2 text-gray-500  text-base  text-[14px]">
          Verify Captcha <span className="text-red-500">*</span>
        </label>
         <ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
  className="scale-75 origin-left"
  onChange={(token) => {
    setCaptchaToken(token || "");
   setErrors((prev) => ({
    ...prev,
    captcha: "",
  }));
  }}
/>
{errors.captcha && (
  <p className="text-red-500  text-[12px] mt-1">
    {errors.captcha}
  </p>
)}
</div>

<button
  type="submit"
  disabled={loading}
  className="elms-sans-medium text-white text-[20px] leading-[39.318px] tracking-[0.34px] mx-auto block rounded-[10px] bg-gradient-to-r from-blue-800 to-cyan-400 px-[14px] py-[2px]"
>
   {loading ? "Submitting..." : "Submit"}
</button>
    </form>

            </motion.div> {/* Form Card */}

          </div>

          {/* Right */}

        </div> {/* Grid */}

      </div> {/* Container */}

        <Footer/>
    </section>
  );
}