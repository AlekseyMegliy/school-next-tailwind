import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { animateScroll as scroll, scroller } from "react-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };
  return (
    <div
      className={`flex h-48 flex-wrap justify-around overflow-hidden font-montserrat text-main  transition-[height] duration-200 ease-in-out md:justify-between`}
      style={open ? { height: "520px" } : undefined}
    >
      <a className="md:ml-24 lg:ml-48" href="#">
        <Logo className="" alt="Alex logo" />
      </a>
      <button
        className="mt-6 flex justify-end md:hidden"
        onClick={() => setOpen((open) => (open = !open))}
      >
        <svg className="inline-block h-10 w-16">
          <rect x="10" y="6" width="15" height="2" />
          <rect x="10" y="11" width="15" height="2" />
          <rect x="10" y="16" width="15" height="2" />
        </svg>
      </button>
      <div className="my-auto ml-10 w-full flex-grow flex-col justify-around md:mr-24 md:flex md:w-min md:flex-row lg:mr-48 ">
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
        <a className="text-medium font-medium hover:text-sky-500" href="#">
          <p className="py-3">Telegram</p>
        </a>
      </div>
    </div>
  );
}
