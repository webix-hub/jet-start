/* eslint-disable linebreak-style */
import {
	JetView
} from "webix-jet";

import contacts from "../models/contacts";
import countries from "../models/countries";
import statuses from "../models/statuses";


export default class Form extends JetView {
	config() {
		return {
			view: "form",
			localId: "myform",
			width: 300,
			elements: [
				{view: "text", type: "text", label: "Name", name: "Name", validate: webix.rules.isNotEmpty},
				{view: "text", label: "Email", name: "Email", validate: webix.rules.isEmail},
				{view: "combo", type: "text", label: "Status", name: "Status", options: statuses},
				{view: "combo", type: "text", label: "Country", name: "Country", options: countries},
				{
					margin: 5,
					cols: [
						{view: "button", localId: "updatebutton", value: "Update", css: "webix_primary"},
						{view: "button", value: "Cancel"}
					]
				}
			]
		};
	}

	init(view) {
		this.on(this.app, "contact:select", (id) => {
			let item = contacts.getItem(id);
			view.setValues(item);
		});
		this.$$("updatebutton").attachEvent("onItemClick", () => {
			let form = this.$$("myform");
			let values = form.getValues();
			if (form.validate()) {
				contacts.updateItem(values.id, values);
			}
		});
	}
}
