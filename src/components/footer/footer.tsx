import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="text-main flex justify-center flex-col md:block bg-mainColor text-white py-20">
      <div className="flex flex-grow-0 justify-center md:justify-between flex-col md:flex-row">
        <a
          className="hidden md:inline-block ml-10 md:ml-24 lg:ml-48 box-content my-auto"
          href="#"
        >
          <Image className="w-44 " alt="Alex logo" priority src={logo} />
        </a>

        <div className="ml-10 text-2xl mb-10">
          <h1 className="uppercase font-serif text-large mb-5 font-montserrat">
            Меню
          </h1>
          <a
            className="hover:text-slate-500 transition duration-150 ease-out hover:ease-in"
            href="#"
          >
            <p className="py-3">Головна</p>
          </a>
          <a
            className="hover:text-slate-500 transition duration-150 ease-out hover:ease-in"
            href="#"
          >
            <p className="py-3">Про нас</p>
          </a>
          <a
            className="hover:text-slate-500 transition duration-150 ease-out hover:ease-in"
            href="#"
          >
            <p className="py-3">Викладачі</p>
          </a>
          <a
            className="hover:text-slate-500 transition duration-150 ease-out hover:ease-in"
            href="#"
          >
            <p className="py-3">Види послуг</p>
          </a>
          <a
            className="hover:text-slate-500 transition duration-150 ease-out hover:ease-in"
            href="#"
          >
            <p className="py-3">Відгуки</p>
          </a>
        </div>
        <div className="ml-10  md:mr-24 lg:mr-48 mb-10">
          <h1 className="uppercase font-serif w-48 text-large font-montserrat leading-tight">
            Напишіть нам!
          </h1>
          <a className="font-light hover:text-sky-300 text-medium" href="#">
            <p className="py-3 mt-5">Telegram</p>
          </a>
        </div>
      </div>
      <p className=" ml-10 md:ml-24 lg:ml-48 text-small font-montserrat">
        © Всі права захищені. Alex School.
      </p>
    </div>
  );
}
