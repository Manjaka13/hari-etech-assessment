import React from "react";
import { Avatar } from "@/components/Avatar";
import { TEAM_LIST } from "@/helpers/const";

/**
 * Team list
 */

const computedTeam = TEAM_LIST.map((t, key) => (
	<Avatar
		className={`team--${key + 1}`}
		image={t.image}
		key={key}
		size={t.size}
	/>
));

export const Team = () => (
	<div className="team">
		{computedTeam}
		<div className="team__about">
			<h2 className="team__text text-white text-center">
				Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a,
				interdum nulla sem adipiscing inw
			</h2>
			<p className="team__name mt-3">LEO MAYNUS</p>
			<p className="team__position">CEO at Softpanda</p>
		</div>
	</div>
);
