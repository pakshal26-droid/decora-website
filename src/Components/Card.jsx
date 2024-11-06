import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-sm w-11/12 mx-auto border-2 border-gray-200 bg-white my-3  overflow-hidden ">
      <img
        className="w-full h-48 object-cover"
        src={props.imageSrc}
        alt={props.title}
      />
      <div className="p-5">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-4">
          {props.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h3>
        <p className="text-gray-700 text-base mb-4">{props.description}</p>
        <div className="flex items-center justify-between">
          <button className="text-sky-950 font-semibold text-sm">Open</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
