import React from "react";
import Logo from "../../assets/logo.svg";
import { animateScroll as scroll, scroller } from "react-scroll";

export default function Footer() {
  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };
  return (
    <div className="flex flex-col justify-center bg-mainColor py-20 text-main text-white md:block">
      <div className="flex flex-grow-0 flex-col justify-center md:flex-row md:justify-between">
        <a
          className="my-auto ml-10 box-content hidden md:ml-24 md:inline-block lg:ml-48"
          href="#"
          onClick={() => scrollToElement("main")}
        >
          <Logo className="w-44 " alt="Alex logo" />
        </a>

        <div className="text-2xl ml-10 mb-10">
          <h1 className="font-serif mb-5 font-montserrat text-large uppercase">
            Меню
          </h1>
          <a
            className="cursor-pointer transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("main")}
          >
            <p className="py-3">Головна</p>
          </a>
          <a
            className="cursor-pointer transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("about")}
          >
            <p className="py-3">Про нас</p>
          </a>
          <a
            className="cursor-pointer transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("teachers")}
          >
            <p className="py-3">Викладачі</p>
          </a>
          <a
            className="cursor-pointer transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("services")}
          >
            <p className="py-3">Види послуг</p>
          </a>
          <a
            className="cursor-pointer transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("feedback")}
          >
            <p className="py-3">Відгуки</p>
          </a>
        </div>
        <div className="ml-10  mb-10 md:mr-24 lg:mr-48">
          <h1 className="font-serif w-48 font-montserrat text-large uppercase leading-tight">
            Напишіть нам!
          </h1>
          <a className="text-medium font-light hover:text-sky-300" href="#">
            <p className="mt-5 py-3">Telegram</p>
          </a>
        </div>
      </div>
      <p className=" ml-10 font-montserrat text-small md:ml-24 lg:ml-48">
        © Всі права захищені. Alex School.
      </p>
    </div>
  );
}
