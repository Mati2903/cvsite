import { motion } from "framer-motion";

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
					. I do inspections and repairs of medical devices in hospitals. I also
					repair other electronics devices, especially laptops.
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
					and obtained a master's degree in Electrical Engineering at the{" "}
					<a
						href="https://weii.pollub.pl/en/"
						target="__blank"
						className="faculty-color"
					>
						Faculty of Electrical Engineering and Computer Science
					</a>
					.<br />
					During my studies I was learning microcontrollers programming. In my
					engineering thesis I developed an on-board car computer which reads
					engine work parameters from ECU and displays them on the screen.
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
					Since June 2021 I'm learning web development using
					<span className="html-color"> HTML</span>,
					<span className="css-color"> CSS</span>/
					<span className="scss-color">SCSS</span>,
					<span className="js-color"> JavaScript</span>,
					<span className="react-color"> React</span>,
					<span className="nextjs-color"> Next.js </span>and
					<span className="nodejs-color"> Node.js</span>. <br />
					Currently I'm looking for my first job as a frontend/fullstack
					developer to improve programming skills working on real-world
					projects.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
