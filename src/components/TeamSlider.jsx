import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "@/components/SectionTitle";
import { Avatar } from "@/components/Avatar";
import { TEAM_LIST } from "@/helpers/const";

/**
 *
 */

const Slide = ({
	image,
	name = "Leo Maynus",
	position = "CEO at Softpanda",
}) => (
	<div className="container text-center">
		<Avatar className="mx-auto mb-3" image={image} />
		<div className="row">
			<div className="col-12 col-sm-8 mx-auto">
				<h2 className="team-slider__text">
					Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a,
					interdum nulla sem adipiscing inw
				</h2>
				<p className="team-slider__name mt-3">{name.toUpperCase()}</p>
				<p className="team-slider__position">{position}</p>
			</div>
		</div>
	</div>
);

export const TeamSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const computedSlider = TEAM_LIST.map((t, key) => <Slide {...t} key={key} />);

	return (
		<div className="team-slider container-fluid overflow-hidden">
			<div className="container py-5">
				<SectionTitle className="text-center mb-3">
					What Our <span className="violet">Customer</span> Are saying
				</SectionTitle>
				<Slider {...settings}>{computedSlider}</Slider>
			</div>
		</div>
	);
};
