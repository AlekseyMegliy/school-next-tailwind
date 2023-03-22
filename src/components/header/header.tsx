import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`text-main flex justify-around md:justify-between flex-wrap overflow-hidden font-montserrat  h-48 transition-[height] duration-200 ease-in-out`}
      style={open ? { height: "520px" } : undefined}
    >
      <a className="md:ml-24 lg:ml-48" href="#">
        <Image className="" alt="Alex logo" src={logo} priority />
      </a>
      <button
        className="md:hidden flex justify-end mt-6"
        onClick={() => setOpen((open) => (open = !open))}
      >
        <svg className="inline-block w-16 h-10">
          <rect x="10" y="6" width="15" height="2" />
          <rect x="10" y="11" width="15" height="2" />
          <rect x="10" y="16" width="15" height="2" />
        </svg>
      </button>
      <div className="md:flex justify-around flex-grow flex-col md:flex-row w-full md:w-min ml-10 my-auto md:mr-24 lg:mr-48 ">
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
        <a className="font-medium hover:text-sky-500 text-medium" href="#">
          <p className="py-3">Telegram</p>
        </a>
      </div>
    </div>
  );
}
