import React from "react";
import { Banner } from "@/components/Banner";
import { Brands } from "@/components/Brands";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Computer } from "@/components/Computer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { CustomerSection } from "@/components/CustomerSection";
import { TeamSlider } from "@/components/TeamSlider";
import { SECTION_DATA, TOP_SECTION } from "@/helpers/const";
import ComputerImg1 from "@/assets/computer1.png";

/**
 * React component entry point
 */

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
		<div className="d-lg-none">
			<TeamSlider />
		</div>
		<Footer />
	</>
);
