import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//animation options
const options = {
	particles: {
		number: {
			value: 400,
			density: {
				enable: false,
				value_area: 1000,
			},
		},
		rotate: {
			value: 360,
			random: true,
			anim: {
				enable: true,
				speed: 10,
			},
		},
		color: {
			value: "#fff",
		},
		shape: {
			type: "star",
			stroke: {
				width: 0.05,
				color: "#fff",
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: "",
				width: 10,
				height: 10,
			},
		},
		opacity: {
			value: 0.9,
			random: true,
			anim: {
				enable: true,
				speed: 1.7,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 0.5,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 200,
			color: "#ffffff",
			opacity: 0.4967471076499059,
			width: 0.6409640098708463,
		},
		move: {
			enable: true,
			speed: 0.2,
			direction: "left",
			random: true,
			straight: true,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 1000,
				rotateY: 1000,
			},
		},
	},
	interactivity: {
		detect_on: "window",
		events: {
			onHover: {
				enable: true,
				mode: "bubble",
			},
			onClick: {
				enable: true,
				mode: "repulse",
			},
			resize: true,
		},
		modes: {
			// grab: {
			// 	distance: 150,
			// 	line_linked: {
			// 		opacity: 0.3,
			// 	},
			// },
			bubble: {
				distance: 75,
				size: 8,
				duration: 2,
				opacity: 0,
				speed: 1,
			},
			repulse: {
				distance: 100,
				duration: 1,
			},
			// push: {
			// 	particles_nb: 1,
			// },
			// remove: {
			// 	particles_nb: 2,
			// },
		},
	},
	retina_detect: true,
};

const Stars = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<div>
			<Particles init={particlesInit} options={options} />
		</div>
	);
};

export default Stars;
