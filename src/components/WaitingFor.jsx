import React from "react";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

/**
 * The section "What are you waiting for"
 */

export const WaitingFor = () => (
	<div className="waiting-for container rounded bg-light p-5 d-none d-lg-block">
		<div className="d-flex align-items-center justify-content-center">
			<SectionTitle>
				What are You <span className="violet">Waiting For ?</span>
			</SectionTitle>
			<Button>Try Blinqpay</Button>
		</div>
	</div>
);
