import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		const header = {
			type:"header", template:"Typescript App"
		};

		const menu = {
			view:"menu", id:"top:menu",
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon fa-#icon#'></span> #value# ",
			data:[
				{ value:"DashBoard", id:"start", icon:"envelope-o" },
				{ value:"Data",		 id:"data",  icon:"briefcase" }
			]
		};

		const ui = {
			margin:10,
			cols:[
				{
					type:"clean", css:"webix_shadow_big",
					padding:{left:5},
					rows: [ header, menu ]
				},
				{ $subview:true }
			]
		};


		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}