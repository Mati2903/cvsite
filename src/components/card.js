import Tilt from "react-parallax-tilt";
import { projects } from "@/constants";

const Card = ({ id, link, title, description, image }) => {
	return (
		<Tilt className="tilt-card">
			<div
				className="tilt-card__image"
				onClick={() => {
					window.open(link, "__blank");
				}}
			>
				<img src={image} />
			</div>
			<div className="tilt-card__text-container">
				<h3 className="heading">{title}</h3>
				<p className="paragraph">{description}</p>
			</div>
		</Tilt>
	);
};

export default Card;
