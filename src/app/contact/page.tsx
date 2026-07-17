"use client";

import { useState } from "react";
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


import { validateContactForm } from "../validations/contactValidation";
import { submitEnquiry } from "../services/contactService";


export default function ContactPage() {


  const [formData, setFormData] = useState<ContactFormModel>(contactInitialValues);


  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: value,
      whatsapp: prev.sameAsWhatsapp ? value : prev.whatsapp,
    }));

    setErrors((prev) => ({
      ...prev,
      phone: "",
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const checked = e.target.checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        whatsapp: checked ? prev.phone : "",
      }));
    } else {
      let inputValue = value;

      // Name field - only letters and spaces
      if (name === "name") {
        inputValue = value
          .replace(/[^a-zA-Z\s]/g, "") // Remove numbers & special characters
          .replace(/\s{2,}/g, " ")     // Remove multiple spaces
          .replace(/^\s/, "");         // Remove leading space
      }

      // Phone & WhatsApp - numbers only, max 10 digits
      if (name === "phone" || name === "whatsapp") {
        inputValue = value
          .replace(/\D/g, "") // Numbers only
          .slice(0, 10);      // Maximum 10 digits
      }

      setFormData((prev) => ({
        ...prev,
        [name]: inputValue,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };



  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const payload: EnquiryRequest = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        sameAsWhatsApp: formData.sameAsWhatsapp,
        whatsAppNumber: formData.sameAsWhatsapp
          ? formData.phone
          : formData.whatsapp,
        service: formData.service,
        message: formData.message,
      };

      const response = await submitEnquiry(payload);

      console.log(response);


      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Enquiry submitted successfully.",
        backdrop: "rgba(0,0,0,0.6)",
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: "#0B6BFF",

      });

      setFormData(contactInitialValues);
      setErrors({});
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#0B6BFF",
      });
    } finally {
      setLoading(false);
    }
  };

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
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer capitalize w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF]"
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
                    Name<sup className="text-[#256EAA]">*</sup>
                  </label>

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer lowercase w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF]"
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
                    Email ID<sup className="text-[#256EAA]">*</sup>
                  </label>

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative mb-10">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={10}
                    placeholder=" "
                    className="peer w-full border-b border-gray-300 bg-transparent pb-3 pt-6 outline-none transition-all duration-300 focus:border-[#0B6BFF]"
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
                    Phone Number<sup className="text-[#256EAA]">*</sup>
                  </label>

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.phone}
                    </p>
                  )}

                  <div className="flex items-center gap-3 mt-3">
                    <label
                      htmlFor="sameAsWhatsapp"
                      className="text-[16px] text-[#1E1E1E] cursor-pointer elms-sans-Regular"
                    >
                      Is it same as your WhatsApp number?
                    </label>

                    <input
                      id="sameAsWhatsapp"
                      type="checkbox"
                      name="sameAsWhatsapp"
                      checked={formData.sameAsWhatsapp}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border border-[#1E1E1E] accent-black cursor-pointer"
                    />
                  </div>
                </div>
                {/* Service */}
                <div className="relative">
  {/* Label */}
  <label
    htmlFor="service"
    className="absolute left-0 top-0 z-10 text-[16px] text-gray-500 elms-sans-medium transition-all duration-300 peer-focus:text-[#0B6BFF]"
  >
    Service<sup className="text-[#256EAA]">*</sup>
  </label>

  {/* Select */}
  <select
    id="service"
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="
      peer
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
      [-moz-appearance:none]
    "
  >
    <option value="">Select</option>
    <option value="Web Design">Web Design</option>
    <option value="UI/UX">UI / UX</option>
    <option value="Development">Development</option>
  </select>

  {/* Custom Dropdown Arrow */}
  <div className="pointer-events-none absolute right-0 top-[55%] -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>

  {/* Error */}
  {errors.service && (
    <p className="mt-2 text-xs text-red-500">
      {errors.service}
    </p>
  )}
</div>

                {/* Message */}
                <div className="relative mt-10">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer
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
   [text-transform:lowercase] first-letter:[text-transform:uppercase]
      focus:border-[#0B6BFF]"
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
                    Message
                  </label>

                  {errors.message && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}


                <button
                  className="elms-sans-medium text-white text-[20px] leading-[39.318px] tracking-[0.34px] mx-auto block rounded-[10px] bg-gradient-to-r from-blue-800 to-cyan-400 px-[14px] py-[2px]"
                  type="submit"
                  disabled={loading}
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