import Image from 'next/image';

import { Container } from './styles';

export function Box(props) {
	const imageUrl = `${
		props.image.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
	}${props.image}`;
	return (
		<>
			<Container>
				<Image src={imageUrl} width="134" height="144" />
				<span>{props.title}</span>
				<p>{props.description}</p>
			</Container>
		</>
	);
}
