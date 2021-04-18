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
				{view:"multiview",
				cells:[
					{ $subview: new GridView(this.app,"Contacts", [contacts,1])},
					{ $subview: new GridView(this.app,"Countries", [countries,2])}
				]
			},
			tabbar
		]};
	}
        // init(view){
        // }
}

