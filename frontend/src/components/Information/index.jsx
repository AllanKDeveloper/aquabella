/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { Container } from './styles';

import { Box } from '../Box';
import folha from '../../assets/folha.png';

export function Information(props) {
	const items = props.values.diferentials;

	return (
		<>
			<Container>
				<Parallax className="imgFolha" y={[200, -100]} tagOuter="figure">
					<Image src={folha} alt="Folha" />
				</Parallax>
				<div className="wrap">
					{items.map((values, index) => (
						<Box
							key={index}
							image={values.icon.url}
							title={values.title}
							description={values.description}
						/>
					))}
				</div>
			</Container>
		</>
	);
}
