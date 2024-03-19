import Image from "next/image"
import BtnComp from "../btn/BtnComp"


const Portfolio = () => {
	return (
		<section className='bg-white relative sd:py-16 xz:py-6'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>

					<div className='sd:w-1/2 xz:w-full'>
						<div className=''>
							<Image src='/portfolio/1.webp' alt='Покраска авто' width={1024} height={384} />
						</div>
						<div className=''>
							<Image src='/portfolio/2.webp' alt='Покраска авто' width={1024} height={384} />
						</div>
						<div className=''>
							<Image src='/portfolio/3.webp' alt='Покраска авто' width={1024} height={384} />
						</div>
					</div>

					<div className='grid sd:grid-cols-2 xz:grid-cols-1 sd:w-1/2 xz:w-full'>
						<div className=''>
							<Image src='/portfolio/4.webp'
								alt='Кузовной ремонт' width={1200} height={1200}
								className="bg-cover w-full h-full"
							/>
						</div>

						<div className='p-10 flex flex-col justify-center items-center'>
							<p className='text-gray-700 text-2xl font-semibold'>
								Кузовной ремонт
							</p>
							<BtnComp title={'Записаться на ремонт'} red />
						</div>

						<div className='bg-primary p-10 flex flex-col justify-center items-center'>
							<p className='text-white text-2xl font-semibold'>
								Покраска автомобилей
							</p>
							<p className='mt-3 italic text-white'>
								Профессиональная покраска в Минске
							</p>
						</div>

						<div className=''>
							<Image src='/portfolio/5.webp'
								alt='Покраска автомобилей' width={1200} height={1200}
								className="bg-cover w-full h-full"
							/>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default Portfolio