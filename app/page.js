import Black from "@/components/MainSections/Black";
import History from "@/components/MainSections/History";
import Portfolio from "@/components/MainSections/Portfolio";
import Preimushestva from "@/components/MainSections/Preimushestva";
import Profi from "@/components/MainSections/Profi";
import Services from "@/components/MainSections/Services";
import BtnComp from "@/components/btn/BtnComp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen" id="main">
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <div className='container mx-auto mb-28'>
        <section className='sd:pt-28 xz:pt-20 text-white relative'>
          <p className='mb-5 uppercase'>
            ремонт кузова
          </p>
          <h1 className='font-bold xx:text-4xl xz:text-2xl sd:text-6xl uppercase tracking-wider text-shadow'>
            Покраска{' '}
            <span className="sd:block xz:inline sd:mt-5 xz:mt-0">
              и кузовной ремонт
            </span>
            <span className="block sd:mt-5 xz:mt-1">
              авто в Минске
            </span>
          </h1>
          <p className='sd:mt-16 xz:mt-12 sd:text-base xz:text-sm font-light sd:max-w-md xz:max-w-full'>
            Профессиональная покраска от опытных маляров с более чем десятилетним опытом работы.
          </p>
          <div className='mt-16'>
            <BtnComp title={'Нужна консультация'} index={1} name={'Нужна консультация'} />
          </div>
        </section>
      </div>

      <Profi />
      <Preimushestva />
      <Black />
      <Services />
      <History />
      <Portfolio />
    </main>
  );
}
