import React from "react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "../form/form";

export default function Hero() {
  const [isForm, setIsForm] = useState(true);
  const notify = () =>
    toast.success("Дякуємо! Ми скоро напишемо :)", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  function handleOnClick() {
    setIsForm(true);
  }
  function handleOffClick() {
    setIsForm(false);
  }

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
    <div id="main" className="mt-16 mb-16 md:mb-72">
      {isForm && (
        <>
          <div
            onClick={handleOffClick}
            className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-70 transition-opacity duration-300"
          ></div>
          <Form handleOffClick={handleOffClick} notify={notify} />
        </>
      )}
      <ToastContainer
        className="text-ms"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <motion.header
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introLeftSlideVariants}
      >
        <h1 className="mx-auto w-3/4 text-large font-medium leading-tight lg:mx-0 lg:text-xl">
          Онлайн - школа{" "}
          <p className="inline text-mainColor">професійної підготовки</p> до НМТ
        </h1>
        <h2 className="my-16 mx-auto w-3/4 text-medium lg:mx-0 lg:w-2/5 lg:text-ml">
          Якісна підготовка - гарантує вступ до університету мрії
        </h2>
      </motion.header>
      {/*///////////////// Decoration /////////////////*/}
      <>
        <div className="absolute top-10 right-10 -z-10 h-[1px] w-1/12 -rotate-12 transform bg-golden opacity-30 shadow-golden" />
        <div className="absolute bottom-32 -left-14 -z-10 h-1 w-1  transform bg-golden opacity-90 shadow-golden" />
        <div className="absolute bottom-32 left-40 -z-10 h-1 w-1  transform bg-golden opacity-70 shadow-golden" />
        <div className="absolute bottom-60 left-28 -z-10 h-1 w-1  transform bg-golden opacity-60 shadow-golden" />
        <div className="shadow-green absolute -bottom-8 left-8 -z-20 h-10 w-16 transform bg-mainColor opacity-70" />
        <div className="shadow-green absolute -bottom-16 left-4 -z-20 h-10 w-16 transform bg-mainColor opacity-70" />

        <div className="absolute -bottom-8 right-10 -z-10 h-1 w-1  transform bg-golden opacity-40 shadow-golden" />
        <div className="absolute -bottom-8 right-48 -z-10 h-1 w-1  transform bg-golden opacity-40 shadow-golden" />
        <div className="absolute bottom-4 right-28 -z-10 h-1 w-1  transform bg-golden opacity-40 shadow-golden" />
        <div className="shadow-green absolute -bottom-40 right-8 -z-20 h-10 w-16 transform bg-mainColor opacity-50" />
        <div className="shadow-green absolute -bottom-64 right-4 -z-20 h-10 w-16 transform bg-mainColor opacity-50" />
      </>
      {/*///////////////// Decoration /////////////////*/}

      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introColorationVariants}
      >
        <button
          onClick={handleOnClick}
          className="mx-20 rounded-2xl bg-mainColor p-5 text-small font-medium text-white hover:bg-emerald-500 md:p-7 md:text-main lg:mx-0"
        >
          Безкоштовний урок
        </button>
      </motion.div>
    </div>
  );
}
