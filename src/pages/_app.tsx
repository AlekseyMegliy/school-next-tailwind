import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-montserrat`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
