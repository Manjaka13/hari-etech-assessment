import React from "react";
import { ReactComponent as Instagram } from "@/assets/instagram.svg";
import { ReactComponent as Twitter } from "@/assets/twitter.svg";
import { ReactComponent as LinkedIn } from "@/assets/linkedin.svg";

/**
 * Social component
 */

const SOCIAL_LINKS = [
	{
		title: "Follow us on Instagram",
		link: "#0",
		icon: Instagram,
	},
	{
		title: "Get in touch on X (Twitter)",
		link: "#0",
		icon: Twitter,
	},
	{
		title: "Check our LinkedIn page",
		link: "#0",
		icon: LinkedIn,
	},
];

const computedSocial = SOCIAL_LINKS.map((social, key) => (
	<li className="col social__item" key={key}>
		<a className="social__link" href={social.link}>
			<social.icon />
		</a>
	</li>
));

export const Social = () => <ul className="social row">{computedSocial}</ul>;
