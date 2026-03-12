import avatar from "../assets/images/avatar.png";

const Contact = () => {
  return (
    <section className="px-6 md:px-20 mt-20">

      {/* Header */}
      <p className="text-[#181818] font-cormorant italic font-[700] text-[18px] md:text-[24px]">
        (05 Contact Us)
      </p>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

        <h2 className="text-[36px] md:text-[80px] font-urbanist font-[600]">
          Lets Share{" "}
          <span className="text-yellow-400 italic md:text-[80px] text-[36px] font-cormorant font-[600]">
            Ideas
          </span>
        </h2>

        <p className="max-w-md text-[#707070] font-urbanist text-[18px]">
          Have a question, or ready to kick off your project? We'd love
          to hear from you. Drop us a message, and our team will get
          back to you within 24 hours to discuss how we can help your
          business thrive.
        </p>

      </div>

      {/* Divider */}
      <div className="border-t border-black mt-6 mb-10"></div>

      {/* Content */}
     {/* Content */}
<div className="grid md:grid-cols-2 gap-12">

  {/* LEFT SIDE */}
  <div>

    <div className="flex items-center gap-4 mb-6">

      <img
        src={avatar}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />

      <div>
        <p className="text-[#181818] font-cormorant italic font-[700] text-[18px] md:text-[24px]">
          Shurud Wani
        </p>
        <p className="text-[#707070] font-[400] font-urbanist text-[16px]">
          Creative Director
        </p>
      </div>

    </div>

    <p className="text-[#818181] font-[400] text-[18px] font-urbanist mb-4 max-w-md">
      At Lemon Labs, we believe great products are like lemonade,
      simple, well-crafted, and refreshing to use.
    </p>

    <p className="text-[#818181] font-[400] text-[18px] font-urbanist">
      Tell us what you're building, and we'll help you shape it.
    </p>

  </div>

  {/* RIGHT SIDE FORM */}
  <form className="space-y-6">

    <div>
      <label className="text-[#000000] text-[24px] font-cormorant italic font-[700]">
        Name
      </label>
      <input
        type="text"
        placeholder="Your Name please"
        className="w-full mt-2 bg-[#F7F7F7]  text-[18px] font-[400] font-urbanist rounded-lg p-4 outline-none"
      />
    </div>

    <div>
      <label className="text-[#000000] text-[24px] font-cormorant italic font-[700]">
        Email
      </label>
      <input
        type="email"
        placeholder="Where can we reach you?"
        className="w-full mt-2 bg-[#F7F7F7]  text-[18px] font-[400] font-urbanist rounded-lg p-4 outline-none"
      />
    </div>

    <div>
      <label className="text-[#000000] text-[24px] font-cormorant italic font-[700]">
        Message
      </label>
      <textarea
        rows="5"
        placeholder="Tell us about your idea, product, or problem you want to solve..."
        className="w-full mt-2 bg-[#F7F7F7]  text-[18px] font-[400] font-urbanist rounded-lg p-4 outline-none"
      />
    </div>

  </form>

</div>

{/* Bottom Row (Email + Submit) */}
<div className="flex flex-col md:flex-row md:items-end md:justify-between mt-2 gap-6">

  {/* Email */}
  <div>
    <p className="text-[#000000] text-[28px] font-cormorant italic font-[700]">
      Email
    </p>
    <p className="font-urbanist text-[#707070] font-[400] text-[18px]">
      contact@lemonlabs.in
    </p>
  </div>

  {/* Submit */}
  <div className="md:w-[420px] w-full">
    <button
      type="submit"
      className="w-full bg-black text-white py-4 rounded-full font-urbanist text-[18px]"
    >
      Submit
    </button>
  </div>

</div>
    </section>
  );
};

export default Contact;