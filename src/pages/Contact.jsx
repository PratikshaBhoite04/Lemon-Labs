import { useState } from "react";
import avatar from "../assets/images/avatar.png";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter a valid email";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message =
        "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Success
    alert("Form Submitted Successfully!");

    // Reset Form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
<section
  id="contact"
className="scroll-mt-32 px-5 sm:px-6 md:px-20 pt-32 md:pt-20 pb-16 md:pb-20">

      {/* Header */}
      <p className="text-[#181818] font-cormorant italic font-[700] text-[16px] sm:text-[18px] md:text-[24px]">
        (05 Contact Us)
      </p>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-10 mt-2">

        <h2 className="text-[40px] sm:text-[52px] md:text-[80px] leading-[95%] font-urbanist font-[600] max-w-[700px]">
          Lets Share{" "}
          <span className="text-yellow-400 italic font-cormorant font-[600]">
            Ideas
          </span>
        </h2>

        <p className="max-w-[500px] text-[#707070] font-urbanist text-[16px] sm:text-[18px] leading-[155%]">
          Have a question, or ready to kick off your project?
          We'd love to hear from you. Drop us a message,
          and our team will get back to you within 24 hours
          to discuss how we can help your business thrive.
        </p>

      </div>

      {/* Divider */}
      <div className="border-t border-black mt-6 mb-10 md:mb-14"></div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* Avatar */}
          <div className="flex items-center gap-4 mb-6">

            <img
              src={avatar}
              alt="profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />

            <div>

              <p className="text-[#181818] font-cormorant italic font-[700] text-[20px] md:text-[26px]">
                Shurud Wani
              </p>

              <p className="text-[#707070] font-[400] font-urbanist text-[14px] md:text-[16px]">
                Creative Director
              </p>

            </div>

          </div>

          {/* Description */}
          <p className="text-[#818181] font-[400] text-[17px] sm:text-[20px] md:text-[24px] font-urbanist mb-5 max-w-[560px] leading-[150%]">
            At Lemon Labs, we believe great products are
            like lemonade, simple, well-crafted, and
            refreshing to use.
          </p>

          {/* Bottom Text */}
          <p className="text-[#818181] font-[400] text-[17px] sm:text-[20px] md:text-[24px] font-urbanist max-w-[340px] leading-[150%]">
            Tell us what you’re building,<br />
            and we’ll help you shape it.
          </p>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="space-y-5 md:space-y-6"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div>

            <label className="text-[#000000] text-[22px] md:text-[24px] font-cormorant italic font-[700]">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name please"
              className={`w-full mt-2 bg-[#F7F7F7] text-[16px] md:text-[18px] font-[400] font-urbanist rounded-xl p-4 md:p-5 outline-none border transition-all duration-300

              ${
                errors.name
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2 font-urbanist">
                {errors.name}
              </p>
            )}

          </div>

          {/* Email */}
          <div>

            <label className="text-[#000000] text-[22px] md:text-[24px] font-cormorant italic font-[700]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Where can we reach you?"
              className={`w-full mt-2 bg-[#F7F7F7] text-[16px] md:text-[18px] font-[400] font-urbanist rounded-xl p-4 md:p-5 outline-none border transition-all duration-300

              ${
                errors.email
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2 font-urbanist">
                {errors.email}
              </p>
            )}

          </div>

          {/* Message */}
          <div>

            <label className="text-[#000000] text-[22px] md:text-[24px] font-cormorant italic font-[700]">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your idea, product, or problem you want to solve..."
              className={`w-full mt-2 bg-[#F7F7F7] text-[16px] md:text-[18px] font-[400] font-urbanist rounded-xl p-4 md:p-5 outline-none border transition-all duration-300 resize-none

              ${
                errors.message
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-2 font-urbanist">
                {errors.message}
              </p>
            )}

          </div>

       

        </form>

      </div>

{/* Bottom Row */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-4 md:mt-6">

  {/* Email */}
  <div>

    <p className="text-[#000000] text-[24px] md:text-[28px] font-cormorant italic font-[700]">
      Email
    </p>

    <p className="font-urbanist text-[#707070] font-[400] text-[16px] md:text-[18px] mt-1">
      contact@lemonlabs.in
    </p>

  </div>

  {/* Buttons */}
<div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 lg:w-[50%] lg:pl-10">
    {/* Submit */}
    <button
      type="submit"
      onClick={handleSubmit}
      className="
      w-full
      sm:w-auto
      px-10
      py-3.5
      bg-black
      text-white
      rounded-full
      font-urbanist
      text-[16px]
      md:text-[20px]
      transition-all
      duration-300
      hover:opacity-90
      "
    >
      Submit
    </button>

    {/* OR */}
    <span className="text-[#707070] font-urbanist text-[15px] md:text-[20px] self-center">
      OR
    </span>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="
      w-full
      sm:w-auto
      flex
      items-center
      justify-center
      gap-3
      px-8
      py-3.5
      bg-black
      text-white
      rounded-full
      font-urbanist
      text-[16px]
      md:text-[20px]
      transition-all
      duration-300
      hover:opacity-90
      "
    >

      <FaWhatsapp className="text-[#25D366] text-[24px] stroke-white stroke-[12]" />

      Whatsapp Us

    </a>

  </div>

</div>

    </section>
  );
};

export default Contact;