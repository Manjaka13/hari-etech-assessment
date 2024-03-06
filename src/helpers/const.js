import AvatarImage1 from "@/assets/avatar1.png";
import AvatarImage2 from "@/assets/avatar2.png";
import AvatarImage3 from "@/assets/avatar3.png";
import AvatarImage4 from "@/assets/avatar4.png";
import AvatarImage5 from "@/assets/avatar5.png";
import Tablet from "@/assets/tablet.png";
import PeopleAlt from "@/assets/people-alt.png";
import People from "@/assets/people.png";
import ComputerImg2 from "@/assets/computer2.png";
import { ReactComponent as LandRover } from "@/assets/landrover.svg";
import { ReactComponent as Avengers } from "@/assets/avengers.svg";
import { ReactComponent as Etsy } from "@/assets/etsy.svg";
import { ReactComponent as Linkedin } from "@/assets/linkedin.svg";
import { ReactComponent as Tiktok } from "@/assets/tiktok.svg";
import { ReactComponent as Instagram } from "@/assets/instagram.svg";
import { ReactComponent as Twitter } from "@/assets/twitter.svg";
import { ReactComponent as LinkedIn } from "@/assets/linkedin.svg";

/**
 * Holds our data
 */

export const TEAM_LIST = [
	{
		image: AvatarImage1,
		size: 132,
		name: "Leo Maynus",
		position: "CEO at Softpanda",
	},
	{
		image: AvatarImage2,
		size: 106,
		name: "Lucas Pope",
		position: "CTO at Omicur",
	},
	{
		image: AvatarImage3,
		size: 80,
		name: "Judith Thau",
		position: "HR at OpenAI",
	},
	{
		image: AvatarImage4,
		size: 95,
		name: "Lea Dilalo",
		position: "Lead at Hager",
	},
	{
		image: AvatarImage5,
		size: 70,
		name: "Sandra Mez",
		position: "CEO at IconiX",
	},
];

export const SECTION_DATA = [
	{
		title: "credit card",
		subtitle: (
			<>
				Payment
				<br />
				<span className="violet">Gets Easier</span>
			</>
		),
		text:
			"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
		image: Tablet,
	},
	{
		title: "mobile transaction",
		subtitle: (
			<>
				Smart Mobile
				<br />
				<span className="violet">Banking</span>
			</>
		),
		text:
			"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
		image: PeopleAlt,
	},
	{
		title: "secure transaction",
		subtitle: (
			<>
				Safe yours
				<br />
				<span className="violet">Savings</span>
			</>
		),
		text:
			"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
		image: People,
	},
];

export const TOP_SECTION = {
	subtitle: (
		<>
			Make & Share <span className="violet">Payments</span> With Community
		</>
	),
	text:
		"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
	image: ComputerImg2,
};

export const BRANDS = [
	{
		name: "Land Rover",
		icon: LandRover,
	},
	{
		name: "Avengers",
		icon: Avengers,
	},
	{
		name: "Etsy",
		icon: Etsy,
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
	},
	{
		name: "Tiktok",
		icon: Tiktok,
	},
];

export const FOOTER = {
	Services: [
		"Design",
		"Coding",
		"Development",
		"Marketing",
		"Digital Marketing",
		"Product Design",
	],
	Product: [
		"Hotel Management",
		"Rent Management",
		"Micro-Finance",
		"Industry",
		"Dhoko",
	],
	Company: ["Las Vegas", "New York", "Tokyo", "Paris"],
};

export const NAVBAR_LIST = [
	{
		name: "Products",
		title: "Check out our latest products",
		link: "#0",
	},
	{
		name: "Developers",
		title: "Get in touch with our developers",
		link: "#0",
	},
	{
		name: "Company",
		title: "Know about our policies",
		link: "#0",
	},
	{
		name: "Pricing",
		title: "Check our pricing table",
		link: "#0",
	},
];

export const SOCIAL_LINKS = [
	{
		title: "Follow us on Instagram",
		link: "#0",
		icon: Instagram,
	},
	{
		title: "Get in touch on X (Twitter)",
		link: "#0",
		icon: Twitter,
	},
	{
		title: "Check our LinkedIn page",
		link: "#0",
		icon: LinkedIn,
	},
];
