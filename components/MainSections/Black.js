import Image from "next/image"
import BtnComp from "../btn/BtnComp"


const Black = () => {
	return (
		<section className='relative py-16 bg-black min-h-screen'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>
					<div className='sd:w-2/5 xz:w-full xz:h-96 sd:h-auto'>
						<div className='relative'>
							<Image src='/fon/fon4.webp' alt='Опыт автомаляра и качество материалов'
								width={350} height={350}
								className='absolute top-0 left-2 z-10'
							/>
							<div className='sd:w-96 sd:h-96 xz:w-72 xz:h-96 bg-primary absolute sd:top-16 xz:-top-5 sd:left-24 xz:left-10 xy:left-20 xx:left-28 z-0' />
						</div>
					</div>

					<div className='sd:w-3/5 xz:w-full sd:px-20 xz:px-3 pt-5'>
						<h4 className='uppercase text-xl text-white font-semibold tracking-widest'>
							покраска авто
						</h4>
						<p className='sd:text-4xl xz:text-3xl text-primary font-bold mt-5'>
							Качество и опыт
						</p>
						<p className='mt-6 text-white italic'>
							Опыт автомаляра и качество материалов - залог безупречного результата. Придайте своему автомобилю новую жизнь с нашей профессиональной покраской!
						</p>
					</div>
				</div>

				<div className='flex sd:flex-row xz:flex-col mt-16 xz:min-h-[85vh] sd:min-h-[80vh] sd:px-0 xz:px-2'>
					<div className='sd:w-2/5 xz:w-full flex flex-col justify-center sd:pt-16 xz:pt-0'>
						<p className='uppercase text-2xl font-semibold text-white'>
							Больше 50 машин мы покрасили за годы работы
						</p>
						<p className='mt-6 italic text-white'>
							Покраска каждого автомобиля - это не только процесс, но и искусство. Доверьте нам ваш автомобиль и убедитесь в качестве нашей работы!
						</p>
						<BtnComp red title={'Нужна покраска'} />
					</div>
					<div className='sd:w-3/5 xz:w-full relative'>
						<Image src='/fon/fon6.webp'
							alt='Машины которые мы покрасили' width={952} height={702}
							className="absolute sd:top-20 xz:top-10 sd:-right-10 xz:right-0"
						/>
					</div>
				</div>

				<div className='flex sd:flex-row xz:flex-col xz:mt-6 sd:mt-0'>
					<div className='sd:w-1/2 xz:w-full'>
						<Image src='/fon/fon7.webp'
							alt='Превосходный результат покраски' width={350} height={350}
							className="w-full"
						/>
					</div>
					<div className='sd:w-1/2 xz:w-full flex flex-col justify-center'>
						<p className='text-white font-bold text-2xl'>
							Мы знаем как добиться превосходного результата
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Black