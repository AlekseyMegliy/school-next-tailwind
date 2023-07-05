import React from "react";
import { motion, Variants } from "framer-motion";
import classNames from "classnames";
import Icon from "../icons/icon";
import { Service } from "../../types";

type ServiceType = {
  services: Service[] | undefined;
};

export default function Services({ services }: ServiceType) {
  const introRightSlideVariants: Variants = {
    hide: {
      opacity: 0,
      x: 300,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const introLeftSlideVariants: Variants = {
    hide: {
      opacity: 0.5,
      x: -300,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const introTopSlideVariants: Variants = {
    hide: {
      opacity: 0.5,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div
      id="services"
      className="relative mx-2 mb-16 flex flex-col justify-center md:mb-52"
    >
      <h1 className="mx-auto  inline-block  text-large font-medium  leading-tight lg:text-xl">
        Види послуг
      </h1>
      <div className="shadow-green absolute top-0 left-1/2 -z-10 h-[1px]  w-1/5 -rotate-[55deg] transform bg-mainColor opacity-40" />
      <div className="shadow-green absolute top-0 left-1/2 -z-10 h-[1px]  w-1/5 -rotate-45 transform bg-mainColor opacity-60" />
      <h2 className="my-10 mx-auto w-full text-center text-ms sm:text-medium md:mt-28 md:w-4/5 lg:text-ml ">
        Заняття проводяться виключно на{" "}
        <p className="inline text-mainColor">індивідуальній</p> основі, що
        забезпечує максимально ефективний підхід до навчання. Гнучкий графік
        занять дозволяє погоджувати час та частоту занять з вашим репетитором,
        щоб графік відповідав вашим потребам та можливостям.
      </h2>
      <div className="mx-auto mt-10 flex w-4/5 flex-wrap justify-around  text-small md:text-main">
        {services !== undefined &&
          services.map((service, index) => (
            <motion.div
              key={index}
              className={classNames(
                "w-full",
                "my-4",
                "md:w-2/5",
                "sm:m-2",
                "p-6",
                {
                  "shadow-[-4px_4px_10px_2px_rgba(0,0,0,0.25)]": index === 0,
                },
                {
                  "shadow-[4px_4px_10px_2px_rgba(0,0,0,0.25)]": index === 1,
                },
                {
                  "shadow-[0px_10px_10px_-2px_rgba(0,0,0,0.25)]": index === 2,
                }
              )}
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={
                index === 0
                  ? introLeftSlideVariants
                  : index === 1
                  ? introRightSlideVariants
                  : index === 2
                  ? introTopSlideVariants
                  : undefined
              }
            >
              <p>
                {service.header} <br />
                {service.secondHeader}
              </p>
              <ul className=" my-11 list-disc pl-6 font-medium marker:text-mainColor">
                <li className="my-5">{service.firstServ}</li>
                <li className="my-5">
                  {service.secondServ}{" "}
                  <Icon
                    icon="shopping-sale"
                    size={20}
                    color={"rgb(61 169 171 )"}
                  />{" "}
                  <p className="inline text-mainColor">{service.sale}</p>
                </li>
              </ul>
            </motion.div>
          ))}
      </div>
      <h2 className="my-10 mx-auto w-full text-justify text-ms md:mt-28 md:w-4/5 md:text-medium  lg:text-ml ">
        Бонусом, надаємо доступ до телеграм каналу з учнями, де публікується
        лише <p className="inline text-mainColor">найнеобхідніша</p> інформація
        по заданому предмету.
      </h2>
    </div>
  );
}
