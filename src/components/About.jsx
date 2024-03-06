import React from "react";
import { AboutCard } from "@/components/AboutCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ReactComponent as Accessibility } from "@/assets/accessibility.svg";
import { ReactComponent as Cash } from "@/assets/cash.svg";
import { ReactComponent as Analytics } from "@/assets/analytics.svg";
import { ReactComponent as Receipt } from "@/assets/receipt.svg";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";
import { ReactComponent as Pick } from "@/assets/pick.svg";

/**
 * Page intro
 */

export const About = () => (
	<div className="about container pb-5 d-none d-lg-block">
		<div className="row">
			<div className="col col-lg-7 left">
				<div className="row g-4">
					<div className="col-md-6 left1 pt-5">
						<AboutCard Icon={Accessibility} title="Easy Access">
							Now track all of your transaction easily.
						</AboutCard>
						<AboutCard Icon={Analytics} title="Use You Connect">
							Now track all of your transaction easily.
						</AboutCard>
					</div>
					<div className="col-md-6 left2">
						<AboutCard Icon={Cash} title="Cashflow Visibility">
							Now track all of your transaction easily.
						</AboutCard>
						<AboutCard Icon={Receipt} title="Manage Invoicing">
							Now track all of your transaction easily.
						</AboutCard>
					</div>
				</div>
			</div>
			<div className="col col-md-5 right">
				<SectionTitle>
					Make & Share <span className="violet">Payments</span> With Community
				</SectionTitle>
				<p className="about__text mt-3">
					Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
					adipiscing inw
				</p>
				<p className="mt-3">
					<a className="link" href="#0" title="Learn more">
						Learn more <Arrow />
					</a>
				</p>
				<div className="pick">
					<Pick />
				</div>
			</div>
		</div>
	</div>
);
