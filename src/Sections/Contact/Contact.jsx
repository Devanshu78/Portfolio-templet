import React, { useState } from "react";
import theam_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import toast from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const key = import.meta.env.VITE_EMAIL_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending...");
    const formData = new FormData(e.target);

    formData.append("access_key", key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.dismiss(toastId);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Email sent successfully");
    } else {
      console.log("Error", data);
      toast.error("Something went wrong");
    }
  };

  return (
    <div id="contact">
      <div className="flex flex-col px-5 md:items-center relative mt-26">
        <h1 className="text-5xl md:text-6xl font-semibold text-center absolute top-0 ">
          Get in touch
        </h1>
        <img
          className="w-32 md:w-40 h-auto ml-40 md:-mr-16 mt-5 md:mt-6"
          src={theam_pattern}
          alt=""
        />
      </div>

      <div className="md:flex justify-center max-w-11/12 mx-auto mt-10 md:mt-20">
        <div className="py-10 px-5 w-full md:w-5/12 ">
          <h1 className="text-5xl w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r to-[#DF8908] from-[#B415FF]">
            Let's talk
          </h1>
          <p className="w-11/12 mt-4 text-lg">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="space-y-5 mt-4">
            <div className="flex items-center gap-5">
              <img className="w-6" src={mail_icon} alt="" />
              <p>example@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-6" src={call_icon} alt="" />
              <p>+91 123 456789</p>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-6" src={location_icon} alt="" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-5 px-5 md:px-0"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="Name">Your Name</label>
            <input
              type="text"
              name="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your Name"
              className="bg-gray-900 w-full md:w-3/4 px-4 py-2 rounded-lg outline-none text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Your Email</label>
            <input
              type="email"
              name="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your Email"
              className="bg-gray-900 w-full md:w-3/4 px-4 py-2 rounded-lg outline-none text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Message">Write your message here</label>
            <textarea
              name="Message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              placeholder="Enter your message"
              className="bg-gray-900 w-full md:w-3/4 px-4 py-2 rounded-lg outline-none text-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-4 px-8 rounded-3xl bg-gradient-to-r  to-[#DF8908] from-[#B415FF] font-semibold cursor-pointer outline-none w-48 text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
