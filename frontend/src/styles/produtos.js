import styled from 'styled-components';

import breakpoint from '../_variables';

export const Container = styled.div`
	width: 100%;
	height: 190vh;
	position: relative;

	.wrap {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 0 auto;
	}

	> header {
		width: 100%;
		height: 30%;

		background-image: url('/banner-header.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;

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

	@media ${breakpoint.device.xxl} {
		.folha {
			width: 20rem;
			z-index: 1;
		}
	}

	@media ${breakpoint.device.xl} {
		.folha {
			width: 20rem;
		}
	}

	@media ${breakpoint.device.md} {
		> header {
			section {
				margin-top: 5.7rem;
			}
		}
		.folha {
			display: none;
		}
	}

	@media ${breakpoint.device.sm} {
		.wrap section {
			display: flex;
			align-items: center;

			.img {
				display: none;
			}
		}
	}
`;

export const Content = styled.main`
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		margin-top: 3rem;

		> span {
			color: rgba(69, 86, 91, 0.7);
			font-size: 1.1rem;
			text-align: center;
		}

		> main {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 7rem;

			> header {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 7rem;
				width: 100%;

				#selected {
					opacity: 0.6;
				}

				.item {
					display: flex;
					align-items: center;
					gap: 1rem;
					max-width: 18rem;
					cursor: pointer;
					outline: none;
					border: none;
					background: #fff;

					p {
						color: #38b4db;
						font-size: 1.1rem;
						font-weight: 600;
					}

					p:nth-child(2) {
						font-size: 2.5rem;
					}
				}
			}
		}
	}

	@media ${breakpoint.device.sm} {
		header {
			flex-direction: column;
			gap: 2rem;
		}
	}
`;
