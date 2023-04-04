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
    <div className="w-5/6 mx-auto flex flex-col justify-center">
      {img !== undefined ? (
        <Image
          className="rounded-full w-4/5 mx-auto mb-16 aspect-square box-content object-cover"
          alt={name}
          src={img}
          priority
          width={280}
          height={280}
        />
      ) : (
        <Logo
          className="rounded-full w-4/5 mx-auto mb-16 aspect-square box-content object-cover"
          alt="Alex logo"
          width="280"
          height="270"
        />
      )}
      <h2 className="text-medium text-center font-medium mt-5 mx-auto lg:mx-0 lg:text-ml ">
        {name}
      </h2>
      <h2 className="text-main text-center font-normal mb-5 mx-auto lg:mx-0 ">
        {prof}
      </h2>
      <h3 className="text-main font-normal mx-auto w-3/4 text-center">
        {desc}
      </h3>
    </div>
  );
}
