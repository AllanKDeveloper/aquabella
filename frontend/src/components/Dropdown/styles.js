import styled from 'styled-components';

export const Container = styled.div`
	background: #fff;
	width: 13rem;
	height: auto;
	position: absolute;
	top: 2rem;
	left: -5rem;
	border-radius: 30px;
	z-index: 1;

	.polygon {
		position: absolute;
		top: -10px;
		left: 50%;
		transform: translateX(-50%);
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem !important;
		padding: 1rem;

		li > a {
			color: #55838a;
		}
	}
`;
