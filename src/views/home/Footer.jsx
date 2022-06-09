import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { footerSocial, headerLinks } from "../../helper/helpers";

function Footer() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-primary-700 py-8 md:py-28">
      <div className="grid md:grid-cols-3 max-w-[1350px] px-14 md:px-16 mx-auto items-center">
        <div className="justify-self-start hidden md:block">
          <div className="flex gap-4">
            {footerSocial.map(({ icon, id }) => (
              <a href="#" target="_blank" rel="noopener noreferrer" key={id}>
                <img width="32" height="32" src={`/images/${icon}`} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="justify-self-center md:mb-0 mb-10">
          <Link to="">
            <img width="333" src="/images/Group 26 (3).svg" alt="" />
          </Link>
        </div>
        <div className="block md:hidden">
          <ul className="list-none flex flex-col gap-12 mb-[50px]">
            {headerLinks.map(({ name, id, url }) => (
              <li key={id}>
                <Link
                  to={url}
                  className="font-bold text-black-0 text-3.1xl block text-center hover:underline"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:justify-self-end justify-self-center">
          <Button onClick={scrollTop}>
            <img width="39" height="38" src="/images/Frame 5 (1).svg" alt="" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
