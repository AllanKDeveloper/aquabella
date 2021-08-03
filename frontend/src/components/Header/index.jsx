import Image from 'next/image';

import { Parallax } from 'react-scroll-parallax';

import { Container } from './styles';
import { Navbar } from '../Navbar';

import imgArrow from '../../assets/header/arrow.svg';
import imgFolha from '../../assets/footer/folha-footer.png';

export function Header(props) {
	return (
		<>
			<Container>
				<header>
					<div className="wrap">
						<Navbar info="true" />
						<section>
							<div>
								<span>{props.title}</span>
								<h1>{props.subTittle}</h1>
							</div>
							<div className="img">
								<Image src={imgArrow} />
							</div>
						</section>
					</div>
				</header>

				<div className="wrap">
					<main>
						<h2>{props.h1}</h2>
						<div>
							<p>{props.p1}</p>
							<p>{props.p2}</p>
						</div>
					</main>
				</div>
				<Parallax className="folha" y={[-100, 10]} tagOuter="figure">
					<Image src={imgFolha} alt="Folha" />
				</Parallax>
			</Container>
		</>
	);
}
