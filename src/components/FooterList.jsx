import React from "react";

/**
 * Footer element list
 */

export const FooterList = ({ list, children }) => {
	const computedList = list.map((e, key) => (
		<li className="footer-list__element mb-3" key={key}>
			<a className="footer-list__link" href="#0" title={e}>
				{e}
			</a>
		</li>
	));

	return (
		<div className="footer-list pt-4">
			<p className="footer-list__title text-white mb-5">{children || "Unknown"}</p>
			<ul className="footer-list__list">{computedList}</ul>
		</div>
	);
};
