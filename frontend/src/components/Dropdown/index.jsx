import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

import imgPolygon from '../../assets/polygon.svg';

import items from '../../utils/navbar/dropdown.data';

export function Dropdown() {
	return (
		<>
			<Container>
				<ul>
					<div className="polygon">
						<Image src={imgPolygon} />
					</div>
					{items.map(({ path, label }) => (
						<li key={path}>
							<Link href={path}>
								<a>{label}</a>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</>
	);
}
