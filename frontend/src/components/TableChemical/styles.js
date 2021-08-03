import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 50%;

	div {
		display: flex;
		justify-content: space-between;
		background: #e2e2e2;

		padding: 0 0.5rem 0 0.5rem;

		:nth-child(2n) {
			background: transparent;
		}
		span {
			color: #38b4db;
			font-size: 0.8rem;
			font-weight: 600;
		}

		p {
			color: rgba(69, 86, 91, 0.7);
		}
	}

	@media ${breakpoint.device.sm} {
		width: 100%;
	}
`;
