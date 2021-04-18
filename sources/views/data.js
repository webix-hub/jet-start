import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {countries} from "models/countries";
import GridView from "views/gridview";
    
var tabbar = {
	view:"tabbar", type:"bottom", multiview:true, options: [
		{ value: "Contacts", id:1},
		{ value: "Countries", id:2},
	],height:50
}
export default class DataView extends JetView {
	config(){
		return {
			rows:[
				{view:"tabview",
				cells:[
					{ header: "Contacts",
					body:{$subview: new GridView(this.app,"Contacts", contacts)},
					},
					{ header: "Countries",
					body:{$subview: new GridView(this.app,"Countries", countries),}
					},
				]
				},
				{ view:"toolbar", cols:[
					{ view:"button", value:"Add new",
						on:{ onItemClick:function(){
						//var table = this.getTopParentView().queryView("datatable");
							var tables = this.getTopParentView().queryView("datatable","all");
							let table;
							tables.forEach(element => {
								if(element.isVisible()){
								 table = element;
								}
							});
							table.add({Name:"Alan"});
							}
							}
					},
					{ view:"button",  value:"Remove selected",
						on:{ onItemClick:function(){
							var tables = this.getTopParentView().queryView("datatable","all");
							let table;
							tables.forEach(element => {
								if(element.isVisible()){
								 table = element;
								}
							});
							var sel = table.getSelectedId();
							if(sel) table.remove(sel);
							}
							}},
					{ view:"button", value:"Refresh",
						on:{ onItemClick:function(){
							var tables = this.getTopParentView().queryView("datatable","all");
							let table;
							tables.forEach(element => {
								if(element.isVisible()){
								 table = element;
								}
							});
							table.refresh();
							}
							}
					},
				]
			}
		]
	};}
}
