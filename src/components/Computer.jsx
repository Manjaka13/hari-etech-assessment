import React from "react";
import Computer1 from "@/assets/computer1.png";
import Computer2 from "@/assets/computer2.png";

/**
 * Banner computers
 */

export const Computer = () => (
	<div className="computer container-fluid d-none d-lg-block">
		<div className="computer__container container">
			<img className="computer__computer1" src={Computer1} alt="Computer 1" />
			<img className="computer__computer2" src={Computer2} alt="Computer 2" />
		</div>
	</div>
);
