import Head from "next/head";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import axios from "axios";
import { Data } from "../types";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/hero-block/hero-block";
import AboutUs from "../components/aboutUs/aboutUs";
import Services from "../components/services/services";
import Feedback from "../components/feedback/feedback";
import Teatcher from "../components/teachers/teacher";

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
    service: [
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

  return (
    <>
      <Head>
        <title>Alex School</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className="overflow-hidden px-5 font-montserrat md:px-24 lg:px-48">
        <Hero />

        <AboutUs />

        <div
          id="teachers"
          className="mb-16 flex  flex-col items-center justify-center md:mb-52"
        >
          {/*///////////////// Decoration /////////////////*/}
          <>
            <div className="absolute  left-10 -z-10 h-[1px] w-1/2  -rotate-12 transform bg-golden opacity-30 shadow-golden" />
            <div className="absolute  left-40 -z-10 h-[1px] w-1/2  -rotate-12 transform bg-golden opacity-30 shadow-golden" />
          </>
          {/*///////////////// Decoration /////////////////*/}

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

        <Services services={sheet?.service} />

        <Feedback feedbacks={sheet?.feedback} />

        {/*///////////////// Decoration /////////////////*/}
        <>
          <div className="shadow-green absolute right-0 -z-10 h-[1px]  w-1/3 rotate-12 transform bg-mainColor opacity-60" />
          <div className="shadow-green absolute right-3 -z-10 h-[1px]  w-1/3 rotate-12 transform bg-mainColor opacity-60" />
        </>
        {/*///////////////// Decoration /////////////////*/}
      </main>
    </>
  );
}
