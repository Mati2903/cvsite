import Tilt from "react-parallax-tilt";
import { projects } from "@/constants";
import { BsGithub } from "react-icons/bs";

const Card = ({ id, link, title, description, image, ghcode }) => {
	return (
		<div className="tilt-card">
			<Tilt
				glareEnable={true}
				glareBorderRadius="1rem"
				glarePosition="bottom"
				glareMaxOpacity={0.4}
				glareColor="#ffffff"
				perspective={1000}
				transitionSpeed={1000}
				tiltMaxAngleX={15}
				tiltMaxAngleY={10}
			>
				<a className="tilt-card__image" href={link} target="__blank">
					<div className="banner">Click to see live demo</div>
					<img src={image} />
				</a>
			</Tilt>
			<div className="tilt-card__text-container">
				<h3 className="heading">{title}</h3>
				<p className="paragraph">{description}</p>
			</div>
			<div className="tilt-card__github-code">
				Code:
				<a href={ghcode} target="__blank">
					<BsGithub />
				</a>
			</div>
		</div>
	);
};

export default Card;
