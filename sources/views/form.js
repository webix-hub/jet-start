import {
	JetView
} from "webix-jet";
import {
	contacts
} from "../models/contacts";



export default class Form extends JetView {
	config() {
		
		return {
			view: "form",
			localId:"form",
			width: 300,
			elements: [
				{view: "text", type: "text", label: "Name", name: "Name"},
				{view: "text", label: "Email", name: "Email"},
				{view: "text", type: "text", label: "Status", name: "Status"},
				{
					margin: 5,
					cols: [
						{view: "button", value: "Login", css: "webix_primary"},
						{view: "button", value: "Cancel"}
					]
				}
			]
		};
	}
	init (view) {
		this.on(this.app, "contact:select", id => {
		  const item = contacts.getItem(id);
		  view.setValues(item)      
		})
	  }
}
