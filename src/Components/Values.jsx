import React from "react";
import { useState } from "react";

function Values() {
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    setIsActive((prev) => !prev);
  };

  const textColor = isActive ? "text-sky-950" : "text-gray-500";
  const glowColor = isActive ? "glow-yellow" : "glow-green";
  const textGlowColor = isActive ? "glow-text-yellow" : "glow-text-green";
  const values = [
    {
      title: "Finishing",
      value: "We value finishing",
    },
    {
      title: "Order Time",
      value: "We value finishing",
    },
    {
      title: "Customistion",
      value: "We value finishing",
    },
    {
      title: "Bespoke",
      value: "We value finishing",
    },
    {
      title: "Finishing",
      value: "We value finishing",
    },
  ];
  return (
    <div className="bg-white h-full text-sky-950 pb-10">
      <div>
        <h1 className="text-4xl px-6 md:text-left font-semibold text-sky-950 pt-8 tracking-tight">
          Our Values˚
        </h1>
        <p className="font-light text-lg px-6 mt-5">
          We are driven by principles that define who we are and how we work.
        </p>
      </div>
      <div className="flex justify-center mt-10 flex-wrap flex-row gap-2 ">
        {values.map((val) => {
          return (
            <div className=" p-6 font-sans">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-4 h-4 bg-none hover:bg-sky-950 rounded-full ${textColor} border-2 ${glowColor} cursor-pointer border-sky-950 transition-all `}
                  onMouseEnter={() => setIsActive(true)}
                  onMouseLeave={() => setIsActive(false)}
                  onClick={handleInteraction}
                ></div>
                <div className="flex-grow">
                  <h2
                    className={`${textColor} text-2xl font-bold mb-2 ${textGlowColor} transition-all `}
                  >
                    {val.title}
                  </h2>
                  <div className="h-0.5 bg-gradient-to-r from-sky-950 via-sky-600 to-sky-500"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Values;
