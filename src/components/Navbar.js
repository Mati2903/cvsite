import { navLinks } from "../constants/index";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = (id) => {
		setActiveLink(id);
	};

	return (
		<nav className="navbar">
			<button className="navbar__toggle" onClick={handleToggle}>
				<FaBars />
			</button>
			<ul className={`navbar__links ${isOpen ? "open" : ""}`}>
				{navLinks.map((link) => (
					<li key={link.id}>
						<Link
							className={
								activeLink === link.id ? "navbar__link active" : "navbar__link"
							}
							href={`#${link.id}`}
							onClick={() => handleClick(link.id)}
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
