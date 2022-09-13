import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		const { _, getLang, setLang } = this.app.getService("locale");
		var locales = {
			view:"toolbar",
			cols:[
				{ view:"button", value:_("hello"), width: 200 },
				{},
				{ view:"segmented", options:["en", "de"], value: getLang(), width: 200, on:{
					onChange: (value) => setLang(value)
				}}
			]
		};

		var header = {
			type:"header", template:this.app.config.name, css:"webix_header app_header"
		};

		var menu = {
			view:"menu", id:"top:menu", 
			css:"app_menu",
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Dashboard", id:"start", icon:"wxi-columns" },
				{ value:"Data",		 id:"data",  icon:"wxi-pencil" }
			]
		};

		var ui = {
			type:"clean", paddingX:5, css:"app_layout", cols:[
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[header, menu]} ]},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
					{ $subview:true } 
				]}
			]
		};

		return {
			rows:[ locales, ui ]
		};
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}