const Homepage = () => {
	return (
		<section className="homepage">
			<div className="homepage__heading-container">
				<h1 className="heading">
					Hello &#128075;
					<br />
					I'm&nbsp;
					<span className="heading__name">Mateusz</span>
				</h1>
				<p className="paragraph">
					I practise web development from over a year, <br /> working mostly
					in&nbsp;
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
				</p>
			</div>
		</section>
	);
};

export default Homepage;
