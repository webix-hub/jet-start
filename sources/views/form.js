/* eslint-disable linebreak-style */
import {
	JetView
} from "webix-jet";

import contacts from "../models/contacts";
import countries from "../models/countries";
import statuses from "../models/statuses";

export default class Form extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		return {
			view: "form",
			localId: "myform",
			width: 300,
			elements: [
				{view: "text", label: _("Name"), name: "Name", validate: webix.rules.isNotEmpty},
				{view: "text", label: _("Email"), name: "Email", validate: webix.rules.isEmail},
				{view: "combo", label: _("Status"), name: "Status", options: {body: {template: "#Name#"}, data: statuses}},
				{view: "combo", label: _("Country"), name: "Country", options: {body: {template: "#Name#"}, data: countries}},
				{
					margin: 5,
					cols: [
						{view: "button", localId: "updatebutton", value: _("Update"), css: "webix_primary"},
						{view: "button", value: _("Cancel")}
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
