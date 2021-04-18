import {JetApp, UrlRouter,EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
    constructor(config){
        const defaults = {
	    id 	: APPNAME,
	    version : VERSION,
	    router : BUILD_AS_MODULE ? EmptyRouter : HashRouter,
		//router : UrlRouter,
	    debug : !PRODUCTION,
	    start : "/top/start"
	};
	super({ ...defaults, ...config });
    }
}
if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}
