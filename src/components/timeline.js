import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
import { experience } from "../constants/index";

const Timeline = () => {
	const rgbColor = "rgb(26, 38, 57)";
	// const contentStyle = {
	// 	boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.2)",
	// 	backgroundColor: "rgba(255, 255, 255, 0.15)",
	// 	backdropFilter: "blur(3px)",
	// };
	const contentArrowStyle = {
		borderRight: `10px solid #fff`,
	};
	const iconStyle = { background: rgbColor, color: "#fff" };
	return (
		<VerticalTimeline lineColor="rgba(255,255,255, 0.3)">
			{experience.map((item) => (
				<VerticalTimelineElement
					key={item.id}
					className="vertical-timeline-element--work"
					// contentStyle={contentStyle}
					contentArrowStyle={contentArrowStyle}
					date={item.date}
					iconStyle={iconStyle}
					icon={item.type === "work" ? <MdWork /> : <MdSchool />}
				>
					<h3 className="vertical-timeline-element-title">{item.title}</h3>
					<h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
					<p className="vertical-timeline-element-paragraph">{item.tasks}</p>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
};

export default Timeline;
