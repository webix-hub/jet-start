import {JetApp} from "webix-jet";
import "./styles/app.css";

import * as webix from "webix";

declare var APPNAME;
declare var VERSION;
declare var PRODUCTION;
declare var BUILD_AS_MODULE;

export default class MyApp extends JetApp{
	constructor(config = {}){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/top/start",
			webix
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render());
}