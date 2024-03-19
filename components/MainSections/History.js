import Image from "next/image"


const History = () => {
	return (
		<section className='bg-white py-20 relative'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>
					<div className='sd:w-1/2 xz:w-full sd:px-10 xz:px-0'>
						<Image src='/fon/fon8.webp' alt='О компании по покраске и ремонту кузова' width={1000} height={667} />
					</div>
					<div className='sd:mt-0 xz:mt-7 sd:w-1/2 xz:w-full sd:px-10 xz:px-0'>
						<h6 className='text-primary font-bold sd:text-5xl xz:text-3xl'>
							Немного о нас
						</h6>
						<p className='mt-4 italic sd:text-base xz:text-sm'>
							С более чем десятилетним опытом в области ремонта и покраски кузова, наша компания является лидером в своей отрасли. С момента основания в 2013 году мы постоянно стремимся к совершенству, предлагая клиентам высококачественные услуги и индивидуальный подход. Наша команда профессионалов обладает глубокими знаниями и богатым опытом, что позволяет нам успешно решать самые сложные задачи по восстановлению и преображению автомобильных кузовов. Мы гордимся нашей репутацией надежного партнера и стремимся сохранить доверие наших клиентов, продолжая предоставлять высокий уровень сервиса и безупречное качество работ.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default History