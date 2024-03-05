import React from "react";
import { Logo } from "@/components/Logo";
import { Social } from "@/components/Social";
import { FooterList } from "@/components/FooterList";

/**
 * Page footer
 */

const FOOTER = {
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

export const Footer = () => {
	const sections = Object.keys(FOOTER);
	const computedSections = sections.map((section, key) => (
		<div className="col" key={key}>
			<FooterList list={FOOTER[section]}>{section}</FooterList>
		</div>
	));

	return (
		<div className="footer container-fluid">
			<div className="container py-5">
				<div className="row">
					<div className="col">
						<Logo />
						<div className="mt-5">
							<Social />
						</div>
						<p className="footer__copyright mt-5">
							© Copy Right 2021. All rights reserved
						</p>
					</div>
					{computedSections}
				</div>
			</div>
		</div>
	);
};
