import React from "react";
import Image from "next/image";
import errorImg from "../../public/error_img.png";

export default function Custom404() {
  return (
    <div className="my-8 flex justify-center">
      <div className="flex w-1/3 flex-col justify-center">
        <p className="text-ml font-medium">
          Йой! Сталась халепа! <br />
          Напишіть нам і ми швидко виправимо проблему
          <br />
          Наш{" "}
          <a
            className="text-medium font-light hover:text-sky-300"
            href="https://t.me/alex_NMT_2023"
          >
            Telegram
          </a>{" "}
          для зв'язку
        </p>
      </div>
      <Image src={errorImg} alt={"Error Image"} className={"w-1/3"} />
    </div>
  );
}
