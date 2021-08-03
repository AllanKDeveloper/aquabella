import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 5rem;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;

		input {
			width: 35rem;
			height: 3.5rem;
			border-radius: 10px;
			border: none;

			padding-left: 2rem;

			background: #ffffff;
			box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
			outline: none;

			&:focus {
				border: 1.5px solid #00a2bc;
			}
		}

		.selected {
			border: 2px solid red !important;
		}

		textarea {
			width: 35rem;
			height: 16rem;
			border-radius: 10px;
			border: none;

			padding: 1rem 0 0 2rem;

			background: #ffffff;
			box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);

			resize: none;
			outline: none;

			&:focus {
				border: 1.5px solid #00a2bc;
			}
		}

		input[type='submit'] {
			cursor: pointer;
			width: 10rem;
			border-radius: 30px;
			background: #00a2bc;
			color: #fff;
			font-size: 0.8rem;
			font-weight: 600;
			padding: 0;
		}

		input[type='message'] {
			display: flex;
			height: 20rem;
		}

		p {
			display: inline-block;
			color: red;
		}
	}

	@media ${breakpoint.device.sm} {
		form {
			width: 100%;
			input,
			textarea {
				width: 25rem;
			}
		}
	}

	@media ${breakpoint.device.ss} {
		form {
			input,
			textarea {
				width: 100%;
			}
		}
	}
`;
