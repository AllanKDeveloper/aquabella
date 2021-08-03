import styled from 'styled-components';

import breakpoints from '../../_variables';

export const Container = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem 0 1rem;

	nav {
		display: flex;
		align-items: center;
		gap: 12rem;
	}

	ul {
		display: flex;
		list-style: none;
		gap: 3rem;

		.active {
			color: #00a2bc !important;
		}

		.linkHome {
			font-size: 14px;
			text-decoration: none;
			color: #fff;
			transition: color 3s;
			&:hover {
				color: #55838a;
			}
		}
		.link {
			font-size: 14px;
			text-decoration: none;
			color: #55838a;
			transition: color 3s;
			&:hover {
				color: #00a2bc;
			}
		}
	}

	@media ${breakpoints.device.xl} {
		width: 100%;
		margin: auto;
		gap: 3rem;

		nav {
			gap: 6rem;
		}

		div {
			gap: 4rem;
		}
	}

	@media ${breakpoints.device.md} {
		.btn-navbar {
			display: none;
		}

		ul {
			display: none;
		}
	}

	@media ${breakpoints.device.sm} {
		.img_home {
			width: 9rem;
		}
	}
`;
