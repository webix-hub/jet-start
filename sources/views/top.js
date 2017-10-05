import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		var header = {
			type:"header", template:this.app.config.name
		};
		var status = {
			id:"top:status", template:" ",
			height: 30,
			borderless:true, css:"status_area"
		};

		var menu = {
			view:"menu", id:"top:menu", 
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon fa-#icon#'></span> #value# ",
			data:[
				{ value:"DashBoard", id:"start", icon:"envelope-o" },
				{ value:"Data",		 id:"data",  icon:"briefcase" }
			]
		};

		var logout = {
			view:"menu", id:"bottom:menu",
			layout:"y", autoheight:true,
			template:"<span class='webix_icon fa-#icon#'></span> #value# ",
			data:[
				{ value:"Logout", id:"logout", icon:"sign-out" }
			]
		};

		var ui = {
			type:"line", cols:[
				{ type:"clean", css:"app-left-panel",
					padding:10, margin:0, borderless:true, rows: [ header, menu, logout ]},
				{ rows:[ status,
					{ type:"clean", css:"app-right-panel", padding:4, rows:[
						{ $subview:true }
					]}
				]}
			]
		};


		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
		this.use(plugins.Status, { target: "top:status" });
	}
}