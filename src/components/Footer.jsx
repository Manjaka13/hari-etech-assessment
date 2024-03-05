import React from "react";
import { Logo } from "@/components/Logo";
import { Social } from "@/components/Social";

/**
 * Page footer
 */

export const Footer = () => (
	<div className="footer container-fluid">
		<div className="container py-5">
			<div className="row">
				<div className="col">
					<Logo />
					<Social />
				</div>
				<div className="col">B</div>
				<div className="col">C</div>
				<div className="col">D</div>
			</div>
		</div>
	</div>
);
