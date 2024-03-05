/**
 * Here lies some useful functions
 */

// Builds className from array
export const buildClass = (base, argv) => {
	let className = base;
	argv.forEach((arg) => {
		if (Array.isArray(arg)) {
			if (arg.length === 1 && arg[0]) className += ` ${base}--${arg[0]}`;
			else if (arg[0] && arg[1]) className += ` ${base}--${arg[1]}`;
		} else if (typeof arg === "string") className += ` ${arg}`;
	});
	return className;
};
