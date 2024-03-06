import React from "react";
import { Team } from "@/components/Team";
import { SectionTitle } from "@/components/SectionTitle";
import Shape from "@/assets/shape.svg";
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
							<SectionTitle>
								What Our <span className="violet">Customer</span> Are saying With
								Community
							</SectionTitle>
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
			<img className="customer-section__shape1" src={Shape} alt="Shape 1" />
			<img className="customer-section__shape2" src={Shape} alt="Shape 2" />
		</div>
	</div>
);
