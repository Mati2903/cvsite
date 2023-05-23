import { SlScreenDesktop } from "react-icons/sl";
import { TbServerBolt } from "react-icons/tb";

const Homepage = () => {
	return (
		<section className="homepage">
			<div className="homepage__heading-container">
				<h1 className="heading">
					Hello &#128075;
					<br />
					I&#8242;m&nbsp;
					<span className="heading__name">Mateusz</span>
				</h1>
				<p className="paragraph">
					For over two years, I have been practicing web development, primarly
					focusing on{" "}
					<a className="link next" href="https://nextjs.org/" target="__blank">
						NEXT.js
					</a>{" "}
					and{" "}
					<a
						className="link react"
						href="https://pl.reactjs.org/"
						target="__blank"
					>
						React
					</a>
					.
				</p>
				<p className="paragraph">
					My goal is to become a full-stack developer <span>&#128187;</span>.
					<br />
					Currently I am focusing on frontend technologies.
					<br />
					Once I become proficient in frontend development, I plan to expand my
					skills to backend as well.
					<br />
					Additionaly, I have a keen interest in embedded/IoT devices, involving
					both design and programming.
				</p>
			</div>
		</section>
	);
};

export default Homepage;
