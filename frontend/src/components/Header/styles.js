import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	width: 100%;
	height: 150vh;
	background-image: url('/banner.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: relative;

	.wrap {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 0 auto;
	}

	header {
		width: 100%;
		height: 30%;

		background-image: url('/banner-header.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;

		section {
			margin-top: 8.7rem;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;

			span {
				font-size: 0.8rem;
				line-height: 1.3rem;
				letter-spacing: 0.45em;
				color: #fff;
			}

			h1 {
				font-size: 4.5rem;
				line-height: 5.8rem;
				color: #fff;
			}
		}
	}

	main {
		width: 60%;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		gap: 4rem;

		h2 {
			font-size: 2.5rem;
			line-height: 3.2rem;
			color: #00a2bc;
		}

		div {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			p {
				color: rgba(69, 86, 91, 0.7);
			}
		}
	}

	.folha {
		position: absolute;
		bottom: 10%;
		right: 0%;
	}

	@media ${breakpoint.device.xl} {
		.wrap > main {
			width: 80%;
			height: 30rem;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		}

		.folha {
			width: 20rem;
		}
	}

	@media ${breakpoint.device.md} {
		.wrap > main {
			height: auto;
		}
		header section {
			margin-top: 5.7rem;
		}
		.folha {
			width: 15rem;
			bottom: 0;
		}
	}

	@media ${breakpoint.device.sm} {
		.folha {
			z-index: -1;
		}
		.wrap > section {
			flex-direction: column;
			align-items: center;

			.img {
				display: none;
			}

			h1 {
				font-size: 3.5rem;
			}
		}
	}
`;
