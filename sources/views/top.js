import {JetView, plugins} from "webix-jet";




export default class TopView extends JetView {
	config(){
		return { 
			cols:[
			{ view:"menu",layout:"y", width:200, select:true, localId:"menu",
				data:[
					{ id:"contacts",value:"Contacts"},
					{ id:"data",value:"DataView"},
					{ id:"settings",value:"Spreadsheet"},
				],
			}, 
			{ $subview:true}
		]
	};
	}
	init(){
		this.use(plugins.Menu, "menu");
	}
}
