import React from "react";
import { Logo } from "./Logo";

/**
 * React component entry point
 */

export const App = () => (
	<div className="container">
		<div className="row py-3">
			<div className="col">
				<Logo />
			</div>
		</div>
	</div>
);
