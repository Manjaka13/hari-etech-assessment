import React from "react";
import { SectionContent } from "@/components/SectionContent";

/**
 * A part of the body page
 */

export const Section = ({ id, data, top }) => {
	const computedClass = `row d-flex align-items-center justify-content-center${id % 2 !== 0 ? "  flex-row-reverse" : ""}`;
	const style = {
		background: `url(${top}) center center no-repeat`,
		backgroundSize: "contain",
	};

	return (
		<div className={`section bg-white pt-5${id === 2 ? " pb-5" : ""}`}>
			<div className="container">
				<div className={computedClass}>
					<SectionContent data={data} />
					<div className="col-12 col-md-6" style={style}>
						<img className="img-fluid" src={data.image} alt="Representation" />
					</div>
				</div>
			</div>
		</div>
	);
};
