import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
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
      className={`flex h-48 flex-wrap justify-around overflow-hidden text-main  transition-[height] duration-200 ease-in-out md:justify-between`}
      style={open ? { height: "520px" } : undefined}
    >
      <p className="md:ml-24 lg:ml-48">
        <Logo className="" alt="Alex logo" />
      </p>
      <button
        className="mt-6 flex justify-end md:hidden"
        onClick={() => setOpen((open) => (open = !open))}
        aria-label="Menu"
      >
        <svg className="inline-block h-10 w-16">
          <rect x="10" y="6" width="15" height="2" />
          <rect x="10" y="11" width="15" height="2" />
          <rect x="10" y="16" width="15" height="2" />
        </svg>
      </button>
      <div className="my-auto ml-10 w-full flex-grow flex-col justify-around md:mr-24 md:flex md:w-min md:flex-row lg:mr-48 ">
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
        <Link
          href="/materials"
          className="py-3 transition duration-150 ease-out hover:text-slate-500 hover:ease-in"
        >
          Матеріали
        </Link>
        <a
          className="text-medium font-medium hover:text-sky-500"
          href="https://t.me/alex_NMT_2023"
        >
          <p className="py-3">Telegram</p>
        </a>
      </div>
    </div>
  );
}
