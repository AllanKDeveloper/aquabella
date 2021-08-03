import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';
import { Button } from '../Button';

import imgPure from '../../assets/agua-pura.svg';
import imgNatural from '../../assets/agua-natural.svg';
import imgPet from '../../assets/garrafa-510ml.png';

export function WaterXl() {
	return (
		<>
			<Container>
				<div className="img-div">
					<Image src={imgPet} priority="true" />
				</div>
				<div className="infos">
					<h1>Pet 1,5L com e sem gas</h1>
					<p>
						Qualidade do tamanho da sua sede. A água de 1,5L com e sem gás,
						oferece qualidade para sua hidratação e praticidade para você matar
						a sua sede de qualquer lugar. Carregada de minerais, você bebe muito
						mais que água, você consome saúde!
					</p>
					<aside>
						<Image src={imgPure} priority="true" />
						<Image src={imgNatural} priority="true" />
					</aside>
					<Link href="/">
						<a>
							<Button
								title="Conheça a origem da água"
								infos="true"
								width="17rem"
							/>
						</a>
					</Link>
				</div>
			</Container>
		</>
	);
}
