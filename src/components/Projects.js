import Card from "./card";
import { projects } from "@/constants";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h2 className="projects__heading">My Projects</h2>
			<div className="projects__cards">
				{projects.map((project, id) => (
					<Card key={id} {...project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
