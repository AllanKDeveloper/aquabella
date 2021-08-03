import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Header } from '../components/Header';
import { Carrousel } from '../components/Carrousel';
import { Footer } from '../components/Footer';
import { SectionMission } from '../styles/sobre';
import { Button } from '../components/Button';

import { getAbouts } from '../lib/api';

import imgMap from '../assets/map.png';
import imgBottle from '../assets/bottle.svg';
import imgFolha from '../assets/header/folha.png';

export default function Sobre({ about }) {
	const aboutItems = about.about;
	return (
		<>
			<Head>
				<title>Aquabella | Quem somos</title>
			</Head>
			<Header
				title="SOBRE A AQUABELLA"
				subTittle="Quem somos"
				h1={aboutItems.title}
				p1={aboutItems.description}
				p2={aboutItems.subDesctription}
				folha={imgFolha}
			/>
			<Carrousel images={aboutItems.gallery} />
			<SectionMission>
				<div className="wrap">
					<header>
						<div className="box1">
							<div className="fix" />
							<section>
								<h3>Missão</h3>
								<p>{aboutItems.mission}</p>
							</section>
							<section>
								<h3>Visão</h3>
								<p>{aboutItems.vision}</p>
							</section>
						</div>
						<div className="box2">
							<div className="fix" />
							<h3>Valores</h3>
							<ul>
								<li>Satisfação do cliente em primeiro lugar;</li>
								<li>Crescer de modo sustentável;</li>
								<li>Humildade e pés no chão;</li>
								<li>Todo dia é dia de aprender;</li>
								<li>O esforço deve ser do tamanho do nosso sucesso;</li>
								<li>O meio-ambiente é o nosso bem mais precioso;</li>
							</ul>
						</div>
					</header>

					<main>
						<div className="infos">
							<Image src={imgBottle} />
							<h2>{aboutItems.titleDistributor}</h2>
							<p>{aboutItems.descriptionDistributor}</p>
							<Link href={aboutItems.buttonLink}>
								<a>
									<Button title={aboutItems.buttonText} infos="true" />
								</a>
							</Link>
						</div>
						<div className="img">
							<Image src={imgMap} />
						</div>
					</main>
				</div>
			</SectionMission>
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const about = (await getAbouts()) || [];
	return {
		props: {
			about,
		},
		revalidate: 10, // In seconds
	};
}
