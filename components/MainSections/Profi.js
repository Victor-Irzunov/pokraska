import Image from "next/image"
import BtnComp from "../btn/BtnComp"

const Profi = () => {
	return (
		<section className='bg-white relative py-16' id="about">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>

					<div className='sd:w-3/5 xz:w-full relative'>

						<div className='bg-black sd:w-[30vw] xz:w-[50vw] sd:h-[65vh] xz:h-64' >
							<Image src='/fon/fon2.webp'
								alt='Профессиональная покраска авто' width={900} height={540}
								className="absolute top-1/2 -translate-y-1/2 sd:left-7 xz:left-0"
							/>
						</div>
					</div>

					<div className='sd:w-2/5 xz:w-full sd:px-12 xz:px-3 sd:ml-10 xz:ml-0 sd:mt-0 xz:mt-6'>
						<div className='w-24 h-2 bg-black mb-5' />
						<h2 className='text-gray-600 sd:text-4xl xz:text-2xl font-bold'>
							Профессиональная покраска автомобилей
						</h2>
						<p className='mt-6 uppercase sd:text-lg xz:text-base font-semibold'>
							Автомаляр в Минске
						</p>
						<p className='mt-4 italic'>
							Наши опытные специалисты гарантируют профессиональное качество покраски вашего автомобиля, придают ему новый блеск и обеспечивают защиту от внешних воздействий. Доверьте свой автомобиль нашим автомалярам в Минске и наслаждайтесь идеальным результатом.
						</p>

						<BtnComp title={'Записаться на покраску'} index={2} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Profi