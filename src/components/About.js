import { motion } from "framer-motion";
import { FaLaptopMedical, FaUniversity, FaLaptopCode } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { BiMicrochip } from "react-icons/bi";

const About = () => {
	return (
		<section className="about" id="about">
			<h2 className="about__heading">About Me</h2>
			<motion.div
				className="about__card"
				initial={{ opacity: 0, y: 70 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ delay: 0.3 }}
			>
				<p className="about__card-paragraph">
					My name is Mateusz and currently I work as{" "}
					<a href="https://mmcm.pl/" target="__blank" className="work-link">
						medical equipment service engineer
					</a>
					&nbsp;
					<FaLaptopMedical />. I do inspections and repairs of medical devices
					in hospitals. I also repair other electronics devices, especially
					laptops.
					<br />
					Additionally I had the opportunity to design a PCB and develop a
					program for a microcontroller to operate a touchless hand disinfection
					station.
				</p>
			</motion.div>
			<motion.div
				className="about__card"
				initial={{ opacity: 0, y: 70 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.75 }}
				transition={{ delay: 0.3 }}
			>
				<p className="about__card-paragraph">
					As for my educaton I studied at{" "}
					<a
						href="https://pollub.pl/en/"
						target="__blank"
						className="university-color"
					>
						Lublin University of Technology
					</a>{" "}
					<FaUniversity /> and obtained a master&#8242;s degree in Electrical
					Engineering <MdOutlineElectricBolt /> at the{" "}
					<a
						href="https://weii.pollub.pl/en/"
						target="__blank"
						className="faculty-color"
					>
						Faculty of Electrical Engineering and Computer Science
					</a>
					.<br />
					During my studies I was learning microcontrollers programming{" "}
					<BiMicrochip /> .<br />
					In my engineering thesis I developed an on-board car computer which
					reads engine work parameters from ECU and displays them on the screen.
				</p>
			</motion.div>
			<motion.div
				className="about__card"
				initial={{ opacity: 0, y: 70 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.75 }}
				transition={{ delay: 0.3 }}
			>
				<p className="about__card-paragraph">
					Since June 2021 I&#8242;m learning web development using
					<a href="https://www.w3schools.com/html/" target="__blank">
						<span className="html-color"> HTML</span>
					</a>
					,
					<a href="https://www.w3schools.com/css/" target="__blank">
						<span className="css-color"> CSS</span>
					</a>
					/
					<a href="https://sass-lang.com/" target="__blank">
						<span className="scss-color">SCSS</span>
					</a>
					,
					<a href="https://www.w3schools.com/js/" target="__blank">
						<span className="js-color"> JavaScript</span>
					</a>
					,
					<a href="https://react.dev/" target="__blank">
						<span className="react-color"> React</span>
					</a>
					,
					<a href="https://nextjs.org/" tagret="__blank">
						<span className="nextjs-color"> Next.js </span>
					</a>
					and
					<a href="https://nodejs.org/" target="__blank">
						<span className="nodejs-color"> Node.js</span>
					</a>
					. <br />
					Currently I&#8242;m seeking my first job as a frontend/fullstack or
					embedded developer <FaLaptopCode /> to enhance my programming skills
					by working on real-world projects.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
