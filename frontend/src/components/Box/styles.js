import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	width: 17rem;
	height: 22rem;
	text-align: center;
	z-index: 1;

	span {
		padding-top: 3.75rem;
		font-size: 1.1rem;
		color: #38b4db;
		font-weight: 600;
	}

	p {
		padding-top: 1.4rem;
		font-size: 0.9rem;
		color: rgba(69, 86, 91, 0.7);
	}

	@media ${breakpoint.device.sm} {
		span {
			padding-top: 1.75rem;
		}
	}
`;
