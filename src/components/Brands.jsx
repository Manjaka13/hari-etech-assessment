import React from "react";
import { BRANDS } from "@/helpers/const";

/**
 * Brands list
 */

const computedBrands = BRANDS.map((brand, key) => (
	<li className="brands__item col d-flex justify-content-center" key={key}>
		<a href="#0" title={brand.name}>
			<brand.icon />
		</a>
	</li>
));

export const Brands = () => (
	<div className="brands d-flex align-items-center">
		<div className="container">
			<ul className="row">{computedBrands}</ul>
		</div>
	</div>
);
