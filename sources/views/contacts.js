/* eslint-disable no-mixed-spaces-and-tabs */
import {JetView} from "webix-jet";

import contacts from "../models/contacts";
import Form from "./form";

export default class Contacts extends JetView {
	config() {
		return {
			cols: [
				{rows: [
				 {
						view: "list",
						localID: "list",
						select: true,
				        template: "#id# #Name# #Email# <span class='webix_icon wxi-close removeUser'>",
						onClick: {
							removeUser(event, id) {
								this.remove(id);
								return false;
							}
						},
						on: {
							onAfterLoad() {
						   this.select(this.getFirstId());
							},
							onAfterSelect(id) {
								this.$scope.setParam("el", id, true);
							}
						}
				 },
				 {
					 view: "button",
					 localId: "button",
					 value: "Add",
					 click() {
							contacts.add({Name: "New name", Email: "email@very.new", Status: "", Country: ""});
					 }
				 }
				]
			    },
				Form]
		};
	}

	init(view) {
		const list = view.queryView("list");
		contacts.waitData.then(() => {
			list.sync(contacts);
			list.select(contacts.getFirstId());
		});
		this.on(list, "onAfterSelect", id => this.app.callEvent("contact:select", [id]));
	}
}
