import React from "react";
import { Avatar } from "@/components/Avatar";
import AvatarImage1 from "@/assets/avatar1.png";
import AvatarImage2 from "@/assets/avatar2.png";
import AvatarImage3 from "@/assets/avatar3.png";
import AvatarImage4 from "@/assets/avatar4.png";
import AvatarImage5 from "@/assets/avatar5.png";

/**
 * Team list
 */

const TEAM_LIST = [
	{
		image: AvatarImage1,
		size: 132,
	},
	{
		image: AvatarImage2,
		size: 106,
	},
	{
		image: AvatarImage3,
		size: 80,
	},
	{
		image: AvatarImage4,
		size: 95,
	},
	{
		image: AvatarImage5,
		size: 70,
	},
];

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
			<h2 className="team__text">
				Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a,
				interdum nulla sem adipiscing inw
			</h2>
			<p className="team__name mt-3">Leo Maynus</p>
			<p className="team__position">CEO at Softpanda</p>
		</div>
	</div>
);
