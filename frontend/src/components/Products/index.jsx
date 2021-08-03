import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';

import { Button } from '../Button';

import line from '../../assets/products/linha.svg';
import waterSm from '../../assets/products/agua1.png';
import waterXm from '../../assets/products/agua2.png';

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
					<section>
						<Image
							src={waterSm}
							alt="Agua"
							layout="intrinsic"
							width={174}
							height={307}
							className="imgWater"
						/>
						<div className="box">
							<span>510ml</span>
							<p>
								Ideal para sua rotina e do tamanho da sua sede. A versatilidade
								ideal para você hidratar-se bem.{' '}
							</p>
							<Link href="/">
								<a>
									<Button title="saiba mais" infos="true" />
								</a>
							</Link>
						</div>
					</section>
					<section>
						<Image
							src={waterXm}
							alt="Agua"
							layout="intrinsic"
							width={248}
							height={437}
							className="imgWaterB"
						/>
						<div className="box">
							<span>1,5L</span>
							<p>
								A água que mata a sua vontade e mata sua sede. O tamanho
								perfeito para seu dia a dia.
							</p>
							<Link href="/">
								<a>
									<Button title="saiba mais" infos="true" />
								</a>
							</Link>
						</div>
					</section>
				</main>
			</Container>
		</>
	);
}
