import { useState } from 'react';

import Image from 'next/image';

import { Container, Content } from '../styles/produtos';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import imgArrow from '../assets/header/arrow.svg';
import Folha from '../assets/products/folha-products.png';
import imgWaterSm from '../assets/items/water-sm.png';

import { getItemsProducts } from '../lib/api';
import { Water } from '../components/Water';

export default function produtos({ items }) {
	const [handleWater, setHandleWater] = useState(items[0].slug);
	function handle(value) {
		setHandleWater(value);
	}

	return (
		<>
			<Container>
				<header>
					<div className="wrap">
						<Navbar info="true" />
						<section>
							<div>
								<span>CONHEÇA NOSSA LINHA DE</span>
								<h1>Produtos</h1>
							</div>
							<div className="img">
								<Image src={imgArrow} />
							</div>
						</section>
						<div className="folha">
							<Image src={Folha} />
						</div>
					</div>
				</header>

				<Content>
					<div className="wrap">
						<section className="content">
							<span>
								Escolha o produto abaixo para ver informações adicionais:
							</span>
							<main>
								<header>
									{items.map((product, index) => {
										const imgWaterSm = `${
											product.icon.url.startsWith('/')
												? process.env.NEXT_PUBLIC_STRAPI_API_URL
												: ''
										}${product.icon.url}`;

										return (
											<button
												key={index}
												type="button"
												id={handleWater === product.slug ? 'selected' : ''}
												className="item"
												onClick={() => handle(product.slug)}
											>
												<Image
													src={imgWaterSm}
													width="100vw"
													height="100vw"
													layout="fixed"
													priority="true"
												/>
												<span>
													<p>{product.navName}</p>
													<p>{product.navName2}</p>
													<p>{product.navName3}</p>
												</span>
											</button>
										);
									})}
								</header>
								{items.map((product, index) =>
									handleWater === product.slug ? (
										<Water item={product} key={index} />
									) : (
										''
									)
								)}
							</main>
						</section>
					</div>
				</Content>

				<Footer />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const items = (await getItemsProducts()) || [];
	return {
		props: {
			items: items?.products,
		},
		revalidate: 10, // In seconds
	};
}
