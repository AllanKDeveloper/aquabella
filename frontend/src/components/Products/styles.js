import styled from 'styled-components';

import breakpoints from '../../_variables';

export const Container = styled.div`
	margin-top: 13rem;
	width: 100%;
	height: auto;

	header {
		width: 100%;
		max-width: 1216px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;

			span {
				color: #00a2bc;
				font-size: 1.5rem;
			}

			h1 {
				font-size: 2.5rem;
				color: rgba(69, 86, 91, 0.7);
				line-height: 3.25rem;
				font-weight: 600;
				padding-bottom: 1.6rem;
			}
		}
	}

	main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1216px;
		margin: 0 auto;
		flex-wrap: wrap;
		margin-top: 3.6rem;

		section {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;

			.box {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				width: 15rem;

				span {
					font-weight: 600;
					font-size: 2.5rem;
					line-height: 3.2rem;
					margin-bottom: 1.06rem;
					color: #38b4db;
				}

				p {
					font-size: 1rem;
					line-height: 1.3rem;
					color: rgba(69, 86, 91, 0.7);
					margin-bottom: 2.75rem;
				}
			}
		}
	}

	@media ${breakpoints.xl} {
		main {
			justify-content: center;
			gap: 5rem;
		}
	}

	@media ${breakpoints.device.sm} {
		main {
			section {
				flex-direction: column;

				.box {
					display: flex;
					align-items: center;
					text-align: center;
				}
			}
		}
	}
`;
