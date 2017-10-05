import "./styles/app.css";
import {JetApp} from "webix-jet";

webix.ready(() => {
	var app = new JetApp({
		id:			APPNAME,
		version:	VERSION,
		start:		"/top/start"
	});
	app.render();

	app.attachEvent("app:error:resolve", function(name, error){
		window.console.error(error);
	});
});