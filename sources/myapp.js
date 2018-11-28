import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });

		this.use(plugins.User, { model: {
			status: () => Promise.resolve({ name:"Alex" }),
			login:  () => Promise.resolve({ name:"Alex" }),
			logout:  () => Promise.resolve({})
		} });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}