import { JetApp, EmptyRouter, SubRouter } from "webix-jet";

export default class App extends JetApp {
	constructor(config = {}, name = "") {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/departments/dashboard",

			router 	: SubRouter,
			parentRouter: config.getRouter(),
			routerPrefix: "/"+name,
			views: (a) => require("modules/accounting/views/"+a)
        };

		super({ ...defaults, ...config });
	}
}