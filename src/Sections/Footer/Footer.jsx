import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";
import toast from "react-hot-toast";

function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const key = import.meta.env.VITE_EMAIL_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending...");
    const formData = new FormData();

    formData.append("access_key", key);
    formData.append("email", email);
    formData.append("subject", "Subscriber");
    formData.append("message", `${email} is new subscriber`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.dismiss(toastId);
      setEmail("");
      toast.success("Subcribed successfully");
    } else {
      console.log("Error", data);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-10/12 mx-auto">
      <div className="border-b-2 md:flex items-center justify-between mt-20 pb-5">
        <div className="pl-2">
          <img src={logo} alt="" />
          <p className="w-full py-5 lg:w-7/12">
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="md:flex gap-2 justify-between items-center space-y-4 w-full md:w-7/12">
          <div className="flex items-center gap-2 md:gap-5 rounded-3xl bg-gray-900 py-3 px-6 w-auto md:w-72">
            <img src={user_icon} alt="user-icon" className="w-6" />
            <input
              type="email"
              name="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-4 px-8 rounded-3xl bg-gradient-to-r  to-[#DF8908] from-[#B415FF] font-semibold cursor-pointer outline-none w-auto md:w-48 text-base md:text-xl"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="my-6 flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-0">
        <p className="text-sm text-center">
          © {year} Alex Bennett. All rights reserved.
        </p>
        <div className="flex justify-between md:gap-5 text-sm md:text-base text-center">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
