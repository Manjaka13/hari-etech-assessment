import React from "react";
import { ReactComponent as LogoSVG } from "@/assets/logo.svg";

/**
 * Page logo
 */

export const Logo = () => (
	<div className="logo d-flex align-items-center">
		<LogoSVG className="logo__image" />
		<p className="logo__title">blinkpay</p>
	</div>
);
