import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3">WE ARE HERE FOR YOU</p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You To Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            suscipit! Quos, perferendis dolorum impedit magnam libero temporibus
            at ea natus ab corporis praesentium earum est laudantium! Sed natus
            alias dicta!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium, ratione dolores,
          </p>
        </div>
      </div>
      <div className="flexCenter max-container lg:padding-container relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1350}
          height={580}
          className="w-full object-cover object-center lg:rounded-5xl 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md lg:left-[10%] md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="
          h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruant
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
