import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";
import { ReactComponent as Pick } from "@/assets/pick.svg";

/**
 * Content of section
 */

export const SectionContent = ({ data, alone }) => (
	<div
		className={`${alone ? "" : "col-12 col-md-6 mt-5 mt-md-0 "}section-content`}
	>
		{data.title && (
			<h2 className="section-content__title mb-3">{data.title.toUpperCase()}</h2>
		)}
		<SectionTitle>{data.subtitle}</SectionTitle>
		<p className="section-content__text mt-3">{data.text}</p>
		<p className="section-content__learn mt-3">
			<a className="link" href="#0" title="Learn more">
				Learn more <Arrow />
			</a>
		</p>
		<div className="pick">
			<Pick />
		</div>
	</div>
);
