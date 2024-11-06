import { Instagram, Phone } from "lucide-react";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    // services: {
    //   websiteDesign: false,
    //   uxDesign: false,
    //   userResearch: false,
    //   content: false,
    //   strategy: false,
    //   other: false,
    // },
  });
  const phoneNumber1 = "+919833513554";
  const phoneNumber2 = "+918452850788";
  const message = `Hey ${formData.name} here interested in your services and want to  ${formData.project}  , can we arrange a call? and email me your brochure at ${formData.email} `;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      //   services: {
      //     ...prev.services,

      //     [name]: checked,
      //   },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    const whatsappUrl = `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-md mt-10 mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl text-sky-950 font-bold mb-4">
        Got ideas? We've got the skills. Let's team up.
      </h2>
      <p className="mb-6 text-lg font-light">
        Tell us more about yourself and what you've got in mind.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-sky-950 outline-none"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="you@gmail.com"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-sky-950 outline-none"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <textarea
            name="project"
            placeholder="Tell us what you have in mind..."
            rows="3"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-sky-950 outline-none resize-none"
            value={formData.project}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* <div className="mb-6">
          <p className="mb-2 font-semibold">How can we help?</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(formData.services).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-sm">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </label>
            ))}
          </div>
        </div> */}

        <button
          type="submit"
          className="w-full rounded-md font-semibold bg-sky-950 text-white z-[1] hover:bg-sky-800 transition-all duration-400 ease-in-out  border-black h-12"
        >
          Submit
        </button>
      </form>
      <div className="mt-10 ">
        <div className="icons-div flex flex-col items-start font-medium gap-y-2">
          <div className="icon flex items-center flex-row gap-x-3">
            <Instagram className="h-5" />
            <p>decora.studio_</p>
          </div>
          <div className="icon flex items-center flex-row gap-x-3">
            <Phone className="h-5" />
            <p>
              {phoneNumber1} | {phoneNumber2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
