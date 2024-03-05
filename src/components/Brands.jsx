import React from "react";
import { ReactComponent as LandRover } from "@/assets/landrover.svg";
import { ReactComponent as Avengers } from "@/assets/avengers.svg";
import { ReactComponent as Etsy } from "@/assets/etsy.svg";
import { ReactComponent as Linkedin } from "@/assets/linkedin.svg";
import { ReactComponent as Tiktok } from "@/assets/tiktok.svg";

/**
 * Brands list
 */

const BRANDS = [
	{
		name: "Land Rover",
		icon: LandRover,
	},
	{
		name: "Avengers",
		icon: Avengers,
	},
	{
		name: "Etsy",
		icon: Etsy,
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
	},
	{
		name: "Tiktok",
		icon: Tiktok,
	},
];
// const BRANDS = [LandRover, Avengers, Etsy, Linkedin, Tiktok];

const computedBrands = BRANDS.map((brand, key) => (
	<li className="brands__item col d-flex justify-content-center" key={key}>
		<a href="#0" title={brand.name}>
			<brand.icon />
		</a>
	</li>
));

export const Brands = () => (
	<div className="brands container">
		<ul className="brands row my-5">{computedBrands}</ul>
	</div>
);
