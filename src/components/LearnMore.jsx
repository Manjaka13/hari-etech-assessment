import React from "react";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";

/**
 * Learn more component
 */

export const LearnMore = ({ link = "#0", title, children }) => (
	<p className="learn-more mt-3">
		<a className="link" href={link} title={title || "Learn more"}>
			{children || "Learn more"} <Arrow />
		</a>
	</p>
);
