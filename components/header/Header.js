"use client"
import phoneNumbers from '@/config/config';
import { sendOrderTelegram } from '@/http/telegramAPI';
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';

export default function Header() {
	const handlePhoneClick = async () => {
		const message = "Клик по номеру покраска авто";
		await sendOrderTelegram(message);
	};

	return (
		<header className='z-50 bg-transparent relative'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="drawer w-10 mr-4 sd:hidden xz:block">
							<input id="my-drawer" type="checkbox" className="drawer-toggle" />
							<div className="drawer-content">
								<label htmlFor="my-drawer" className="">
									<Image src='/svg/menu.svg' alt='Кнопка меню' width={30} height={30} />
								</label>
							</div>
							<div className="drawer-side">
								<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
								</label>
								<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-10 text-lg relative">

									<li className='mb-4 text-xl font-bold'>
										<a>
											Меню
										</a>
									</li>
									<li>
										<LinkScroll
											to="main"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Главная
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="services"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Услуги
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="about"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											О нас
										</LinkScroll>
									</li>
									<li>
										<LinkScroll
											to="contacts"
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
											rel="nofollow"
											href='#/'
										>
											Контакты
										</LinkScroll>
									</li>

									<li className='mt-16'>
										<div className='flex flex-col items-start justify-start'>
											<p className='uppercase text-gray-400 text-xs font-bold'>
												телефон мастера
											</p>
											<a href={`tel:${phoneNumbers.phone1Link}`}
												className='link link-hover flex'
												onClick={handlePhoneClick}
											>
												Позвонить мастеру
												<Image src='/svg/a1.svg' alt='Телефон оператора Life' width={15} height={15} className='ml-1.5' />
											</a>
										</div>
									</li>


									<div className='absolute bottom-3'>
										<p className='text-xl tracking-widest font-semibold leading-3'>
											pokraska avto
										</p>
										<span className='block font-extralight uppercase text-[9px] tracking-[0.5em]'>
											minsk
										</span>
									</div>
								</ul>
							</div>
						</div>
						<LinkScroll
							to="main"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							rel="nofollow"
							href='#/'
						>
							<div className='text-white'>
								<p className='sd:text-xl xz:text-sm sd:tracking-widest xz:tracking-normal font-semibold'>
									pokraska avto
								</p>
								<span className='block font-extralight uppercase sd:text-[9px] xz:text-[7px] sd:tracking-[0.5em] xz:tracking-[0.3em]'>
									minsk
								</span>
							</div>
						</LinkScroll>
					</div>

					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 font-light text-lg text-white tracking-widest">
							<li>
								<LinkScroll
									to="main"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Главная
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="services"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Услуги
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="about"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									О нас
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="contacts"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						<div className='flex flex-col text-white'>
							<a
								href={`tel:${phoneNumbers.phone1Link}`}
								className='link link-hover flex sd:text-xl xz:text-base underline'
								onClick={handlePhoneClick}
							>
								Позвонить мастеру
								<Image src='/svg/a1.svg' alt='Телефон оператора' width={15} height={15} className='ml-1.5 sd:block xz:hidden' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</header >
	)
}