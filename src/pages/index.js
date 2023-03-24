import Navbar from "@/components/Navbar";
import Homepage from "../components/Homepage";
import Head from "next/head";
import Stars from "../components/Stars";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>MM Portfolio</title>
				<meta name="description" content="This is my portfolio website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Stars />
			<Navbar />
			<main>
				<Homepage />
				<About />
				<Experience />
				<Projects />
				<Contact/>
			</main>
			<Footer />
		</>
	);
}
