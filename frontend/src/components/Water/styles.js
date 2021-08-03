import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 2rem;

	.img-div {
		position: relative;
		width: 50%;
		height: 37rem;
		box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
		border-radius: 10px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.infos {
		display: flex;
		flex-direction: column;
		width: 50%;

		a {
			width: fit-content;
		}

		> h1 {
			color: #00a2bc;
			font-weight: 700;
			font-size: 2.5rem;
			margin-bottom: 3rem;
		}

		> p {
			font-size: 1.1rem;
			font-weight: 400;
			color: rgba(69, 86, 91, 0.7);
			margin-bottom: 4.5rem;
		}

		> aside {
			margin-bottom: 3rem;
		}
	}

	@media ${breakpoint.device.xl} {
		.img-div {
			width: 40%;
		}

		.infos {
			width: 60%;
		}
	}

	@media ${breakpoint.device.sm} {
		justify-content: center;
		flex-wrap: wrap;

		.img-div {
			width: 100%;
			order: 2;
			height: auto;
		}

		.infos {
			width: 100%;
			text-align: center;
			align-items: center;
		}
	}
`;

export const InfoProducts = styled.div`
	width: 100%;
	display: grid;
	justify-content: center;
	gap: 5rem;

	section {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			color: #38b4db;
			font-size: 1.1rem;
			font-weight: 600;
			width: 20rem;
			margin: 0 auto 1rem auto;
			text-align: center;
		}
	}
`;
