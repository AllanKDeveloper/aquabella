import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	display: none;
	z-index: 10;

	.navbar {
		display: flex;
		justify-content: start;
		align-items: center;
		cursor: pointer;
	}

	.nav-menu {
		background-color: #00a2bc;
		width: 250px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: fixed;
		top: 0;
		right: -100%;
		transition: 850ms;
	}

	.nav-menu.active {
		right: 0;
		transition: 350ms;
	}

	.nav-text {
		display: flex;
		justify-content: start;
		align-items: center;
		padding: 8px 0px 8px 16px;
		list-style: none;
		height: 60px;
	}

	.nav-text a {
		text-decoration: none;
		color: #e2e2e2;
		font-size: 1.1rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		padding: 0;
	}

	.nav-text a:hover {
		background-color: #1a83ff;
	}

	.nav-menu-items {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.navbar-toggle {
		color: #e2e2e2;
		width: 15px;
		display: flex;
		justify-content: start;
		align-items: center;
		margin-left: 1rem;
		gap: 1rem;
		cursor: pointer;
	}

	span {
		margin-left: 16px;
	}

	@media ${breakpoint.device.md} {
		display: block;
	}
`;
