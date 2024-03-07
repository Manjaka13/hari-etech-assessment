import React from "react";
import { ReactComponent as LogoSVG } from "@/assets/logo.svg";

/**
 * Page logo
 */

export const Logo = () => (
	<a
		className="logo d-flex align-items-center justify-content-center justify-content-md-start text-white"
		href="#0"
		title="BlinqPay"
	>
		<LogoSVG className="logo__image" />
		<span className="logo__title">blinqpay</span>
	</a>
);
