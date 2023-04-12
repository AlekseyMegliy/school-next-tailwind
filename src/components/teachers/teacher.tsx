import React from "react";
import Logo from "../../assets/logo.svg";
import Image from "next/image";

export type Teacher = {
  img?: string;
  name: string;
  prof?: string;
  desc: string;
};
export default function Teatcher({ img, name, prof, desc }: Teacher) {
  return (
    <div className="mx-auto flex w-5/6 flex-col justify-center">
      {img !== undefined ? (
        <Image
          className="mx-auto mb-5 box-content aspect-square w-3/5 rounded-full object-cover md:mb-16 md:w-4/5"
          alt={name}
          src={img}
          priority
          width={280}
          height={280}
        />
      ) : (
        <Logo
          className="mx-auto mb-16 box-content aspect-square w-4/5 rounded-full object-cover"
          alt="Alex logo"
          width="280"
          height="270"
        />
      )}
      <h2 className="mx-auto mt-5 text-center text-main font-medium md:text-medium lg:mx-0 lg:text-ml ">
        {name}
      </h2>
      <h2 className="mx-auto mb-5 text-center text-small font-normal md:text-ms lg:mx-0 ">
        {prof}
      </h2>
      <h3 className="mx-auto w-3/4 text-center text-small font-normal md:text-ms">
        {desc}
      </h3>
    </div>
  );
}
