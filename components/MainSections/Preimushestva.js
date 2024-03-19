import Image from "next/image"


const Preimushestva = () => {
	return (
		<section className='bg-white relative py-10'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between'>
					<div className=''>
						<h3 className='text-gray-600 uppercase sd:text-2xl xz:text-lg font-semibold'>
							покраска и ремонт кузова
						</h3>
						<p className='mt-4 sd:max-w-sm xz:max-w-full text-gray-500'>
							Предлагаем качественные услуги по покраске или ремонту кузова в короткие сроки по выгодным ценам.
						</p>
					</div>
					<div className='flex flex-col items-center justify-center sd:mt-0 xz:mt-4'>
						<Image src='/svg/location.svg' alt='Располажение покрасочного цеха' width={100} height={100} />
						<p className='text-center text-gray-700 font-semibold'>
							Удобное <span className="sd:block xz:inline">располажение</span>
						</p>
					</div>
					<div className='flex flex-col items-center justify-center sd:mt-0 xz:mt-4'>
						<Image src='/svg/car.svg' alt='50+ покрашенных автомобилей' width={100} height={100} />
						<p className='text-center text-gray-700 font-semibold'>
							50+ покрашенных <span className="sd:block xz:inline">автомобилей</span>
						</p>
					</div>
					<div className='flex flex-col items-center justify-center sd:mt-0 xz:mt-4'>
						<Image src='/svg/users.svg' alt='Довольные клиенты' width={100} height={100} />
						<p className='text-center  text-gray-700 font-semibold'>
							100+ довольных <span className="sd:block xz:inline">клиентов</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Preimushestva