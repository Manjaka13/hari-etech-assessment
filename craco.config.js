const path = require("path");

/**
 * Craco config for react path aliases
 */

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
};
