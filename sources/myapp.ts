import {JetApp} from "webix-jet";
import "./styles/app.css";

declare var APPNAME;
declare var VERSION;

webix.ready(() => {
	const app = new JetApp({
		id:			APPNAME,
		version:	VERSION,
		start:		"/top/start"
	});
	app.render();

	app.attachEvent("app:error:resolve", function(_$name, error){
		window.console.error(error);
	});
});