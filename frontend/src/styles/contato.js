import styled from 'styled-components';

import breakpoint from '../_variables';

export const Container = styled.div`
	width: 100%;
	height: auto;
	position: relative;

	.wrap {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 0 auto;
	}

	> header {
		width: 100%;

		background-image: url('/banner-contato.png');
		background-repeat: no-repeat;
		background-size: 100% 90%;

		position: relative;

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
		.folha {
			position: absolute;
			bottom: -30%;
			left: 0;
		}
	}

	iframe {
		width: 100%;
		height: 55rem;
		border: none;

		margin-top: -5rem;
	}
	@media ${breakpoint.device.sm} {
		.wrap section {
			justify-content: center;
			.img {
				display: none;
			}
		}
	}
`;

export const ContainerForm = styled.div`
	width: 100%;
	max-width: 1248px;
	margin: 5rem auto 0 auto;
	padding: 0 1rem 0 1rem;

	> span {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
	}

	> header {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;

		margin-top: 2rem;
		> a {
			display: inline-block;
		}
	}

	@media ${breakpoint.device.sm} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1248px;
	padding: 0 1rem 0 1rem;
	margin: 0 auto;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	section {
		height: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		.box1 {
			width: 20rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			p {
				font-size: 1.1rem;
				color: rgba(69, 86, 91, 0.7);
				font-weight: 600;
			}
		}

		.box2 {
			width: 20rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			p {
				font-size: 1.1rem;
				color: rgba(69, 86, 91, 0.7);
				font-weight: 600;
			}
		}

		.linha {
			height: 100%;
			border: 1px solid rgba(0, 0, 0, 0.2);
		}
	}

	.box-address {
		background: #00a2bc;
		width: 35rem;
		height: 10rem;
		border-radius: 30px;

		margin-top: 5rem;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;

		z-index: 1;

		.img {
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.address {
			width: 80%;
			p {
				color: #fff;
				font-size: 1rem;
			}
		}
	}

	@media ${breakpoint.device.sm} {
		margin-top: 10rem;

		section {
			.linha {
				display: none;
			}

			flex-direction: column;
			gap: 3rem;
		}
		.box-address {
			width: 90%;
			gap: 1rem;
			padding: 1rem 0 1rem;
		}
	}

	@media ${breakpoint.device.ss} {
		.box-address {
			flex-direction: column;
			text-align: center;
		}
	}
`;
