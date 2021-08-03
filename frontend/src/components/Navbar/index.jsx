/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useRouter } from 'next/router';

import { Container } from './styles';
import Logo from '../../assets/navbar/logo.svg';
import logoWhite from '../../assets/footer/logo-white.svg';
import { Button } from '../Button';
import navbarData from '../../utils/navbar/navbar.data';
import { Dropdown } from '../Dropdown';
import MobileMenu from '../MobileMenu/Navbar';

export function Navbar(props) {
	const router = useRouter();
	const [drop, setDrop] = useState(false);

	const onMouseEnter = () => {
		setDrop(true);
	};

	const onMouseLeave = () => {
		setDrop(false);
	};

	return (
		<>
			<Container>
				<nav>
					<div className="img_home">
						<Link href="/">
							<a>
								<Image src={props.info === 'true' ? logoWhite : Logo} />
							</a>
						</Link>
					</div>

					<ul>
						{navbarData.map(({ path, label, dropdown }) =>
							dropdown === true ? (
								<span
									key={path}
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
									style={{ position: 'relative' }}
								>
									<Link href={path}>
										<a
											className={`${
												props.info === 'true' ? 'linkHome' : 'link'
											} ${router.asPath === path ? 'active' : ''}`}
										>
											{label}
										</a>
									</Link>
									{drop && <Dropdown />}
								</span>
							) : (
								<li key={path}>
									<Link href={path}>
										<a
											className={`${
												props.info === 'true' ? 'linkHome' : 'link'
											} ${router.asPath === path ? 'active' : ''}`}
										>
											{label}
										</a>
									</Link>
								</li>
							)
						)}
					</ul>
				</nav>

				<Link href="/contato#distributor">
					<a className="btn-navbar">
						<Button
							title="Seja distribuidor"
							border={props.info === 'true' ? 'none' : ''}
							background={props.info === 'true' ? '#fff' : ''}
							color="#00a2bc"
						/>
					</a>
				</Link>

				<MobileMenu />
			</Container>
		</>
	);
}
