import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Parallax } from 'react-scroll-parallax';

import { Container } from './styles';
import { Navbar } from '../Navbar';
import { Button } from '../Button';
// import WaterHome from '../../assets/header/water-home.png';
import folha from '../../assets/folha-header.png';

export function HeaderHome(props) {
	const imageUrl = `${
		props.banner.banners[0].media.url.startsWith('/')
			? process.env.NEXT_PUBLIC_STRAPI_API_URL
			: ''
	}${props.banner.banners[0].media.url}`;
	return (
		<>
			<Container>
				<Parallax className="divFolha" y={[-150, 100]} tagOuter="figure">
					<Image src={folha} alt="Folha" />
				</Parallax>
				<div className="wrap">
					<Navbar />
					<main>
						<section className="esq">
							<h1>{props.banner.banners[0].title}</h1>
							<div className="section-buttons">
								<Link href={props.banner.banners[0].buttonlink}>
									<a>
										<Button title={props.banner.banners[0].buttontext} />
									</a>
								</Link>
								<Link href={props.banner.banners[0].buttonLinkSec}>
									<a>
										<Button
											title={props.banner.banners[0].buttonTextSec}
											infos="true"
										/>
									</a>
								</Link>
							</div>
							<div className="text">
								<p>{props.banner.banners[0].text}</p>
							</div>
						</section>
						<section className="dir">
							<Image
								src={imageUrl}
								width={1000}
								height={1000}
								alt="Aquabela Água"
							/>
						</section>
					</main>
				</div>
			</Container>
		</>
	);
}
