import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	div {
		background: #e2e2e2;
		width: 6rem;
		height: 4rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		:nth-child(2n) {
			background: none;
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
`;
