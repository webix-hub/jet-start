import {JetView, plugins} from "webix-jet";
import menu from "./menu";


export default class TopView extends JetView{
	config(){
		const header = {
			type:"header", template:this.app.config.name, css:"webix_header app_header"
		};

		const ui = {
			type:"clean", paddingX:5, css:"app_layout", cols:[
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[header, menu]} ]},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
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