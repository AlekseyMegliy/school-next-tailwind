import React from "react";
import Logo from "../../../public/logo.svg";
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
          className="mx-auto mb-5 box-content aspect-square w-3/5 rounded-full object-cover sm:mb-8 md:mb-2 md:w-4/5"
          alt={name}
          src={img}
          width={280}
          height={280}
        />
      ) : (
        <div className="mx-auto box-content aspect-square w-3/5 rounded-full object-cover md:w-4/5">
          <Logo alt="Alex logo" className="mx-auto h-full" />
        </div>
      )}
      <h2 className="mx-auto mt-5 text-center text-main font-medium md:text-medium lg:mx-0 lg:text-ml ">
        {name}
      </h2>
      <h2 className="mx-auto mb-5 text-center text-small font-normal md:text-ms lg:mx-0 ">
        {prof}
      </h2>
      <h3 className="mx-auto w-full text-center text-small font-normal md:text-ms">
        {desc}
      </h3>
    </div>
  );
}
