import "./styles/app.css";
import {JetApp} from "webix-jet";

webix.ready(() => {
	var app = new JetApp({
		id:			"My-App",
		name:		"My App!",
		version:	"0.1.0",
		start:		"/top/start"
	});
	app.render();
	app.attachEvent("app:error:resolve", function(name, error){
		window.console.error(error);
	});
});