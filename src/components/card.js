import Tilt from "react-parallax-tilt";
import { projects } from "@/constants";
import { BsGithub } from "react-icons/bs";

const Card = ({ id, link, title, description, image, ghcode }) => {
	return (
		<Tilt
			className="tilt-card"
			glareEnable={true}
			glareBorderRadius="1rem"
			glarePosition="all"
			glareMaxOpacity={0.3}
			glareColor="#ffffff"
			perspective={2000}
			transitionSpeed={1000}
		>
			<div
				className="tilt-card__image"
				onClick={() => {
					window.open(link, "__blank");
				}}
			>
				<div className="banner">Click to see live demo</div>
				<img src={image} />
			</div>
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
		</Tilt>
	);
};

export default Card;
