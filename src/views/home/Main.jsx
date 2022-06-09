import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import MobileNavigation from "../../components/common/MobileNavigation";
import { headerSocial, headerLinks, headerNFTs } from "../../helper/helpers";
import { Parallax } from "react-scroll-parallax";

function Main() {
  const [mnavigation, setmnavigation] = useState(false);
  const togglemnavigation = () => setmnavigation((v) => !v);

  return (
    <main
      className="w-full bg-no-repeat bg-cover bg-content"
      style={{ backgroundImage: "url('/images/Group 40.svg')" }}
    >
      <nav className="py-9 max-w-[1350px] mx-auto px-7 md:px-16 mb-8 sticky md:static top-0 z-50">
        <div className="md:grid grid-cols-3 items-center hidden">
          <div className="justify-self-start">
            <div className="flex gap-4">
              {headerSocial.map(({ icon, id }) => (
                <a href="#" target="_blank" rel="noopener noreferrer" key={id}>
                  <img width="32" height="32" src={`/images/${icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-6 justify-self-center">
            {headerLinks.map(({ id, name, url }) => (
              <Link
                to="/"
                key={id}
                className="font-bold uppercase hover:underline truncate"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="justify-self-end">
            <Button color="bg-secondary-900" text="Connect Wallet" url="#" />
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex justify-end fixed top-8 right-8">
            <div data-aos="fade-down" data-aos-offset="0">
              <Button className="px-5 py-3" onClick={togglemnavigation}>
                <img width="30" height="48" src="/images/Frame.svg" alt="" />
              </Button>
            </div>
          </div>
          <MobileNavigation openValue={mnavigation} close={togglemnavigation} />
        </div>
      </nav>
      <div className="overflow-hidden">
        <div className="px-10 text-center mb-24">
          <div data-aos="fade-right">
            <img
              className="w-full max-w-lg inline-block mb-4"
              src="/images/Group 54.png"
              alt=""
            />
          </div>
          <div data-aos="fade-left">
            <h1 className="md:font-black font-bold md:text-xl text-[20px] leading-6 md:leading-7 mb-11">
              Cumming to the Blockchain
            </h1>
          </div>
          <div data-aos="fade-right">
            <div className="inline-block">
              <Button color="bg-sky-700" text="Check Out" url="#" />
            </div>
          </div>
        </div>
        <div className="pb-20 md:pb-36 px-1 mx-auto flex flex-col gap-4 items-center">
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            className="hidden md:block"
          >
            <ScrollContainer className="whitespace-nowrap -rotate-2 md:-rotate-[1.5deg] overflow-scroll">
              {headerNFTs.map(({ id, icon }) => (
                <a
                  href="#"
                  key={id}
                  className="inline-block mr-4 md:mr-7 last:mr-0"
                >
                  <img
                    className="md:border-0 border-2 border-black-700 rounded-3xl w-[125px]  md:w-[152px]"
                    src={`/images/${icon}`}
                    alt=""
                  />
                </a>
              ))}
            </ScrollContainer>
          </div>
          <div data-aos="fade-right" data-aos-offset="0">
            <ScrollContainer className="whitespace-nowrap -rotate-2 md:-rotate-[1.5deg] overflow-scroll block md:hidden">
              <Parallax translateX={[0, -100]}>
                <div>
                  {headerNFTs.map(({ id, icon }) => (
                    <a
                      href="#"
                      key={id}
                      className="inline-block mr-4 md:mr-7 last:mr-0"
                    >
                      <img
                        className="md:border-0 border-2 border-black-700 rounded-3xl w-[125px]  md:w-[152px]"
                        src={`/images/${icon}`}
                        alt=""
                      />
                    </a>
                  ))}
                </div>
              </Parallax>
            </ScrollContainer>
          </div>
          <div data-aos="fade-left" data-aos-offset="0">
            <ScrollContainer className="whitespace-nowrap -rotate-2 md:-rotate-[1.5deg] overflow-scroll block md:hidden">
              <Parallax translateX={[-100, 0]}>
                <div>
                  {headerNFTs.map(({ id, icon }) => (
                    <a
                      href="#"
                      key={id}
                      className="inline-block mr-4 md:mr-7 last:mr-0"
                    >
                      <img
                        className="md:border-0 border-2 border-black-700 rounded-3xl w-[125px]  md:w-[152px]"
                        src={`/images/${icon}`}
                        alt=""
                      />
                    </a>
                  ))}
                </div>
              </Parallax>
            </ScrollContainer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
