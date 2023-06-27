import Head from "next/head";
import Teatcher from "../components/teachers/teacher";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon from "../components/icons/icon";
import Form from "../components/form/form";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import axios from "axios";
import classNames from "classnames";
import Dialogue from "../components/dialogue/dialogue";
import { Teacher, Service, Feedback, Data } from "../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export async function getStaticProps() {
//   const urlpost = "https://api.jsonbin.io/v3/b/6437fd07c0e7653a05a38087";
//   const url = "https://api.jsonbin.io/v3/b/642184e9ace6f33a22fe12a7";
//   const apiKey = "$2b$10$toqyJLX.dEJPK1M1JFUF9.ncmFKtgrrGSnbgtb82knpntYSpD2kcS";
//   const config = {
//     headers: {
//       "X-Master-Key": apiKey,
//     },
//   };
//   const response = await axios.get(url, config);
//   const data = response.data.record;
//   console.log(response.data.record);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Home({ data }: { data: Data | undefined }) {
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
  const schoolData = {
    teachers: [
      {
        name: "Дар'я",
        prof: "(Вчитель середньої школи)",
        desc: "Вчитель, про якого треба давати більший розголос, говорять, що діти не хочуть покидати заняття після його завершення, настільки це цікаво",
      },
      {
        name: "Ольга",
        prof: "(Вчитель середньої школи)",
        desc: "Таланту Олі позаздрить будь-який вчитель старшої категорії. Таке вміння працювати з молодшими дітьми набувається лише за багато років кропіткої праці",
      },
      {
        name: "Юлія",
        prof: "(Вчитель української мови)",
        desc: "Молода вчителька, яка чітко знає, чого хоче дитина та її батьки. Вона вміло підбере програму підготовки для дитини і навчить її розмовляти солов'їною",
      },
      {
        name: "Олександр",
        prof: "(Вчитель фізики, математики старшої школи)",
        desc: "За 4 роки на посту директора своєї школи, ця людина довела, що може підготувати дитину до НМТ на 12б. Лише позитивні відгуки та рекомендації від батьків.",
      },
      {
        img: "https://lh3.googleusercontent.com/pw/AMWts8B6-vlhWklCMrkOhqaRw_7hMJyhbrNyCTcH0yLL5nGWDWq8UznBzAg14ctwONFpCr1tQPz0ANsN6VIWCuzJ9di8aWSNvSJGci6aJHAVg8VCoETDxfV5sRopwdFeRJ_hmHyBasNAOtdbXB9oRCAqtGc=w640-h640-s-no?authuser=0",
        name: "Олексій",
        prof: "(Вчитель старшої школи)",
        desc: "Майбутні студентки просто шаленіють від цього вчителя, а студенти вважають його своїм другом та наставником. Вміло викладає математику і має безліч приємних відгуків",
      },
    ],
    sevice: [
      {
        header: "1-4 клас",
        secondHeader: "(молодша школа)",
        firstServ: "1 година - 160грн",
        secondServ: "Місяць (9 занять) - 1300грн",
        sale: "-10%",
      },
      {
        header: "5-9 клас",
        secondHeader: "(середня школа)",
        firstServ: "1 година - 190грн",
        secondServ: "Місяць (9 занять) - 1540грн",
        sale: "-10%",
      },
      {
        header: "10-11 клас",
        secondHeader: "(старша школа)",
        firstServ: "1 година - 220грн",
        secondServ: "Місяць (9 занять) - 1880грн",
        sale: "-5%",
      },
    ],
    feedback: [
      "Заняття було пречудовим. Викладач розповів все чітко і зрозуміло. Багато чого не знала, але завдяки вам я все зрозуміла і трошечки «шарю». На уроці було цікаво і навіть весело. Дякую вам!!",
      "/L Юля(учениця): Я здала       /L У мене все правильно       /L Я в шоці       /R Викладач: 200?       /L Юля(учениця): Так, дякую за підготовку!",
      "/L Олександр. Дякую Вам дуже. Вважаю, що Ваша праця і натхненність викладача потребує підживлення хоча б у грошовому вимірі. Дякую!       /R Викладач: Дякую, приємно це чути, працюємо далі",
      "/L Анжела(Учениця): Добрий день, чи можу я Ваш номер дати моїй знайомій для занять?      /R Препод: Добрий, так звісно",
      "Син просто у захваті! Вчитель легко виявляє прогалини у знаннях з алгебри та геометрії. Матеріал подає доступно, пояснює незрозумілі речі простими словами. Тільки найкращі слова подяки вчителю.Дякуємо! ",
      "/L Сашенька здравствуйте!      /L Маша (учениця) мне только что говорит: Мама мне так нравится с ним заниматся       /L Это говорит мне ребенок, котрый, в принципе, не любит заниматься ни по одному предмету😄😄       /L Спасибо большое!",
      "/L Доброго дня.       /L Я Ваш номер дала подрузі, без Вашого дозволу.       /L їй потрібен гарний репетитор для дівчинки 11 класу",
      "/L Учень: 25 з 30      /R  Вчитель: це скільки в балах?      /L учень: 175, ніколи б не подумав що можу на стільки скласти з 0, дуже дякую       /R Вчитель: молодець, працюй далі🦾",
    ],
  };

  const [sheet, setSheet] = useState<Data | undefined>(
    data ? data : schoolData
  );

  function handleOnClick() {
    setIsForm(true);
  }
  function handleOffClick() {
    setIsForm(false);
  }

  const introRightFeedbackVariants: Variants = {
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
  const introLeftFeedbackVariants: Variants = {
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
  const introTopSeviceVariants: Variants = {
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
  const introAboutVariants: Variants = {
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
    <>
      <Head>
        <title>Alex School</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className="overflow-hidden px-5 font-montserrat md:px-24 lg:px-48">
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
            variants={introLeftFeedbackVariants}
          >
            <h1 className="mx-auto w-3/4 text-large font-medium leading-tight lg:mx-0 lg:text-xl">
              Онлайн - школа{" "}
              <p className="inline text-mainColor">професійної підготовки</p> до
              НМТ
            </h1>
            <h2 className="my-16 mx-auto w-3/4 text-medium lg:mx-0 lg:w-2/5 lg:text-ml">
              Якісна підготовка - гарантує вступ до університету мрії
            </h2>
          </motion.header>
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
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introAboutVariants}
          >
            <button
              onClick={handleOnClick}
              className="mx-20 rounded-2xl bg-mainColor p-5 text-small font-medium text-white hover:bg-emerald-500 md:p-7 md:text-main lg:mx-0"
            >
              Безкоштовний урок
            </button>
          </motion.div>
        </div>
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
            variants={introAboutVariants}
          >
            Команда Alex- це <p className="inline text-mainColor">молоді</p> та
            перспективні вчителі. Люди, які самі не так давно були на місці
            учнів, зможуть зацікавити та на прикладах з життя вдало пояснити
            матеріал. Працюючи у цій сфері вже чотири роки, ми пишаємось
            результатами у вигляді задоволених процессом навчання учнів та
            задоволених результатами батьків.
          </motion.header>
        </div>
        <div
          id="teachers"
          className="mb-16 flex  flex-col items-center justify-center md:mb-52"
        >
          <div className="absolute  left-10 -z-10 h-[1px] w-1/2  -rotate-12 transform bg-golden opacity-30 shadow-golden" />
          <div className="absolute  left-40 -z-10 h-[1px] w-1/2  -rotate-12 transform bg-golden opacity-30 shadow-golden" />

          <h1 className="mb-10 inline-block text-large font-medium  md:mb-20 lg:text-xl ">
            Викладачі
          </h1>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={10}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {sheet !== undefined &&
              sheet.teachers.map((teatcher, index) => (
                <Teatcher key={index} {...teatcher} />
              ))}
          </Carousel>
        </div>
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
            занять дозволяє погоджувати час та частоту занять з вашим
            репетитором, щоб графік відповідав вашим потребам та можливостям.
          </h2>
          <div className="mx-auto mt-10 flex w-4/5 flex-wrap justify-around  text-small md:text-main">
            {sheet !== undefined &&
              sheet.sevice.map((service, index) => (
                <motion.div
                  key={index}
                  className={classNames(
                    "w-full",
                    "my-4",
                    "md:w-2/5",
                    "sm:m-2",
                    "p-6",
                    {
                      "shadow-[-4px_4px_10px_2px_rgba(0,0,0,0.25)]":
                        index === 0,
                    },
                    {
                      "shadow-[4px_4px_10px_2px_rgba(0,0,0,0.25)]": index === 1,
                    },
                    {
                      "shadow-[0px_10px_10px_-2px_rgba(0,0,0,0.25)]":
                        index === 2,
                    }
                  )}
                  initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={
                    index === 0
                      ? introLeftFeedbackVariants
                      : index === 1
                      ? introRightFeedbackVariants
                      : index === 2
                      ? introTopSeviceVariants
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
            лише <p className="inline text-mainColor">найнеобхідніша</p>{" "}
            інформація по заданому предмету.
          </h2>
        </div>
        <div id="feedback" className="mx-2 mb-40 flex flex-wrap justify-center">
          <div className="absolute  left-10 -z-10 h-[1px] w-1/6 -rotate-12 transform bg-golden opacity-30 shadow-golden" />
          <div className="absolute  left-40 -z-10 h-[1px] w-1/6 -rotate-12 transform bg-golden opacity-30 shadow-golden" />

          <div className="absolute  right-40 -z-10 h-[1px] w-1/12 origin-top-left rotate-45 transform bg-golden opacity-30 shadow-golden" />
          <h1 className="mb-3 inline-block w-full text-center text-large font-medium text-mainColor lg:text-xl">
            Відгуки
          </h1>
          <div className="w-4/5 gap-4 md:columns-2">
            {sheet !== undefined &&
              sheet.feedback.map((item, index) => (
                <motion.div
                  key={index}
                  className="mt-0 mr-4 mb-4 ml-0 box-border inline-block w-full rounded-lg bg-mainColor p-3 text-white"
                  initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={
                    index % 2 === 0
                      ? introRightFeedbackVariants
                      : introLeftFeedbackVariants
                  }
                >
                  <div>
                    {item.includes("/") ? <Dialogue props={item} /> : item}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
        <div className="shadow-green absolute right-0 -z-10 h-[1px]  w-1/3 rotate-12 transform bg-mainColor opacity-60" />
        <div className="shadow-green absolute right-3 -z-10 h-[1px]  w-1/3 rotate-12 transform bg-mainColor opacity-60" />
      </main>
    </>
  );
}
