import React from "react";
import { motion, Variants } from "framer-motion";
import Dialogue from "../dialogue/dialogue";
import { Feedback } from "../../types";

type FeedbackType = {
  feedbacks: Feedback | undefined;
};

export default function FeedbackComponent({ feedbacks }: FeedbackType) {
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
  return (
    <div id="feedback" className="mx-2 mb-40 flex flex-wrap justify-center">
      {/*///////////////// Decoration /////////////////*/}
      <>
        <div className="absolute left-10 -z-10 h-[1px] w-1/6 -rotate-12 transform bg-golden opacity-30 shadow-golden" />
        <div className="absolute left-40 -z-10 h-[1px] w-1/6 -rotate-12 transform bg-golden opacity-30 shadow-golden" />

        <div className="absolute right-40 -z-10 h-[1px] w-1/12 origin-top-left rotate-45 transform bg-golden opacity-30 shadow-golden" />
      </>
      {/*///////////////// Decoration /////////////////*/}
      <h1 className="mb-3 inline-block w-full text-center text-large font-medium text-mainColor lg:text-xl">
        Відгуки
      </h1>
      <div className="w-4/5 gap-4 md:columns-2">
        {feedbacks !== undefined &&
          feedbacks.map((item, index) => (
            <motion.div
              key={index}
              className="mt-0 mr-4 mb-4 ml-0 box-border inline-block w-full rounded-lg bg-mainColor p-3 text-white"
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={
                index % 2 === 0
                  ? introRightSlideVariants
                  : introLeftSlideVariants
              }
            >
              <div>{item.includes("/") ? <Dialogue props={item} /> : item}</div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
