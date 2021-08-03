/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import Head from 'next/head';

import { Container, Content, History } from '../styles/origem';

import { Box } from '../components/Box';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import { getDiferentials, getOrigin } from '../lib/api';

import imgArrow from '../assets/header/arrow.svg';
import imgFolha from '../assets/header/folha.png';
import img01 from '../assets/origem/01.svg';
import img02 from '../assets/origem/02.svg';
import img03 from '../assets/origem/03.svg';
import img04 from '../assets/origem/04.svg';

export default function origem({ diferentials, origins }) {
	const diferentialsItems = diferentials.diferentials;
	const originItems = origins.origin;
	return (
		<>
			<Head>
				<title>Aquabella | A origem</title>
			</Head>
			<Container>
				<header>
					<div className="wrap">
						<Navbar info="true" />
						<section>
							<div>
								<span>NOSSA ÁGUA</span>
								<h1>A origem</h1>
							</div>
							<div className="img-arrow">
								<Image src={imgArrow} />
							</div>
						</section>
					</div>
				</header>

				<div className="wrap2">
					<main>
						<h1>{originItems.title}</h1>
						<p>{originItems.description}</p>
					</main>
					<div className="folha">
						<Image src={imgFolha} />
					</div>
				</div>
				<Content>
					<div className="content-box">
						{diferentialsItems.map((values, index) => (
							<Box
								key={index}
								image={values.icon.url}
								title={values.title}
								description={values.description}
							/>
						))}
					</div>
				</Content>
				<section className="img">
					<div>
						<span>Vista Alegre do Prata - RS</span>
					</div>
				</section>
				<History>
					<h1>História do poço</h1>
					<section>
						<div>
							<aside>
								<Image src={img01} />
							</aside>
							<p>
								Em meados dos anos 2000, foi aberto um poço artesiano para o uso
								na agricultura e pecuária;
							</p>
						</div>
						<div>
							<aside>
								<Image src={img02} />
							</aside>
							<p>
								Já em uso na agropecuária, a água começou a ser consumida também
								pela família;
							</p>
						</div>
						<div>
							<aside>
								<Image src={img03} />
							</aside>
							<p>
								Após consumir a água, foi submetida a diversos testes e
								verificada que suas propriedades são minerais e medicinais;
							</p>
						</div>
						<div>
							<aside>
								<Image src={img04} />
							</aside>
							<p>
								Inicia-se os estudos para a implantação de uma distribuidora de
								água mineral e assim como a liberação por parte do governo
								federal para a extração da água.
							</p>
						</div>
					</section>
				</History>
				<Footer />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const diferentials = (await getDiferentials()) || [];
	const origins = (await getOrigin()) || [];
	return {
		props: {
			diferentials,
			origins,
		},
		revalidate: 10, // In seconds
	};
}
