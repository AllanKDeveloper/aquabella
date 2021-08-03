import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';

import { Button } from '../Button';

import line from '../../assets/products/linha.svg';

export function Products({ items = [] }) {
	return (
		<>
			<Container>
				<header>
					<div>
						<span>Conheça</span>
						<h1>Nossos produtos</h1>
						<Image src={line} />
					</div>
				</header>
				<main>
					{items.map((item, index) => {
						const imgWaterSm = `${
							item.icon.url.startsWith('/')
								? process.env.NEXT_PUBLIC_STRAPI_API_URL
								: ''
						}${item.icon.url}`;

						return (
							<section>
								<Image
									src={imgWaterSm}
									alt={item.title}
									layout="intrinsic"
									width={174}
									height={307}
									className="imgWater"
								/>
								<div className="box">
									<span>{item.navName2}</span>
									<p>
										{item.description.length > 85
											? `${item.description.substring(0, 85)}...`
											: item.description}
									</p>
									<Link href="/produtos">
										<a>
											<Button title="saiba mais" infos="true" />
										</a>
									</Link>
								</div>
							</section>
						);
					})}
				</main>
			</Container>
		</>
	);
}
