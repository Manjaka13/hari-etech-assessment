import React from "react";

/**
 * User avatar
 */

export const Avatar = ({ className, image, size }) => {
	size = size ? size : 132;
	const style = {
		width: size,
		height: size,
	};

	return (
		<figure
			className={`avatar p-1 bg-white rounded-circle overflow-hidden${className ? " " + className : ""}`}
			style={style}
		>
			<img className="avatar__image" src={image} alt="Avatar" />
		</figure>
	);
};
