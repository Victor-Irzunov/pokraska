import Image from "next/image";
import BtnComp from "../btn/BtnComp";

const Services = () => {
	const data = [
		{
			title: "Кузовной ремонт",
			image: "/services/card1.webp",
			services: ["Рихтовка", "Подготовка", "Покраска", "Сварочные работы", "Полировка"]
		},
		{
			title: "Покраска",
			image: "/services/card2.webp",
			services: ["Покраска авто", "Покраска бампера", "Покраска дверей", "Покраска крыльев", "Покраска капота"]
		},
		{
			title: "Полировка",
			image: "/services/card3.webp",
			services: ["Полировка фар", "Косметическая полировка", "Глубокая полировка", "Керамическое покрытие", "Жидкое стекло"]
		},
	];

	return (
		<section className='bg-slate-100 py-12 relative min-h-screen' id="services">
			<div className='container mx-auto flex flex-col items-center'>
				<div className='text-center'>
					<h5 className='text-primary sd:text-5xl xz:text-4xl font-bold'>
						Услуги
					</h5>
					<p className='mt-4 uppercase'>
						по ремонту и покраски кузова автомобиля
					</p>
				</div>
				<div className='mt-10 grid sd:grid-cols-3 xz:grid-cols-1 gap-4'>
					{data.map((item, index) => (
						<div key={index} className="card xx:w-96 xz:w-80 bg-base-100 shadow-xl rounded-none">
							<figure className="px-5 pt-5">
								<img src={item.image} alt={item.title} className="rounded-none" />
							</figure>
							<div className="card-body items-center text-center">
								<h3 className="card-title uppercase">
									{item.title}
								</h3>
								<ul className='mt-3'>
									{item.services.map((service, i) => (
										<li key={i} className='mb-2 bg-primary px-3 py-1 text-white font-semibold'>
											{service}
										</li>
									))}
								</ul>
								<div className="card-actions -mt-7">
									<BtnComp title={'Оставить заявку'} center index={index + 5} name={item.title} />
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-10 flex items-start'>
					<Image src='/svg/info.svg'
						alt='Информация по покраске и ремонту кузова' width={20} height={20}
						className="animate-bounce"
					/>
					<p className='ml-2'>
						Стоимость работы рассматривается индивидуально в зависимости от объема и сложности услуги. Мы гарантируем конкурентные цены и высокое качество обслуживания каждому клиенту.
					</p>
				</div>


			</div>
		</section>
	);
};

export default Services;
