import styled from 'styled-components';

import breakpoint from '../_variables';

export const SectionMission = styled.div`
	width: 100%;
	height: 100vh;

	.wrap {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 6rem;

		header {
			display: flex;
			gap: 2rem;
			margin-top: -10rem;

			.fix {
				position: absolute;
				width: 100px;
				height: 12px;

				background: #38b4db;
				border-radius: 8px;
				top: -6px;
			}

			.box1 {
				width: 24rem;
				height: 22rem;
				border-radius: 2.5rem;
				box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
				background: #fff;

				display: flex;
				flex-direction: column;
				gap: 2.5rem;

				padding: 2.5rem 0 0 4rem;
				position: relative;

				section {
					width: 90%;
					display: flex;
					flex-direction: column;
					gap: 1.2rem;
				}

				h3 {
					color: #38b4db;
					font-weight: 600;
					font-size: 1.1rem;
					line-height: 1.4rem;
				}

				p {
					color: rgba(69, 86, 91, 0.7);
					font-size: 1.1rem;
					line-height: 1.8rem;
				}
			}

			.box2 {
				width: 50rem;
				height: 22rem;
				border-radius: 2.5rem;
				box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
				background: #fff;

				position: relative;

				padding: 2.5rem 0 0 4rem;

				display: flex;
				flex-direction: column;
				gap: 1.2rem;

				h3 {
					color: #38b4db;
				}

				ul {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					list-style: none;

					li {
						display: flex;
						align-items: center;
						gap: 1rem;

						font-size: 1.1rem;
						color: rgba(69, 86, 91, 0.7);

						&:before {
							content: '';
							display: inline-block;
							width: 8px;
							height: 8px;
							border-radius: 50%;
							background: #38b4db;
						}
					}
				}
			}
		}

		main {
			display: flex;
			justify-content: space-between;

			.infos {
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				margin-top: 5rem;

				h2 {
					font-size: 2.5rem;
					color: #38b4db;
					margin-top: 1.8rem;
				}

				p {
					color: rgba(69, 86, 91, 0.7);
					margin-top: 1.8rem;
					width: 25rem;
				}
				a {
					margin-top: 1rem;
				}
			}
		}
	}

	@media ${breakpoint.device.xl} {
		height: auto;
		.wrap {
			main {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 5rem;

				.infos {
					align-items: center;
					text-align: center;
				}
			}
		}
	}

	@media ${breakpoint.device.md} {
		.wrap {
			header {
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;

				.box1 {
					order: 2;
				}
			}
		}
	}

	@media ${breakpoint.device.sm} {
		.wrap {
			header {
				.fix {
					left: 50%;
					transform: translateX(-50%);
				}
				.box1 {
					padding-left: 2rem;
					padding-right: 1rem;
					padding-bottom: 2rem;
					height: auto;

					text-align: center;
				}

				.box2 {
					padding-left: 1rem;
					padding-bottom: 2rem;
					padding-right: 1rem;
					height: auto;
					align-items: center;
				}
			}
		}
	}

	@media ${breakpoint.device.ss} {
		.wrap {
			header {
				.box2 {
					ul {
						align-items: center;

						li:before {
							display: none;
						}
					}
				}
			}
		}
	}
`;
