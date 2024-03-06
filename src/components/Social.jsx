import React from "react";
import { SOCIAL_LINKS } from "@/helpers/const";

/**
 * Social component
 */

const computedSocial = SOCIAL_LINKS.map((social, key) => (
	<li className="col social__item" key={key}>
		<a className="social__link" href={social.link}>
			<social.icon />
		</a>
	</li>
));

export const Social = () => <ul className="social row">{computedSocial}</ul>;
