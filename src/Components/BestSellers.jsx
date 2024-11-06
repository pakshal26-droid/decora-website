import React from "react";

import Card from "./Card";
import { div } from "framer-motion/client";

function BestSellers() {
  const bestsellerData = [
    {
      imageSrc: "../src/assets/resin1.JPG",
      title: "Resin Wall",
      category: "Resin",
      description: "This is Resin Wall",
    },
    {
      imageSrc: "../src/assets/resin1.JPG",
      title: "Bonsai Art",
      category: "Texture",
      description: "This is Bonsai Art",
    },
    {
      imageSrc: "../src/assets/resin1.JPG",
      title: "Bespoke Mirrors",
      category: "Resin",
      description: "This is Bespoke Mirror",
    },
  ];

  return (
    <div className="px-3  mt-0 mb-2">
      <h1 className="text-4xl text-center md:text-left font-semibold text-sky-950 mt-8 tracking-tight">
        Bestsellers˚
      </h1>
      {/* <p className='text-left mt-5 italic tracking-tight font-medium'>These are some of our bestselling and highest rating articles, highest grossing</p> */}
      <div className="flex flex-row flex-wrap justify-center mt-3 mb-3 items-center">
        {bestsellerData.map((bData) => {
          return (
            <Card
              imageSrc={bData.imageSrc}
              title={bData.title}
              category={bData.category}
              description={bData.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestSellers;
