import React, { useEffect, useRef } from "react";

const HorizontalScrollText = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const animate = (ref, duration, direction) => {
      if (ref.current) {
        const animation = ref.current.animate(
          [
            {
              transform: `translateX(${direction === "left" ? "0" : "-100%"})`,
            },
            {
              transform: `translateX(${direction === "left" ? "-100%" : "0"})`,
            },
          ],
          {
            duration: duration,
            iterations: Infinity,
            easing: "linear",
          }
        );
        return animation;
      }
    };

    const animation1 = animate(line1Ref, 30000, "left");
    const animation2 = animate(line2Ref, 25000, "right");
    const animation3 = animate(line3Ref, 25000, "left");

    return () => {
      animation1?.cancel();
      animation2?.cancel();
      animation3?.cancel();
    };
  }, []);

  const lineStyle = "text-6xl font-bold whitespace-nowrap inline-block";

  return (
    <div className="bg-sky-950  text-white py-8">
      <div className="overflow-hidden mb-4">
        <div ref={line1Ref} className={lineStyle}>
          <span className=" tracking-tight inline-block">
            BESPOKE HOME DECOR * BESPOKE HOME DECOR * BESPOKE HOME DECOR *
            BESPOKE HOME DECOR
          </span>
        </div>
      </div>
      <div className="overflow-hidden mb-4">
        <div ref={line2Ref} className={lineStyle}>
          <span className="tracking-tight inline-block">
            THIS IS HOW WE ROLL * THIS IS HOW WE ROLL * THIS IS HOW WE ROLL *
            THIS IS HOW WE ROLL
          </span>
        </div>
      </div>
      <div className="overflow-hidden">
        <div ref={line3Ref} className={lineStyle}>
          <span className="tracking-tight inline-block">
            SHARP WORK FOR YOUR HOMES * SHARP WORK FOR YOUR HOMES * SHARP WORK
            FOR YOUR HOMES * SHARP WORK FOR YOUR HOMES{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollText;
