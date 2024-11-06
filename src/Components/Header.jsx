import React from "react";

function Header() {
  const phoneNumber = "+919833513554";
  const message =
    "Hey , I am interested in your art and decor , can we arrange a call?";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex mx-auto h-96 items-center flex-col  justify-center">
      <h1 className="text-8xl  font-sans font-semibold tracking-tighter z-[1]  text-black ">
        Decorå
      </h1>
      <div className=" saturate-80 mr-24 bg-cover mb-10 drop-shadow-lg ml-20 z-[0] bg-no-repeat size-full md:size-11/12 md:bg-auto md:ml-96  absolute"></div>
      <button
        onClick={handleClick}
        className="mt-8 rounded-md font-semibold bg-sky-950 text-white z-[1] hover:bg-sky-800 transition-all duration-400 ease-in-out  border-black w-36 h-12"
      >
        Get In Touch
      </button>
    </div>
  );
}

export default Header;
// bg-[url('/Users/Pakshal/decora-website/src/assets/6-removebg-preview.png')]
