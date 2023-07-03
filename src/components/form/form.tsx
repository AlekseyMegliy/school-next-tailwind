import React from "react";
import { useState } from "react";
import { FormData } from "../../types";

type SomeComponentProps = {
  handleOffClick: () => void;
  notify: () => void;
};

export default function Form({ handleOffClick, notify }: SomeComponentProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data: FormData = {
      name,
      phone,
      service,
    };
    await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    notify();
    handleOffClick();
  };

  return (
    <div className="fixed left-1/2 z-50 my-16 w-4/5 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg bg-white px-3 text-center text-small opacity-100 transition-all duration-300 sm:my-5 sm:-translate-y-3/4 md:my-28 md:w-3/5 md:-translate-y-1/2 md:px-16 md:text-main lg:mx-0  lg:w-2/5 lg:text-ml">
      <div className="shadow-green absolute -top-36 -left-36 -z-10 h-20 w-32 rotate-45 transform bg-mainColor md:-top-28 md:-left-28" />
      <p className="my-6 text-main md:my-8">
        Ми пропонуємо пробне заняття - безкоштовно!{" "}
        <span className="hidden md:inline">
          Тому швидше залишай свої данні та ми напишемо тобі.
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-lg bg-white text-ms sm:text-main md:gap-7 "
      >
        <input
          className="mx-auto w-full rounded-md border-2 py-2 px-3 shadow-sm md:p-4"
          type="text"
          placeholder="Напишіть ваше ім'я"
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
        />
        <input
          className="mx-auto w-full rounded-md border-2 py-1 px-3 shadow-sm md:p-4"
          type="phone"
          placeholder="Номер телефону"
          onChange={(e) => setPhone(e.target.value)}
          required
          minLength={10}
          pattern="[0-9]*"
          title="Будь ласка введіть номер телефону числами щоб ми з Вами зв'язались"
        />
        <label className="mx-auto inline-block sm:hidden md:inline-block">
          Види послуг
          <input
            className="mx-auto mt-1 w-full rounded-md border-2 py-1 px-3 shadow-sm md:p-4"
            type="text"
            onChange={(e) => setService(e.target.value)}
            placeholder="Чого бажаєте?"
          />
        </label>
        <input
          type="submit"
          className="mx-auto w-full cursor-pointer rounded-lg bg-black p-2 font-thin text-white transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl md:p-6"
        />
      </form>
      <p
        className="mb-6 mt-2 cursor-pointer text-small text-gray-500 hover:text-black"
        onClick={handleOffClick}
      >
        Пристрасть привела тебе сюди!
      </p>
      <div className="bg-gold absolute -bottom-36 -right-36 -z-10 h-20 w-32 rotate-45 transform shadow-golden md:-bottom-28 md:-right-28" />
    </div>
  );
}
