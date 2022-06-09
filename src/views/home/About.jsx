import React from "react";

function About() {
  return (
    <section className="mt-24 md:mt-40 mb-32 max-w-6xl mx-auto px-10 text-center">
      <div data-aos="fade-up">
        <h2 className="font-black text-3.1xl md:text-3xl text-primary-700 mb-6">
          In the before times, dongs were bare... then came Terra who doodled
          them all!
        </h2>
        <p className="font-medium text-black-200 hidden md:block">
          Doodle Dongs are a collection of 8888 NFTs or (non-fungible-tokens)
          created in numerous gorgeous finishes. From base skins to condoms, we
          promotes safe sex in all we do. Always make sure you connect your
          wallet to mint and do not sign any contract you did not initiate.
        </p>
      </div>
      <div className="flex md:hidden flex-col gap-6 text-black-700 text-xs text-opacity-90 font-medium">
        {[
          `Doodle Dongs are a collection of 8888 NFTs or (non-fungible-tokens)
        created in numerous gorgeous finishes.`,
          `From base skins to condoms, we promotes safe sex in all we do.`,
          `Always make sure you connect your wallet to mint and do not sign any
        contract you did not initiate.`,
        ].map((_, i) => (
          <p className="p-2" key={i} data-aos="fade-up">
            <img
              width="22"
              height="22"
              src="/images/👇.svg"
              alt=""
              className="block mb-2 mx-auto"
            />
            {_}
          </p>
        ))}
      </div>
    </section>
  );
}

export default About;
