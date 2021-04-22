import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {countries} from "models/countries";
import GridView from "views/gridview";
    

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
			]
		};}
}
