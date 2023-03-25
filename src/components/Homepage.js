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
					I practise web development from over a year working mostly in{" "}
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
					My goal is to become a fullstack developer <span>&#128187;</span>. For
					now I am focusing on frontend technologies.
					<br />
					When I will be proficient in frontend, I would like to learn backend
					as well.
				</p>
			</div>
		</section>
	);
};

export default Homepage;
