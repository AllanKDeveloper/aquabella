import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.footer`
	width: 100%;
	background: url('/banner-footer.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	margin-top: ${(props) => props.margin || '10rem'};
	padding-top: 15rem;

	position: relative;

	.line {
		display: flex;
		justify-content: center;
	}

	.wrap {
		max-width: 1216px;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		padding: 0 1rem 0 1rem;

		.divFolha {
			position: absolute;
			right: 0;
			top: -20%;
		}

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 5rem;
			margin-bottom: 5rem;
			flex-wrap: wrap;

			.img-logo {
				width: 13rem;
				height: 7rem;
			}

			aside {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 5rem;
				flex-wrap: wrap;
				margin: auto;
			}

			div:nth-child(2) {
				width: 19rem;
				height: 7.5rem;
				display: flex;
				flex-direction: column;
				gap: 0.7rem;
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 0.7rem;
				color: #fff;
				font-size: 0.9rem;
				line-height: 1.3rem;
			}
		}
		.list {
			width: 100%;
			margin-top: 5rem;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			flex-wrap: wrap;

			.div-dl {
				width: 70%;
				display: flex;
				justify-content: space-between;

				dl dt {
					font-size: 0.9rem;
					font-weight: 600;

					a {
						color: #fff;
					}
				}
				dl dd {
					font-size: 0.8rem;
					font-weight: 400;
					margin-top: 1.5rem;

					a {
						color: #fff;
						opacity: 0.6;

						&:hover {
							opacity: 1;
							transition: opacity 0.3s;
						}
					}
				}
			}

			.sociais {
				display: flex;
				gap: 1.3rem;
				cursor: pointer;

				.hover__sociais {
					&:hover {
						transform: translate3d(0, -2px, 0);
						transition: 0.3s ease;
					}
				}
			}
		}

		.imgMacaw {
			display: flex;
			justify-content: center;
			padding: 5rem 0 5rem 0;

			.macaw {
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.02);
				}
			}
		}
	}

	@media ${breakpoint.device.xxl} {
		.wrap {
			.divFolha {
				position: absolute;
				right: 0;
				top: -10%;
				width: 20rem;
			}
		}
	}

	@media ${breakpoint.device.xl} {
		background-position: center;
		background-size: 130% 100%;

		.wrap {
			.divFolha {
				width: 15rem;
				top: 0;
			}

			.header {
				.img-logo {
					width: 10rem;
				}

				aside {
					gap: 2rem;
				}
			}

			.list {
				gap: 2rem;
			}
		}
	}

	@media ${breakpoint.device.md} {
		background-size: 180% 100%;
		.wrap {
			.header {
				aside {
					flex-direction: column;

					div {
						align-items: center;
						text-align: center;
					}
				}
			}

			.line {
				display: none;
			}

			.list {
				flex-direction: column;
				align-items: center;

				.div-dl {
					width: 100%;
					flex-direction: column;
					align-items: center;
					gap: 2rem;
					text-align: center;
				}
			}
		}
	}

	@media ${breakpoint.device.sm} {
		.wrap {
			.divFolha {
				width: 10rem;
				top: 0;
			}

			.list {
				margin-top: 0;
			}
		}
	}
`;
