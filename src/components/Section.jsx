import React from "react";
import { SectionContent } from "@/components/SectionContent";

/**
 * A part of the body page
 */

export const Section = ({ id, data }) => {
	const computedClass = `row d-flex align-items-center justify-content-center${id % 2 !== 0 ? " flex-row-reverse" : ""}`;

	return (
		<div className={`section bg-white${id === 2 ? " pt-5" : ""}`}>
			<div className="container">
				<div className={computedClass}>
					<SectionContent data={data} />
					<div className="col-5 section__image">
						<img className="img-fluid" src={data.image} alt="Representation" />
					</div>
				</div>
			</div>
		</div>
	);
};
