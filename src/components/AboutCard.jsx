import React from "react";

/**
 * About item card
 */

export const AboutCard = ({ Icon, title, children }) => (
	<div className="about-card rounded d-flex bg-white overflow-hidden">
		<div className="about-card__line"></div>
		<div className="d-flex justify-content-center align-items-center">
			<div className="px-5">
				<Icon />
				<h2 className="about-card__title mt-2">{title}</h2>
				<p className="about-card__text mt-2">{children}</p>
			</div>
		</div>
	</div>
);
