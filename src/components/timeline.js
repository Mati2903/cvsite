import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const Timeline = () => {
	const rgbColor = "rgb(26, 38, 57)";
	const contentStyle = {
		boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.2)",
		backgroundColor: "rgba(255, 255, 255, 0.15)",
		backdropFilter: "blur(3px)",
	};
	const contentArrowStyle = {
		borderRight: `10px solid #fff`,
	};
	const iconStyle = { background: rgbColor, color: "#fff" };
	return (
		<VerticalTimeline lineColor="rgba(255,255,255, 0.3)">
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={contentStyle}
				contentArrowStyle={contentArrowStyle}
				date="2011 - present"
				iconStyle={iconStyle}
				icon={<MdWork />}
			>
				<h3 className="vertical-timeline-element-title">Creative Director</h3>
				<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
				<p>
					Creative Direction, User Experience, Visual Design, Project
					Management, Team Leading
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={contentStyle}
				contentArrowStyle={contentArrowStyle}
				date="2011 - present"
				iconStyle={iconStyle}
				icon={<MdWork />}
			>
				<h3 className="vertical-timeline-element-title">Art Director</h3>
				<h4 className="vertical-timeline-element-subtitle">
					San Francisco, CA
				</h4>
				<p>
					Creative Direction, User Experience, Visual Design, SEO, Online
					Marketing
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={contentStyle}
				contentArrowStyle={contentArrowStyle}
				date="2011 - present"
				iconStyle={iconStyle}
				icon={<MdWork />}
			>
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>User Experience, Visual Design</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={contentStyle}
				contentArrowStyle={contentArrowStyle}
				date="2011 - present"
				iconStyle={iconStyle}
				icon={<MdSchool />}
			>
				<h3 className="vertical-timeline-element-title">
					Content Marketing for Web, Mobile and Social Media
				</h3>
				<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
				<p>Strategy, Social Media</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={contentStyle}
				contentArrowStyle={contentArrowStyle}
				date="2011 - present"
				iconStyle={iconStyle}
				icon={<MdSchool />}
			>
				<h3 className="vertical-timeline-element-title">
					Agile Development Scrum Master
				</h3>
				<h4 className="vertical-timeline-element-subtitle">Certification</h4>
				<p>Creative Direction, User Experience, Visual Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={contentStyle}
				contentArrowStyle={contentArrowStyle}
				date="2011 - present"
				iconStyle={iconStyle}
				icon={<MdSchool />}
			>
				<h3 className="vertical-timeline-element-title">
					Bachelor of Science in Interactive Digital Media Visual Imaging
				</h3>
				<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
				<p>Creative Direction, Visual Design</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};

export default Timeline;
