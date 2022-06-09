import React from "react";
import SelectField from "../../components/common/SelectField";
import "aos/dist/aos.css";
import { timelines } from "../../helper/helpers";
import { Parallax } from "react-scroll-parallax";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useScrollIndicator } from 'react-use-scroll-indicator';

function Timeline() {

  const [state] = useScrollIndicator({ onElement: true, initialValue: 100});
  const [transition, setTransition] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 5)) {
        setTransition(true);
      } else {
        setTransition(false);
      }
    })
  }, []);

  return (
    <div ref={state.targetElement} className="relative overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <div className="relative w-full h-full">
          <img
            className="absolute w-full h-full hidden md:block"
            src="/images/Group 81.svg"
            alt=""
          />
          <img
            className="absolute w-full block md:hidden"
            src="/images/Group 81 (1).svg"
            alt=""
            style={{ height: "calc(100% + 175px)" }}
          />
        </div>
      </div>
      <section className="px-10 md:px-16 mb-[275px] max-w-[1600px] mx-auto relative z-10">
        <h2 className="font-black text-3.1xl md:text-4xl font-poppins text-primary-700 text-center mb-16">
          Dongmap
        </h2>
        <div className="relative timeline">
          <div className="absolute top-0 bottom-0 left-1/2 hidden md:block">
            <div
              className="bg-primary-700 w-0.5"
              style={{ opacity: "0.55", height: "calc(100% + 100px)" }}
            />
          </div>
          <div className="parallax-parent absolute top-60 right-0 md:right-auto md:left-1/2 -translate-x-3 md:-translate-x-1/2 z-50 hidden md:block">
            <Parallax
              style={{transition: 'transform 3s'}}
              className={
                state.value > 46
                ? `stop-bottom` 
                : state.value > 25 && transition === true 
                ? `stop-bottom`
                : state.value === 0 
                ? `stop-top` 
                : state.value < 46.33 && state.value > 35
                ? `stop-quater`
                : state.value < 35 && state.value > 25
                ? `stop-middle` : null
              }
              translateY={[-40, 160]}
            >
             
              <div className="doodle-wrapper">
                <img className="heart" src="/images/img-26-b.png" alt="Heart" />
                <div className=" -mt-16 w-[100px] md:w-[180px] img-26-wrap">
                  <span className="img-25"></span>
                  <span 
                    style={{
                      height: `${state.value === 0 ? 20 : transition ? 100 : (state.value + 45)}%`
                    }} className="img-26"></span>
                  <img className="img-26-a" src="/images/img-26-a.png" alt="Outline" />
                </div>
              </div>
            </Parallax>
          </div>
          {/* Timeline Cards */}
          {timelines.map(({ id, parcent, type, content }, i) => (
            <div
              key={id}
              className={`animate-mobile timeline-container ${  //${ i % 2 === 0 ? "left" : "right"}
                i % 2 === 0 ? "left" : "right"
              }`}
              data-aos="fade-left"
            >
              {/* <AnimationOnScroll animateIn="animate__shakeY"> */}
                <div className="relative" aria-label="Timeline card">
                  <div className="bg-secondary-700 rounded-2xl border-[3px] border-primary-700 text-primary-700 px-10 pt-11 pb-12 font-poppins relative z-10">
                    <h3 className="font-black text-4.1xl md:text-4xl  mb-4">
                      {parcent}&nbsp;
                      <span className="font-bold text-xs.2.0  md:text-xl uppercase">
                        {type}
                      </span>
                    </h3>
                    <p className="md:text-lg">{content}</p>
                  </div>
                  {i === 0 && (
                    <img
                      className="absolute -top-9 right-3 z-20 hidden md:block"
                      width="109"
                      height="113"
                      src="/images/Vector.svg"
                      alt=""
                    />
                  )}
                </div>
              {/* </AnimationOnScroll> */}
            </div>
          ))}
        </div>
      </section>
      <section className="relative max-w-4xl mx-auto mb-52 md:mb-32 md:px-0 px-10 md:pb-0 z-10">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-black text-3.1xl md:text-2xl text-primary-700 mb-7">
              Doodle Dongs are designed by Terra
            </h2>
            <p className="text-primary-700 max-w-3xl mx-auto md:text-lg">
              Made with love and support of our families, friends, and community
              to bring awareness to safe sex and Prostate Cancer
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-xl  mx-auto">
            <SelectField
              options={[
                {
                  name: "Lorem ipsum dolor sit amet?",
                  value: "",
                },
                {
                  name: "Lorem ipsum dolor sit amet?",
                  value: "",
                },
              ]}
            />
            <SelectField
              options={[
                {
                  name: "Lorem ipsum dolor sit amet?",
                  value: "",
                },
                {
                  name: "Lorem ipsum dolor sit amet?",
                  value: "",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
