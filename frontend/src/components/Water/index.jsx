import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Container, InfoProducts } from './styles';
import { Button } from '../Button';
import TableComposition from '../TableComposition';
import { TableChemical } from '../TableChemical';

export function Water({ item }) {
	const imgPet = `${
		item.media.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
	}${item.media.url}`;

	return (
		<>
			<Container>
				<div className="img-div">
					<Image src={imgPet} width="155" height="522" priority="true" />
				</div>
				<div className="infos">
					<h1>{item.title}</h1>
					<p>{item.description}</p>
					<aside>
						<ReactMarkdown>{item.extra}</ReactMarkdown>
					</aside>
					{item.showButton && (
						<Link href={item.buttonLink}>
							<a>
								<Button title={item.buttonText} infos="true" width="17rem" />
							</a>
						</Link>
					)}
				</div>
			</Container>
			<InfoProducts>
				<section>
					<h1>Composição química (mg/L)</h1>
					<TableComposition values={item.ChemicalItems} />
				</section>
				<section>
					<h1>Características Físico-Químicas</h1>
					<TableChemical values={item.fisioChemical} />
				</section>
			</InfoProducts>
		</>
	);
}
