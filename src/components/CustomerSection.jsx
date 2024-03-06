import React from "react";
import { Team } from "@/components/Team";
import CustomerBg2 from "@/assets/customer-bg2.svg";
import { ReactComponent as Pick } from "@/assets/pick.svg";

/**
 * Customer section in page
 */

export const CustomerSection = () => (
	<div className="customer-section d-none d-lg-block">
		<div className="customer-section__content">
			<div className="container">
				<div className="row d-flex justify-content-between">
					<div className="col-6 d-flex align-items-center">
						<div className="left">
							<h2 className="customer-section__title">
								What Our <span className="violet">Customer</span> Are saying With
								Community
							</h2>
							<p className="customer-section__text mt-3">
								Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus
								a, interdum nulla sem adipiscing inw
							</p>
							<div className="pick">
								<Pick />
							</div>
						</div>
					</div>
					<div className="right col-5 d-flex align-items-center">
						<Team />
					</div>
				</div>
			</div>
			<img className="customer-section__bg2" src={CustomerBg2} alt="bg-alt" />
		</div>
	</div>
);
