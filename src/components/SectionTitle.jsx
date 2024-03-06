import React from "react";

/**
 * Title component for some of the page sections
 */

export const SectionTitle = ({ className, children }) => (
	<h3 className={`section-title${className ? " " + className : ""}`}>
		{children || (
			<>
				Please <span className="violet">give</span> a title
			</>
		)}
	</h3>
);
