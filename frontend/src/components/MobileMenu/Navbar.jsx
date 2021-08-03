/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';
// import { AiOutlineArrowDown } from 'react-icons/ai';
import { Container } from './styles';
import imgBars from '../../assets/bars.svg';
import items from '../../utils/navbar/navbar.data';
// import itemsDropdown from '../../utils/navbar/dropdown.data';

export function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<Container>
				<div className="navbar">
					<Image src={imgBars} width={20} height={20} onClick={showSidebar} />
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<div className="navbar-toggle">
						<AiIcons.AiOutlineClose onClick={showSidebar} />
					</div>
					<ul className="nav-menu-items" onClick={showSidebar}>
						{items.map((item) =>
							item.dropdown === true ? (
								<li key={item.path} className="nav-text">
									<Link href={item.path}>
										<a>{item.label}</a>
									</Link>
									{/* <AiOutlineArrowDown />
									{itemsDropdown.map((value) => (
										<Link key={value.id} href={value.path}>
											<a>{value.label}</a>
										</Link>
									))} */}
								</li>
							) : (
								<li key={item.path} className="nav-text">
									<Link href={item.path}>
										<a>{item.label}</a>
									</Link>
								</li>
							)
						)}
					</ul>
				</nav>
			</Container>
		</>
	);
}

export default Navbar;
