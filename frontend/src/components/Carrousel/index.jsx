/* eslint-disable array-callback-return */
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { Container } from './styles';

SwiperCore.use([Pagination, Navigation]);

export function Carrousel(props) {
	const urlItems = [];
	const { images } = props;
	images.map((item) => {
		const imageUrl = `${
			item.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
		}${item.url}`;
		urlItems.push(imageUrl);
	});

	return (
		<>
			<Container>
				<Swiper slidesPerView={2} spaceBetween={20} loop navigation>
					{urlItems.map((values) => (
						<SwiperSlide key={values}>
							<Image
								src={values}
								layout="fill"
								objectFit="cover"
								quality={100}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</>
	);
}
