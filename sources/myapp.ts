import {EmptyRouter, HashRouter, JetApp } from "webix-jet";
import "./styles/app.css";

declare var APPNAME;
declare var VERSION;
declare var PRODUCTION;
declare var BUILD_AS_MODULE;

export default class MyApp extends JetApp{
	constructor(config = {}){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render());
}