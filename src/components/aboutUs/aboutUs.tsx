import React from "react";
import { motion, Variants } from "framer-motion";

export default function AboutUs() {
  const introColorationVariants: Variants = {
    hide: {
      opacity: 0,
      y: 0,
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
      id="about"
      className="mx-2 mb-16 flex  flex-wrap justify-center md:mb-52"
    >
      <h1 className="inline-block w-full text-center text-large font-medium leading-tight lg:text-xl">
        Про нас
      </h1>
      <motion.header
        className="my-5 mx-auto w-full text-center text-ms sm:text-main md:my-16 md:w-4/5 md:text-medium lg:mx-0 lg:text-ml "
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introColorationVariants}
      >
        Команда Alex- це <p className="inline text-mainColor">молоді</p> та
        перспективні вчителі. Люди, які самі не так давно були на місці учнів,
        зможуть зацікавити та на прикладах з життя вдало пояснити матеріал.
        Працюючи у цій сфері вже чотири роки, ми пишаємось результатами у
        вигляді задоволених процессом навчання учнів та задоволених результатами
        батьків.
      </motion.header>
    </div>
  );
}
