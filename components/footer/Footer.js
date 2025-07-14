"use client"
import Image from "next/image";
import Icon from "../iconMesseger/Icon";
import { Link as LinkScroll } from 'react-scroll';
import { sendOrderTelegram } from "@/http/telegramAPI";

const Footer = () => {
	const handlePhoneClick = async () => {
			const message = "Клик по номеру покраска авто";
			await sendOrderTelegram(message);
		};
	return (
		<footer className={`py-4 relative bg-secondary`} id='contacts'>
			<div className='container mx-auto'>
				<aside className='text-white flex sd:justify-between xz:justify-start items-start py-8 sd:flex-row xz:flex-col'>
					<div>
						<div className='sd:text-xl xz:text-base flex justify-center items-center'>
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
									<p className='text-xl tracking-widest font-semibold'>
										pokraska avto
									</p>
									<span className='block font-extralight uppercase text-[9px] tracking-[0.5em]'>
										minsk
									</span>
								</div>
							</LinkScroll>
						</div>
					</div>

					<div className='sd:mt-0 xz:mt-10'>
						<div className='flex flex-col items-start sd:justify-center xz:justify-start'>
							<p className='footer-title'>
								Контакты
							</p>
							<div className='flex'>
								<a href='tel:+375447810661'
									className="font-semibold sd:text-xl xz:text-xl mr-2"
									onClick={handlePhoneClick}
								>
									+375 00 000-00-00
								</a>
								<Image src='/svg/a1.svg' alt='Оператор А1 для записи на покраску, полировку или ремонт кузова авто' width={20} height={20} />
							</div>
						</div>
					</div>


					<div className='sd:mt-0 xz:mt-4'>
						<p className='footer-title'>
							Адрес
						</p>
						<p className='text-lg'>
						г.Минск ул. Автомобилистов 10
						</p>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<p className='footer-title'>
							Режим работы
						</p>
						<p className='text-lg'>
							8:00-22:00 <span className='block text-sm font-light'>
								Без выходных
							</span>
						</p>
					</div>
					<nav className='sd:mt-0 xz:mt-4'>
						<p className="footer-title">Social</p>
						<div className="grid grid-flow-col gap-4">
							<Icon />
						</div>
					</nav>

				</aside>
			</div>

			<aside className="border-t pt-1">
				<div className='container mx-auto text-center '>
					<p className='text-gray-200 xs:text-xs xz:text-[10px] font-light' >
						Copyright © 2024 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-primary underline'> VI:TECH</a>.
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>
		</footer>
	)
}

export default Footer