import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

export type Teatcher = {
  img?: string;
  name: string;
  desc: string;
};
export default function Teatcher({ img, name, desc }: Teatcher) {
  return (
    <div className="w-4/5 mx-auto flex flex-col justify-center">
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
        <Image
          className="rounded-full w-4/5 mx-auto mb-16 aspect-square box-content object-cover"
          alt="Alex logo"
          src={logo}
          priority
          width={280}
          height={280}
        />
      )}
      <h2 className="text-medium text-center font-medium my-5 mx-auto lg:mx-0 lg:text-ml ">
        {name}
      </h2>
      <h3 className="text-medium font-normal mx-auto w-3/4 text-center">
        {desc}
      </h3>
    </div>
  );
}
