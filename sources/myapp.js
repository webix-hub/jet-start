import "./styles/app.css";
import {JetApp, plugins} from "webix-jet";

import session from "models/session";

webix.ready(() => {
	var app = new JetApp({
		id:			APPNAME,
		version:	VERSION,
		start:		"/top/start"
	});
	// login
	app.use(plugins.User, { model: session });
	app.render();

	//error handlers
	app.attachEvent("app:error:resolve", function(name, error){
		window.console.error(error);
	});
	app.attachEvent("app:error:initview", function(view, error){
		window.console.error(error);
	});
	app.attachEvent("app:error:server", function(error){
		webix.alert({
			width: 450,
			title:"Data saving error",
			text: "Please try to repeat the action <br> if error still occurs, please try to reload the page."
		});
	});
});