import React from "react";
import { Logo } from "@/components/Logo";
import { Social } from "@/components/Social";
import { FooterList } from "@/components/FooterList";
import { WaitingFor } from "@/components/WaitingFor";
import { Copyright } from "@/components/Copyright";

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
		<div className="footer__list col-12 col-md" key={key}>
			<FooterList list={FOOTER[section]}>{section}</FooterList>
		</div>
	));

	return (
		<div className="footer container-fluid pt-0 pt-lg-5">
			<WaitingFor />
			<div className="container py-5">
				<div className="row d-flex flex-md-row flex-column">
					<div className="col px-5">
						<Logo />
						<div className="d-none d-md-block">
							<div className="mt-5">
								<Social />
							</div>
							<Copyright year="2021" />
						</div>
					</div>
					{computedSections}
					<div className="footer__bottom-social col-12 d-md-none">
						<div className="row d-flex justify-content-center">
							<div className="col-8 col-sm-6 col-md-12 mt-5">
								<Social />
							</div>
						</div>
						<Copyright year="2021" />
					</div>
				</div>
			</div>
		</div>
	);
};
