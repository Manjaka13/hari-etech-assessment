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
					<div className="mt-5">
						<Social />
					</div>
					<p className="footer__copyright mt-5">
						© Copy Right 2021. All rights reserved
					</p>
				</div>
				<div className="col">B</div>
				<div className="col">C</div>
				<div className="col">D</div>
			</div>
		</div>
	</div>
);
