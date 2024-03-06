import React from "react";
import { Banner } from "@/components/Banner";
import { Brands } from "@/components/Brands";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Computer } from "@/components/Computer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { CustomerSection } from "@/components/CustomerSection";
import Tablet from "@/assets/tablet.png";
import PeopleAlt from "@/assets/people-alt.png";
import People from "@/assets/people.png";
import ComputerImg1 from "@/assets/computer1.png";
import ComputerImg2 from "@/assets/computer2.png";

/**
 * React component entry point
 */

const SECTION_DATA = [
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

const TOP_SECTION = {
	subtitle: (
		<>
			Make & Share <span className="violet">Payments</span> With Community
		</>
	),
	text:
		"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
	image: ComputerImg2,
};

const computedSection = SECTION_DATA.map((s, key) => (
	<Section id={key} data={s} key={key} />
));

export const App = () => (
	<>
		<Navbar />
		<Banner />
		<Computer />
		<About />
		<div className="d-none d-lg-block">
			<Brands />
		</div>
		<div className="d-lg-none">
			<Section data={TOP_SECTION} top={ComputerImg1} />
		</div>
		{computedSection}
		<CustomerSection />
		<Footer />
	</>
);
