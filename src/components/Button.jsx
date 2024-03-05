import React from "react";
import { buildClass } from "@/helpers/utils";

/**
 * Button component
 */

export const Button = ({ children, alt, link, title }) => {
	const computedClass = buildClass("button", [
		"btn",
		[link, "link"],
		[alt, "alt"],
	]);

	return (
		<button className={computedClass} title={title}>
			{children || "Click me"}
		</button>
	);
};
