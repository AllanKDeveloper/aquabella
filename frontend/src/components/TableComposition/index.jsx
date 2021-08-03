/* eslint-disable react/no-array-index-key */
import { Container } from './styles';

export default function TableComposition({ values }) {
	return (
		<Container>
			{values.map(({ name, value }, index) => (
				<div key={index}>
					<span>{name}</span>
					<p>{value}</p>
				</div>
			))}
		</Container>
	);
}
