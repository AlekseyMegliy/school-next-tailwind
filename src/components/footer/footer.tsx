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
        <p
          className="my-auto ml-10 box-content hidden md:ml-24 md:inline-block lg:ml-48"
          onClick={() => scrollToElement("main")}
        >
          <Logo className="w-44 " alt="Alex logo" />
        </p>

        <div className="text-2xl ml-10 mb-10">
          <h1 className="font-serif mb-5 font-montserrat text-large uppercase">
            Меню
          </h1>
          <p
            className="cursor-pointer py-3 transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("main")}
          >
            Головна
          </p>
          <p
            className="cursor-pointer py-3 transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("about")}
          >
            Про нас
          </p>
          <p
            className="cursor-pointer py-3 transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("teachers")}
          >
            Викладачі
          </p>
          <p
            className="cursor-pointer py-3 transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("services")}
          >
            Види послуг
          </p>
          <p
            className="cursor-pointer py-3 transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
            onClick={() => scrollToElement("feedback")}
          >
            Відгуки
          </p>
        </div>
        <div className="ml-10  mb-10 md:mr-24 lg:mr-48">
          <h1 className="font-serif w-48 font-montserrat text-large uppercase leading-tight">
            Напишіть нам!
          </h1>
          <a
            className="text-medium font-light hover:text-sky-300"
            href="https://t.me/alex_NMT_2023"
          >
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
