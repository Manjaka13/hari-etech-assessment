import React from "react";

/**
 * Title component for some of the page sections
 */

export const SectionTitle = ({ className, children }) => (
	<h2 className={`section-title${className ? " " + className : ""}`}>
		{children || (
			<>
				Please <span className="violet">give</span> a title
			</>
		)}
	</h2>
);
