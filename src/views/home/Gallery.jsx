import React from "react";
import Button from "../../components/common/Button";
import { Parallax } from "react-scroll-parallax";

// [0.5, 1, 'easeInQuad']
function Gallery() {
  return (
    <section className="min-h-[400px] bg-primary-700 bg-cover text-black-0 relative mb-20">
      <div className="absolute w-full h-full max-w-[1500px] mx-auto left-0 right-0 z-0">
        <div className="relative w-full h-full hidden md:block">
          <img
            className="absolute top-[20%] left-[3%]"
            src="/images/Union.svg"
            alt=""
          />

          <img
            className="absolute top-[15%] right-[6%]"
            src="/images/Union (1).svg"
            alt=""
          />
          <img
            className="absolute bottom-[12%] left-[9%]"
            src="/images/Union (2).svg"
            alt=""
          />
          <img
            className="absolute bottom-[12%] right-[3%]"
            src="/images/Union (3).svg"
            alt=""
          />
          <img
            className="absolute bottom-[22%] left-[3%] right-0 mx-auto"
            src="/images/Union (4).svg"
            alt=""
          />
        </div>
        <div className="relative w-full h-full md:hidden block">
          <img
            className="w-full h-full absolute"
            src="/images/Frame 11 (1).svg"
            alt=""
          />
          <img
            className="absolute -top-9 left-4"
            width="66"
            height="68"
            src="/images/Vector (2).svg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 px-10 py-20 md:my-10  max-w-6xl mx-auto items-center relative z-10 overflow-hidden">
        <div data-aos="fade-right" className="animate-desktop">
          <div className="flex flex-col gap-3 md:gap-6">
            <h2 className="font-black text-3.1xl  md:text-3xl">
              Lorem Ipsum dolor sit amet
            </h2>
            <p className="font-medium text-xs leading-6 md:text-md md:leading-[22px] mb-4 md:mb-0">
              Our universe will continue to expand as we get to the edge of our
              dongmap.
            </p>
            <div>
              <Button text="Mint a Dong" icon="Frame 5.svg" />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="animate-desktop w-full">
          <div className="md:py-28 mb-16 flex justify-end w-full">
            <img
              className="w-[465px] h-[460px] hidden md:inline-block"
              src="/images/Group 40 (1).svg"
              alt=""
            />
            <div className="grid grid-cols-2 gap-5 md:hidden w-full">
              {[
                "Rectangle 53.svg",
                "Rectangle 51.svg",
                "Rectangle 54.svg",
                "Rectangle 50.svg",
              ].map((_, i) => {
                let fade = {};
                if (i === 0) {
                  fade = { "data-aos": "fade-right" };
                } else if (i === 1) {
                  fade = { "data-aos": "fade-left" };
                } else if (i === 2) {
                  fade = {
                    "data-aos": "fade-right",
                    "data-aos-duration": 1250,
                  };
                } else if (i === 3) {
                  fade = {
                    "data-aos": "fade-left",
                    "data-aos-duration": 1250,
                  };
                }
                return (
                  <div {...fade} key={i}>
                    <img
                      className="w-full"
                      src={`/images/${_}`}
                      alt=""
                      key={i}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
