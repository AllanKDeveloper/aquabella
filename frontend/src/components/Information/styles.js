import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	width: 100%;
	position: relative;

	.wrap {
		width: 100%;
		max-width: 1216px;
		margin: auto;
		display: flex;
		justify-content: flex-end;
		gap: 3rem;
		margin-top: -10rem;
		position: relative;
		z-index: 1;
	}

	.imgFolha {
		position: absolute;
		top: 0;
		left: 0;
	}

	@media ${breakpoint.device.md} {
		.wrap {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-top: 5rem;
		}
	}

	@media ${breakpoint.device.sm} {
		.imgFolha {
			width: 6rem;
			top: -10%;
		}
	}
`;
