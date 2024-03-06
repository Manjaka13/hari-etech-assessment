import React from "react";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";
import { ReactComponent as Pick } from "@/assets/pick.svg";

/**
 * Content of section
 */

export const SectionContent = ({ data, alone }) => (
	<div
		className={`${alone ? "" : "col-12 col-md-6 mt-5 mt-md-0 "}section-content`}
	>
		<h1 className="section-content__title">{data.title.toUpperCase()}</h1>
		<h2 className="section-content__subtitle">{data.subtitle}</h2>
		<h3 className="section-content__subtitle-alt">{data["subtitle-alt"]}</h3>
		<p className="section-content__text">{data.text}</p>
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
