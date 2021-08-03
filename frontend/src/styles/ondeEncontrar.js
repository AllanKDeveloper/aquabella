import styled from 'styled-components';

import breakpoints from '../_variables';

export const Container = styled.div`
	width: 100%;
	height: 180vh;
	background-image: url('banner.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: relative;

	#select-other-countries,
	#select-countries {
		background: #ffffff;
		box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
	}

	#react-select__value-container {
		color: blue;
	}

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

	.wrap2 {
		max-width: 1248px;
		padding: 0 1rem 0 1rem;
		margin: 10rem auto 0 auto;

		> p {
			margin-bottom: 2.5rem;
			color: rgba(69, 86, 91, 0.7);
			font-size: 1.1rem;
		}

		main {
			display: flex;
			justify-content: space-between;

			.section-infos {
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;

				margin-top: 5rem;

				span {
					color: #38b4db;
					font-weight: 600;
					font-size: 1.1rem;
					line-height: 1.4rem;
				}

				.representantes {
					margin-top: 4rem;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 1rem;

					h3 {
						color: #38b4db;
					}

					p {
						font-size: 1.1rem;
						color: rgba(69, 86, 91, 0.7);
					}
				}
			}
		}

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
				width: 30rem;
			}
			a {
				margin-top: 1rem;
			}
		}
	}

	.section-map {
		width: 100%;
		height: auto;

		svg {
			.selected,
			path:hover {
				fill: #0bb5df !important;
			}
		}
	}

	.st0 {
		fill-rule: evenodd;
		clip-rule: evenodd;
		fill: #e1dcdc;
		stroke: #ffffff;
		stroke-width: 0.9999;
		stroke-miterlimit: 22.9256;
	}
	.st1 {
		fill: #e1dcdc;
	}
	.st2 {
		fill: #e1dcdc;
		stroke: #ffffff;
		stroke-miterlimit: 10;
	}

	.representatives {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media ${breakpoints.device.xxl} {
		height: 140vh;
	}

	@media ${breakpoints.device.xl} {
		background-size: 100% 100%;
		height: 130vh;
		.wrap2 {
			.infos {
				align-items: center;
				text-align: center;
			}
		}
	}

	@media ${breakpoints.device.md} {
		header {
			.wrap {
				section {
					h1 {
						font-size: 3.5rem;
					}
				}
			}
		}
		.wrap2 main {
			flex-direction: column;
			align-items: center;
		}
	}

	@media ${breakpoints.device.sm} {
		.wrap {
			section {
				flex-direction: column;
				align-items: center;

				.img {
					display: none;
				}
			}
		}

		.wrap2 {
			> p {
				text-align: center;
			}
			main {
				.section-infos {
					align-items: center;
				}

				flex-direction: column;
				align-items: center;
				gap: 3rem;
			}
		}
	}

	@media ${breakpoints.device.ss} {
		.wrap {
			section {
				div > h1 {
					font-size: 2.5rem;
				}
			}
		}

		.wrap2 {
			.infos {
				p {
					max-width: 80%;
				}
			}
		}
	}
`;
