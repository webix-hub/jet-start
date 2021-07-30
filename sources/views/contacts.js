import {JetView} from "webix-jet";

import contacts from "../models/contacts";
import Form from "./form";

export default class Contacts extends JetView {
	config() {
		return {
			cols: [{view: "list", template: "#id# #Name# #Email#"}, Form]
		};
	}

	init(view) {
		view.queryView("list").parse(contacts);
	}
}
