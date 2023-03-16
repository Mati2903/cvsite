import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
	const router = useRouter();

	const [open, setOpen] = useState(false); //stan hamburgera

	//funkcja do obsługi klika w menu hamburger zmieniająca stan (a przez to klasę) dla urządzeń mobilnych / dodaje też linię na dole navbara po jego otwarciu
	const handleMenuClick = () => {
		const navbar = document.querySelector(".nav");

		if (window.innerWidth < 768) {
			console.log(router.asPath);
			!open ? setOpen(true) : setOpen(false);
			!open
				? navbar.classList.add("active")
				: navbar.classList.remove("active");
		}
	};

	//usuwanie klas w elementach po zrobieniu resize szerokości okna >= 768px - usuwa linię dzielącą menu i obraca logo do pozycji poziomej
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);

				document.querySelector(".nav").classList.remove("active");
			}
		};
		window.addEventListener("resize", handleResize);
	});

	//usuwanie klas open (zamykanie menu) po kliknięciu na stronie poza navbarem
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
						<Link
							href={link.href}
							//check which element was clicked based on href value and add active class to clicked link
							className={router.asPath == link.href ? "active" : ""}
						>
							{link.title}
						</Link>
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
