import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Клининг в Минске | Клининговая компания | Цены",
  description: "Мы предоставляем профессиональные услуги по клинингу в Минске. Наша компания обеспечит чистоту и порядок в вашем доме, квартире или офисе. Закажите клининг у нас уже сегодня!",
  keywords: "клининг, клининга, клининговая компания, клининговая служба, клининг цена, уборка, минск, минский район",
  alternates: {
    canonical: 'http://localhost:3000/'
  },
  ogTitle: 'Клининг в Минске | Клининговая компания | Цены',
  ogDescription: 'Мы предоставляем профессиональные услуги по клинингу в Минске. Наша компания обеспечит чистоту и порядок в вашем доме, квартире или офисе. Закажите клининг у нас уже сегодня!',
  ogImage: '', // замените ссылку на фактическую ссылку на изображение
  twitterTitle: 'Клининг в Минске | Клининговая компания | Цены',
  twitterDescription: 'Мы предоставляем профессиональные услуги по клинингу в Минске. Наша компания обеспечит чистоту и порядок в вашем доме, квартире или офисе. Закажите клининг у нас уже сегодня!',
  twitterImage: '' // замените ссылку на фактическую ссылку на изображение
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
