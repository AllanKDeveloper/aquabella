import styled, { keyframes } from 'styled-components';

import breakpoint from '../../_variables';

const floating = keyframes`
  0% {
      transform: translateY(0px);
  }
  50% {
      transform: translateY(-15px);
  }
  100% {
      transform: translateY(0px);
  }
`;

export const Container = styled.div`
	width: 100%;
	height: 115vh;
	background: url('/banner.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: relative;

	.divFolha {
		position: absolute;
		right: 0;
		top: 100px;
	}

	.wrap {
		max-width: 1216px;
		margin: auto;
	}

	main {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;

		.esq {
			width: 40%;
			padding: 10rem 0 0 1rem;
			display: flex;
			flex-direction: column;
			z-index: 1;

			h1 {
				color: #38b4db;
				font-size: 4.5rem;
				line-height: 5.8rem;
			}
			.section-buttons {
				display: flex;
				gap: 1rem;
				padding-top: 2.3rem;
			}
			.text {
				margin-top: 2.5rem;
				width: 60%;

				p {
					color: rgba(69, 86, 91, 0.7);
				}
			}
		}
		.dir {
			width: 41rem;
			animation: ${floating} 6s ease-in-out infinite;
		}
	}

	@media ${breakpoint.device.xl} {
		main {
			.dir {
				width: 35rem;
				padding-right: 1rem;
			}
		}
	}

	@media ${breakpoint.device.md} {
		height: auto;
		background-size: 100% 70%;
		main {
			justify-content: center;
			text-align: center;
			.esq {
				width: 60%;
				padding-top: 5rem;
				align-items: center;

				.text {
					width: 100%;
				}
			}
		}
	}

	@media ${breakpoint.device.sm} {
		main {
			.esq {
				width: 80%;

				.section-buttons {
					order: 3;
					margin-bottom: 2rem;
				}

				h1 {
					font-size: 3.5rem;
				}
			}
		}
	}
`;
