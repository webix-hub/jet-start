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
				{view: "text", type: "text", label: "Name", name: "name"},
				{view: "text", label: "Email", name: "email"},
				{view: "text", type: "text", label: "Status", name: "status"},
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

	/* urlChange(view){
			const id = this.getParam("id");
			console.log(id)
			if (id && contacts.exists(id)) {
				this.$$("form").setValues(contacts.getItem(id));
			}
			else {
				this.$$("form").clear();
			}
    } */
}
