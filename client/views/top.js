import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		var header = {
			type:"header", template:this.app.config.name, css:"webix_dark"
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

		var logout = { view:"button", label:"Logout", click: () => this.show("/logout") };

		var ui = {
			rows:[
				header,
				{ type:"wide", padding:{ top:4 }, cols:[
					{ rows:[ menu, logout ] },
					{ $subview:true }
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}