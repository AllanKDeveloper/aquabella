import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Btn1 = styled.button`
	width: ${(props) => props.width || '10rem'};
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: ${(props) => props.border || '1.5px solid #00a2bc '};
	border-radius: 30px;
	text-decoration: none;
	color: ${(props) => props.color || '#00a2bc'};
	background: ${(props) => props.background || 'transparent'};
	font-size: 14px;
	font-weight: bold;
	transition: background 0.3s;
	cursor: pointer;

	&:hover {
		background: #00a2bc;
		color: #fff;
		border: none;
	}

	.selected {
		background: red;
		color: #00a2bc;
	}

	@media ${breakpoint.device.sm} {
		width: 12rem;
		height: 4rem;
	}
`;

export const Btn2 = styled.button`
	width: ${(props) => props.width || '10rem'};
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1.5px solid #00a2bc;
	border-radius: 30px;
	text-decoration: none;
	color: #fff;
	background: #00a2bc;
	font-size: 14px;
	font-weight: bold;
	transition: background 0.3s;
	cursor: pointer;

	.btn-mobile {
		width: 20rem;
	}

	&:hover {
		background: transparent;
		color: #00a2bc;
	}

	@media ${breakpoint.device.sm} {
		width: ${(props) => props.width || '12rem'};
		height: 4rem;
	}
`;
