import React from "react";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";
import { ReactComponent as Pick } from "@/assets/pick.svg";

/**
 * A part of the body page
 */

export const Section = ({ id, data }) => {
	const computedClass = `row d-flex align-items-center justify-content-center${id % 2 !== 0 ? " flex-row-reverse" : ""}`;

	return (
		<div className={`section bg-white${id === 2 ? " pt-5" : ""}`}>
			<div className="container">
				<div className={computedClass}>
					<div className="col-4 section__content">
						<h1 className="section__title">{data.title.toUpperCase()}</h1>
						<h2 className="section__subtitle">{data.subtitle}</h2>
						<h3 className="section__subtitle-alt">{data["subtitle-alt"]}</h3>
						<p className="section__text">{data.text}</p>
						<p className="section__learn mt-3">
							<a className="link" href="#0" title="Learn more">
								Learn more <Arrow />
							</a>
						</p>
						<div className="pick">
							<Pick />
						</div>
					</div>
					<div className="col-5 section__image">
						<img className="img-fluid" src={data.image} alt="Representation" />
					</div>
				</div>
			</div>
		</div>
	);
};
