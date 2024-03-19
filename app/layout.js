import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Покраска авто в Минске | Кузовные работы",
  description: "Мы - команда профессионалов с более чем десятилетним опытом в области ремонта и покраски кузова. Надежность, качество и индивидуальный подход - вот основные принципы нашей работы.",
  keywords: "покраска авто, кузовные работы, ремонт кузова, локальная покраска авто, покраска машины, ремонт кузова автомобиля, полировка царапин на авто, покраска двери авто, покраска элемента авто, сварка авто",
  alternates: {
    canonical: 'https://pokraska.vercel.app/'
  },
  ogTitle: 'Покраска авто в Минске | Кузовные работы',
  ogDescription: 'Мы - команда профессионалов с более чем десятилетним опытом в области ремонта и покраски кузова. Надежность, качество и индивидуальный подход - вот основные принципы нашей работы.',
  ogImage: '',
  twitterTitle: 'Покраска авто в Минске | Кузовные работы',
  twitterDescription: 'Мы - команда профессионалов с более чем десятилетним опытом в области ремонта и покраски кузова. Надежность, качество и индивидуальный подход - вот основные принципы нашей работы.',
  twitterImage: ''
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
