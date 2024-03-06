import React from "react";
import { Button } from "@/components/Button";
// import Computer1 from "@/assets/computer1.png";
// import Computer2 from "@/assets/computer2.png";

/**
 * Page head banner
 */

export const Banner = () => (
	<div className="banner container-fluid d-flex align-items-center">
		<div className="banner__container container">
			<div className="row">
				<div className="col-5">
					<h1 className="banner__title">Get Your Payment Faster</h1>
					<p className="banner__text my-3">
						Blinqpay helps businesses in Africa get paid by anyone, anywhere in the
						world
					</p>
					<Button alt>Start Now</Button>
				</div>
			</div>
		</div>
	</div>
);
