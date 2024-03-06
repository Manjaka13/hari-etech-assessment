import React from "react";
import { buildClass } from "@/helpers/utils";

/**
 * Button component
 */

export const Button = ({ children, className, alt, link, title, block }) => {
	const computedClass = buildClass("button", [
		"btn",
		[link, "link"],
		[alt, "alt"],
		[block, "block"],
		className,
	]);

	return (
		<button className={computedClass} title={title}>
			{children || "Click me"}
		</button>
	);
};
