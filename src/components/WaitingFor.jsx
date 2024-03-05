import React from "react";
import { Button } from "@/components/Button";

/**
 * The section "What are you waiting for"
 */

export const WaitingFor = () => (
	<div className="waiting-for container rounded bg-light p-5">
		<div className="d-flex align-items-center justify-content-center">
			<p className="waiting-for__text">
				What are You <span className="violet">Waiting For ?</span>
			</p>
			<Button>Try Blinqpay</Button>
		</div>
	</div>
);
