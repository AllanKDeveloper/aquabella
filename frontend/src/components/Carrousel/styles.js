import styled from 'styled-components';

import breakpoint from '../../_variables';

export const Container = styled.div`
	background: linear-gradient(180deg, #38b4db 0%, #83d1d8 100%);
	width: 100%;
	height: 44rem;
	position: relative;

	.swiper-container {
		position: absolute;
		top: -10rem;
		right: 0;
		width: 70%;
		height: 25rem;
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: #38b4db;
	}

	.swiper-slide {
		text-align: center;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 30px;
	}

	@media ${breakpoint.device.xl} {
		.swiper-container {
			width: 100%;
		}
	}

	@media ${breakpoint.device.md} {
		.swiper-container {
			top: -2rem;
			opacity: 0.9;
		}
	}

	@media ${breakpoint.device.sm} {
		.swiper-container {
			top: 2rem;
			width: 100%;
			left: 0;
			padding: 0 1rem 0 1rem;
		}
	}
`;
