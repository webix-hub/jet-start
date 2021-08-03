const xbsEslint = require("eslint-config-xbsoftware");
const {INDENT, QUOTES, PLUGINS} = require("eslint-config-xbsoftware/constants");

module.exports = {
	extends: [
		xbsEslint({
			config: {
				indent: INDENT.TABS,
				quotes: QUOTES.DOUBLE
			},
			plugins: [
				PLUGINS.CORE
			]
		})
	],
	globals: {
		webix: "readonly",
		require: "readonly"
	},
	env: {
		browser: true,
		node: true
	}
};
