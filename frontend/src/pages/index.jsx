import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
	getConfigurationsContent,
	getSeoForPage,
	getBannersContent,
	getDiferentials,
	getAboutHome,
	getItemsProducts,
} from '../lib/api';

import { HeaderHome } from '../components/HeaderHome';
import { Information } from '../components/Information';
import { Products } from '../components/Products';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Heading } from '../components/Heading';

import { Container } from '../styles/home';

import imgPure from '../assets/agua-pura.svg';
import imgNatural from '../assets/agua-natural.svg';

export default function Home({
	configurations,
	seo,
	banners,
	diferentials,
	aboutHome,
	products,
}) {
	const { title, description, buttonText, buttonLink, media } =
		aboutHome.aboutHome;

	const imageUrl = `${
		media.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
	}${media.url}`;

	return (
		<>
			<Heading seo={seo} />
			<HeaderHome banner={banners} />
			<Information values={diferentials} />
			<Products items={products} />

			<Container>
				<div className="img">
					<Image
						src={imageUrl}
						width={1000}
						height={1000}
						alt="Beba aquabella"
					/>
				</div>
				<div className="infos">
					<h1>{title}</h1>
					<p>{description}</p>
					<div>
						<Image
							src={imgPure}
							alt="Agua pura Aquabella"
							layout="intrinsic"
							width={200}
							height={45}
						/>
						<Image
							src={imgNatural}
							alt="Agua natural Aquabella"
							layout="intrinsic"
							width={200}
							height={45}
						/>
					</div>
					<Link href={buttonLink}>
						<a>
							<Button title={buttonText} width="15rem" infos="true" />
						</a>
					</Link>
				</div>
			</Container>
			<Footer configuration={configurations} />
		</>
	);
}

export async function getStaticProps() {
	const configurations = (await getConfigurationsContent()) || [];
	const diferentials = (await getDiferentials()) || [];
	const banners = (await getBannersContent()) || [];
	const aboutHome = (await getAboutHome()) || [];
	const seo = (await getSeoForPage('/')) || [];
	const products = (await getItemsProducts()) || [];

	return {
		props: {
			aboutHome,
			diferentials,
			banners,
			seo,
			configurations: configurations?.configuration || [],
			products: products?.products || [],
		},
		revalidate: 10, // In seconds
	};
}
