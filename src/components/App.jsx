import React from "react";
import { Banner } from "@/components/Banner";
import { Brands } from "@/components/Brands";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Computer } from "@/components/Computer";
import Tablet from "@/assets/tablet.png";
import PeopleAlt from "@/assets/people-alt.png";
import People from "@/assets/people.png";

/**
 * React component entry point
 */

const SECTION_DATA = [
	{
		title: "credit card",
		subtitle: "Payment",
		"subtitle-alt": "Gets Easier",
		text:
			"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
		image: Tablet,
	},
	{
		title: "mobile transaction",
		subtitle: "Smart Mobile",
		"subtitle-alt": "Banking",
		text:
			"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
		image: PeopleAlt,
	},
	{
		title: "secure transaction",
		subtitle: "Safe Yours",
		"subtitle-alt": "Savings",
		text:
			"Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw",
		image: People,
	},
];

const computedSection = SECTION_DATA.map((s, key) => (
	<Section id={key} data={s} key={key} />
));

export const App = () => (
	<>
		<Banner />
		<Computer />
		<Brands />
		{computedSection}
		<Footer />
	</>
);
