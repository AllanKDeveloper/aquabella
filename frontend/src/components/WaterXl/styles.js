import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	.img-div {
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
			width: 10rem;
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
`;
