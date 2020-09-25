import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebaraData';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	return (
		<div className="navbar">
			<Link to="/" className="menu-bars">
				<FaIcons.FaBars onClick={() => setSidebar(true)} />
			</Link>

			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={() => setSidebar(false)}>
					<li className="navbar-toggle">
						<Link>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => (
						<li className={item.cName}>
							<Link to={item.path}>
								<span>{item.icons}</span> {item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
