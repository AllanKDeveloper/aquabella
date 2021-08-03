import styled from 'styled-components';

import breakpoint from '../_variables';

export const Container = styled.div`
	width: 100%;
	height: 180vh;
	background-image: url('/banner.jpg');
	background-repeat: no-repeat;
	background-size: 100% 80%;
	position: relative;

	.img {
		width: 100%;
		height: 30rem;
		background: url('image-preview.png') no-repeat;
		background-size: cover;

		margin-top: 5rem;

		position: relative;

		div {
			position: absolute;
			bottom: -1.75rem;
			left: 50%;
			transform: translateX(-50%);

			width: 60%;
			height: 3.5rem;
			background: #fff;

			display: flex;
			align-items: center;
			justify-content: center;

			border-radius: 10px;
			box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);

			span {
				color: rgba(69, 86, 91, 0.7);
				font-size: 1.1rem;
			}
		}
	}

	.wrap {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 0 auto;
	}

	.wrap2 {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 10rem auto 0 auto;

		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 5rem;

		main {
			display: flex;
			flex-direction: column;
			gap: 3.5rem;

			width: 57%;

			h1 {
				color: #38b4db;
			}

			p {
				color: rgba(69, 86, 91, 0.7);
				font-size: 1.1rem;
			}
		}

		.folha {
			width: 40%;
		}
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

	@media ${breakpoint.device.md} {
		.wrap2 {
			margin-top: 5rem;
			justify-content: center;

			main {
				width: 80%;
				text-align: center;
			}

			.folha {
				display: none;
			}
		}
	}

	@media ${breakpoint.device.ss} {
		header {
			.wrap > section {
				flex-direction: column;
				align-items: center;
				gap: 2rem;
			}
		}
	}

	@media ${breakpoint.device.sm} {
		.wrap section {
			margin-top: 1.5rem;

			.img-arrow {
				display: none;
			}
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1248px;
	margin: 0 auto;
	padding: 0 1rem 0 1rem;

	.content-box {
		display: flex;
		justify-content: flex-start;
		gap: 2rem;
		flex-wrap: wrap;
	}

	@media ${breakpoint.device.xl} {
		margin-top: 5rem;
	}

	@media ${breakpoint.device.md} {
		.content-box {
			justify-content: center;
		}
	}
`;

export const History = styled.div`
	width: 100%;
	max-width: 1248px;
	margin: 10rem auto 0 auto;
	padding: 0 1rem 0 1rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	h1 {
		color: #38b4db;
		font-size: 2.5rem;
		font-weight: bold;
	}

	section {
		display: flex;
		gap: 2rem;

		div {
			width: 17rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			aside {
				width: 50%;
			}

			p {
				color: rgba(69, 86, 91, 0.7);
				font-size: 1.1rem;

				margin-top: -3rem;
			}
		}
	}

	@media ${breakpoint.device.xl} {
		align-items: center;
		section {
			justify-content: center;
			flex-wrap: wrap;
		}
	}
`;
