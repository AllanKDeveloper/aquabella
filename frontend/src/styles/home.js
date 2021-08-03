import styled from 'styled-components';

import breakpoint from '../_variables';

export const Container = styled.div`
	width: 100%;
	max-width: 1216px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10rem;
	padding: 0 1rem 0 1rem;

	.img {
		width: 50%;
	}

	.infos {
		width: 45%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5rem;

		h1 {
			color: #00a2bc;
			font-weight: 700;
			font-size: 2.5rem;
			line-height: 3.3rem;
		}

		p {
			font-size: 1.1rem;
			line-height: 1.8rem;
			color: rgba(69, 86, 91, 0.7);
		}
	}

	@media ${breakpoint.device.lg} {
		.img {
			width: 45%;
		}

		.infos {
			width: 50%;
		}
	}

	@media ${breakpoint.device.md} {
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		height: auto;

		.infos {
			text-align: center;
			align-items: center;
		}
	}

	@media ${breakpoint.device.sm} {
		.img {
			width: 100%;
		}

		.infos {
			width: 100%;
		}
	}
`;
