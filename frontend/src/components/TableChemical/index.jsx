/* eslint-disable react/no-array-index-key */
import { Container } from './styles';

export function TableChemical({ values }) {
	return (
		<>
			<Container>
				{values.map(({ name, value }, index) => (
					<div key={index}>
						<span>{name}</span>
						<p>{value}</p>
					</div>
				))}
			</Container>
		</>
	);
}
