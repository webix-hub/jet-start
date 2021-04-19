import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import Form from "views/form";

export default class Contacts extends JetView {
	config(){
		return { 
			view:"layout",
			cols:[
				{ view:"list",
					template:"#Name# #Email# #Status#",
					data:contacts }, 
				Form
			]   
		};
	}
}