import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
	const [open, setOpen] = useState(false); //hamburger state

	//change hamburger state (open/close) after click on one of menu links or on X icon.
	//for mobile devices with width less than 768px
	const handleMenuClick = () => {
		const navbar = document.querySelector(".nav");

		if (window.innerWidth < 768) {
			!open ? setOpen(true) : setOpen(false);
			!open
				? navbar.classList.add("active")
				: navbar.classList.remove("active");
		}
	};

	//handle nav behavior on window resize (eg. change orientation)
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return window.removeEventListener("resize", handleResize);
	});

	//closing menu after click outside of it
	useEffect(() => {
		if (open) {
			document.querySelector("main").addEventListener("click", () => {
				setOpen(false);
				document.querySelector(".nav").classList.remove("active");
			});
		}
	}, [open]);

	return (
		<nav className="nav">
			<ul
				onClick={handleMenuClick}
				className={`nav-menu ${open ? "open" : ""}`}
			>
				{/* navLinks comes from constants - simulates db */}
				{navLinks.map((link) => (
					<li key={link.id}>
						<Link href={link.href}>{link.title}</Link>
					</li>
				))}
			</ul>
			{/* hamburger */}
			<div
				className={`hamburger ${open ? "open" : ""}`}
				onClick={handleMenuClick}
			>
				<div className="hamburger__icon"></div>
			</div>
		</nav>
	);
};

export default Navbar;
