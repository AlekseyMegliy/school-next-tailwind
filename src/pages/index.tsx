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

type Teacher = {
  img?: string;
  name: string;
  prof?: string;
  desc: string;
};

type Service = {
  header: string;
  secondHeader: string;
  firstServ: string;
  secondServ: string;
  sale: string;
};

type Feedback = string[];

type Data = {
  teachers: Teacher[];
  sevice: Service[];
  feedback: Feedback;
};

export default function Home() {
  const [isForm, setIsForm] = useState(false);
  const schoolData = {
    teachers: [
      {
        // img: "https://lh3.googleusercontent.com/PIEqH2lREpJFPVm5qIoWM_rUh9D4YT1Pwakp3f89cKUh7bgmviABd2Or2MibWGGKTxVuJvST9k1pcVQIeEme5CcE2UZBJVZ4KSxZZx3QHSt4j7-Ufm3L4jnEwBxr5KBASYzWpneIf7yC2CsyLJ3C33yM2uJFCKnCYmdQQMexhb7lY3T1aV6FPCjdroB4_IrD4VJ7XTXVvpyVNpgJ8NOt9xTbhBoWRm8iDF3jircPiBMsjOsgNYlc6mRrW4Ao8v0JAARsF1YZoED-ZuihQ5AjxVM8Cl9geLMYt1GMJlA1gE1V0143VyOITP9YaZnzlnSKd50s0WgRmUP2b-hAmV-Anq3tHG-X0px4gVmBkFTu1aQwKk3_X8ZqmLiHW3gl4-M_-Ab_REjrfoCuoZ7_EncsbT5hJZ7au2TYAk5O54u_Ai9Et62PhfKAbJdInMA3p-8WEDOg9N2htbLh41C0Pkglj9YdasUncUZYabzk6SZVRQPbu4bCGiArXlMtfoMpXdWI_VfHXh4uqmyXcid7U5kWQAfiCfUAGrGrhEw6ZlK3bLIJ3wBIrwkW3pTB27AE_09m3XOMMmdl7fuxwUPPjoyZ4iifb6BKjDFqXGuvnjzVze8X0QNI9A8Rwdi6FQgI6L-2lElkIHkU7Kf9P7Mq6GjlbxtQAXoIao2zgdnnLFuzssiDU2O9GkKBAOqNCF8mTk5lO5S9l1z5ZhwTWaZQ97RVSWQte9CNJLYNvhfXxA8FMRFAQrZZKc4bdfPtSLghaZH9atU4hdsmidGI83N5B4mALNYlQjJ8quH71QbbFtvxvsNAZO0Wyev3I49bnCnn6Au8GTZRsFZx8EjOBI_2_VRDzIwBh-fqZpjErw3MAucv87GnBGgWGivpaqbvi5N68478rHvAJCbo7c0wU5L0FJtxh415r1n41fHFNpfzCZNx2CA=s640-no?authuser=0",
        name: "Дар'я",
        prof: "(Вчитель середньої школи)",
        desc: "Вчитель, про якого треба давати більший розголос, говорять, що діти не хочуть покидати заняття після його завершення, настільки це цікаво",
      },
      {
        // img: "https://lh3.googleusercontent.com/_3XkFHEylUBipEpzP2JqPrxnokYnsNzjG2KQRITm-KFbliPRlhsRq1HzG5gq4BajRUk9SG2bUCcRcZ0gTnO2VeJL4l-_dVLCtbPTonvxlS5xynG6OKtM-gUvgswT4msSUyI5Zx4DegeCUU8H4obdsgntqLB78v4QjE_oFmOuwBl2PWC9s6rX7h44t2fzRZjDfCW2vDMPrXtS4Ly9jD-6JguYc1wKHFgh8FLVZpnfPcOII4OBWDGyqT7aEbkhSYXCPXrQNIvZ1PR16RmnbULrHlF7p-MPfb2-o8UDTUMj00l4ig1hHUls50JUBDzEFWi8SuHe9Bgzl3bDmVGFEDsZ71F3cqH3WK0148LPfqSANiNbcMb9G_wFotRpUz9k21ArhBuDqLjSFtewcpYTX8RE33GutNBxfyaZVm-_JZl5t-PdYUQWTPvFKJ8NPdnBuZCPmxiEvnBVcHO8xPfqxDf68DUWlwXeMb08-kl7_pA5fxGRnBpYZrP1dR39Cj8G1hH1M8bj7qcYuwuSEFvRnuYJsX7rlUMPV6WizrWrd8ks52SHBAzsFCcZhyYJXXdAh60nOp1WKjlCcOrfvDz6ZJdNadNPQRdMzaBEolMrAY5wRdzlC6vwJyNF2lA00oCOR4tjosbtbL-1JRF5yFJM6qixe1rguPa4_46U5CJyld4hFq4cbb8kiIk6kzytYASXP4DgQa5JI3cCfkoaCLZGCI-ptdNNmMX55s90AZ1xe3pRSyXZdG4UqOuHQO-TJ542sfzlNFCk9KiIeQO5GUEpGCyOhCa2ZnesXY79ZLmewuunxyScP8eV15gBJNTqzdQnvp82yMgkTGuISS7ozu-aLEgn0WBx3g8HUfOzWi8YpzKZ8I1xh9mp7184YWFc3Zs4UORTBr3bdLVRLq6Ip7UnbZFXWvH9RDeq8ZL-I1n9kv74LBI=w481-h550-no?authuser=0",
        name: "Ольга",
        prof: "(Вчитель середньої школи)",
        desc: "Таланту Олі позаздрить будь-який вчитель старшої категорії. Таке вміння працювати з молодшими дітьми набувається лише за багато років кропіткої праці",
      },
      {
        // img: "https://lh3.googleusercontent.com/uXcEigvucipUEUWRPrwB_DCUPqF8-smtY9TjRwhncXYPfkvBOETFYHIbig67Qh0dqgWsQcyg1NuLOCd7ZX2taRMKzEzdRstYyVrQAe7A8EKr1zSHN2Ej-y9kXL8AojSWPl0s2V0J5_75WclJ2vJPDhDiMzZOPQOZyAYysG7t1rAxZkSqSYjBF5RTuQv8KYLfMzflS6ToEUT2ejBjHvG2_siUhNk5VJR7GSIUZJs30jTHuTbENLqBbxsnFwVuGmFN4SbTByAZRRYui-iMcCm5Phk7BeX8QCAGvoB8sjvL84NWiNtIom-ul5AZAdOyZ_cszbrVvKnGF00rpdTLv1CWIcKskaU-T4mqCqfid8L2o2tg0pYLHVHQjAvddt7MI9aZVmHejQd6uhTqv2M13zsQTffsrQy7LXkBlbF7fCy0dplJc-bTuSneKPdTfGGKCb2cM8E_46nKpiy6psxqAjyYTm3nylP6WuBvW_3S1mnIjIEDrhJ1iMJblpT1CrddCV_CKVMRESaMlBh--QUam9mwULb0PsYmZz3FkCWTHSV5VxUJR4YX_ei86Jbf2bcWbq--0yjAOh_mui9v6ofN7Ng0i3YDc9S3ScRtNffitHfT51n8F1nMptNKJCPlL_wOLOk3zgNC725QPLBTH5cYwUfR2uCJqMG8wgC0Ew4jYLYqcd1dHIIfR1-wKc9Ok0OFMI4DVxk0M8OuuAzunuW2nruqOmqKuReFawDktA-vbDn2VNi560LQ_MmGqny8nWlJuNk3aHGwLv5Homv6GgfusI9q71CYLS3O1fFkJSfojvSz-QyNopLUxjnJ_gXCi_EAV_Yimmc46RSoifyz7PhTOUHtzKZp6MkBgSriuO83-5DYAOpPy7kNwIuz-QzBJ1aWlpJDWH2Zp8YjuhMNkE_2OkibthkWq1y4KaLqkKTCYOGGflI=s640-no?authuser=0",
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
      "/L Юля(учениця): Я здала       /L У мене все правильно       /L Я в шоці       /R Викладач: 200?       /L Юля(учениця): Так, дякую за підготовку!",
      "Олександр. Дякую Вам дуже. Вважаю, що Ваша праця і натхненність викладача потребує підживлення хоча б у грошовому вимірі. Дякую!       Викладач: Дякую, приємно це чути, працюємо далі",
      "/L Анжела(Учениця): Добрий день, чи можу я Ваш номер дати моїй знайомій для занять?      /R Препод: Добрий, так звісно",
      "Син просто у захваті! Вчитель легко виявляє прогалини у знаннях з алгебри та геометрії. Матеріал подає доступно, пояснює незрозумілі речі простими словами. Тільки найкращі слова подяки вчителю.Дякуємо! ",
      "/L Сашенька здравствуйте!      /L Маша (учениця) мне только что говорит: Мама мне так нравится с ним заниматся       /L Это говорит мне ребенок, котрый, в принципе, не любит заниматься ни по одному предмету😄😄       /L Спасибо большое!",
      "/L Доброго дня.       /L Я Ваш номер дала подрузі, без Вашого дозволу.       /L їй потрібен гарний репетитор для дівчинки 11 класу",
      "/L Учень: 25 з 30      /R  Вчитель: це скільки в балах?      /L учень: 175, ніколи б не подумав що можу на стільки скласти з 0, дуже дякую       /R Вчитель: молодець, працюй далі🦾",
      "Заняття було пречудовим. Викладач розповів все чітко і зрозуміло. Багато чого не знала, але завдяки вам я все зрозуміла і трошечки «шарю». На уроці було цікаво і навіть весело. Дякую вам!!",
    ],
  };
  const [sheet, setSheet] = useState<Data | undefined>(schoolData);

  const url = "https://api.jsonbin.io/v3/b/642184e9ace6f33a22fe12a7";
  const apiKey = "$2b$10$toqyJLX.dEJPK1M1JFUF9.ncmFKtgrrGSnbgtb82knpntYSpD2kcS";
  const config = {
    headers: {
      "X-Master-Key": apiKey,
    },
  };

  function handleOnClick() {
    setIsForm(true);
  }
  function handleOffClick() {
    setIsForm(false);
  }

  useEffect(() => {
    // axios
    //   .get(url, config)
    //   .then((response) => {
    //     setSheet(response.data.record);
    //     console.log(response.data.record);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const introRightFeedbackVariants: Variants = {
    hide: {
      opacity: 0,
      x: 300,
    },
    show: {
      opacity: 1,
      x: 0,
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
      transition: {
        duration: 2,
      },
    },
  };
  const introTopSeviceVariants: Variants = {
    hide: {
      opacity: 0.5,
      y: 200,
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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="mx-5 md:mx-24 lg:mx-48 font-montserrat ">
        <div id="main" className="mt-16 mb-16 md:mb-72">
          <motion.header
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introLeftFeedbackVariants}
          >
            <h1 className="text-large mx-auto lg:mx-0 lg:text-xl w-3/4 font-medium leading-tight">
              Онлайн - школа{" "}
              <p className="inline text-mainColor">професійної підготовки</p> до
              НМТ
            </h1>
            <h2 className="text-medium w-3/4 my-16 mx-auto lg:mx-0 lg:text-ml lg:w-2/5">
              Якісна підготовка - гарантує вступ до університету мрії
            </h2>
          </motion.header>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introAboutVariants}
          >
            <button
              onClick={handleOnClick}
              className="rounded-2xl mx-20 font-medium text-white bg-mainColor text-small p-5 lg:mx-0 md:text-main md:p-7 hover:bg-emerald-500"
            >
              Безкоштовний урок
            </button>
          </motion.div>
          {isForm && (
            <>
              <div
                onClick={handleOffClick}
                className="fixed left-0 top-0 w-full h-full bg-black opacity-70 transition-opacity duration-300"
              ></div>
              <Form />
            </>
          )}
        </div>
        <div
          id="about"
          className="mx-2 mb-16 md:mb-52  flex flex-wrap justify-center"
        >
          <h1 className="text-large text-center w-full inline-block lg:text-xl font-medium leading-tight">
            Про нас
          </h1>
          <motion.header
            className="text-medium text-center w-4/5 my-16 mx-auto lg:mx-0 lg:text-ml "
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
          className="mb-16 md:mb-52  flex flex-wrap justify-center"
        >
          <h1 className="text-large inline-block lg:text-xl font-medium  mb-10 md:mb-20 ">
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
          className="mx-2  mb-16 md:mb-52  flex flex-wrap justify-center"
        >
          <h1 className="text-large  inline-block lg:text-xl  font-medium leading-tight">
            Види послуг
          </h1>
          <h2 className="text-medium text-center w-4/5 my-10 md:mt-28 mx-auto lg:mx-0 lg:text-ml ">
            Заняття проводяться виключно на{" "}
            <p className="inline text-mainColor">індивідуальній</p> основі, що
            забезпечує максимально ефективний підхід до навчання. Гнучкий графік
            занять дозволяє погоджувати час та частоту занять з вашим
            репетитором, щоб графік відповідав вашим потребам та можливостям.
          </h2>
          <div className="flex w-4/5 mt-10 justify-around flex-wrap text-small md:text-main">
            {sheet !== undefined &&
              sheet.sevice.map((service, index) => (
                <motion.div
                  key={index}
                  className={classNames(
                    "w-full",
                    "my-4",
                    "md:w-2/5",
                    "m-2",
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
                  <ul className=" marker:text-mainColor list-disc font-medium pl-6 my-11">
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
          <h2 className="text-medium text-justify w-4/5 my-10 md:mt-28 mx-auto lg:mx-0 lg:text-ml ">
            Бонусом, надаємо доступ до телеграм каналу з учнями, де публікується
            лише <p className="inline text-mainColor">найнеобхідніша</p>{" "}
            інформація по заданому предмету.
          </h2>
        </div>
        <div id="feedback" className="mx-2 flex flex-wrap mb-40 justify-center">
          <h1 className="text-large w-full text-center inline-block lg:text-xl font-medium text-mainColor">
            Відгуки
          </h1>
          <div className="md:columns-2 w-4/5 gap-4">
            {sheet !== undefined &&
              sheet.feedback.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-mainColor text-white w-full mt-0 mr-4 mb-4 ml-0 p-3 rounded-lg box-border inline-block"
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
      </main>
    </>
  );
}
