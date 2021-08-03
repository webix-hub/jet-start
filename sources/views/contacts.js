/* eslint-disable no-mixed-spaces-and-tabs */
import {JetView} from "webix-jet";

import contacts from "../models/contacts";
import Form from "./form";

export default class Contacts extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

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
							onAfterSelect: (id) => {
								this.setParam("id", id, true);
								this.app.callEvent("contact:select", [id]);
							}
						}
				 },
				 {
					 view: "button",
					 localId: "button",
					 value: _("Add"),
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
		});
	}

	urlChange(view) {
		contacts.waitData.then(() => {
			let list = view.queryView("list");
			let id = this.getParam("id");

			if (!contacts.exists(id)) {
				list.select(contacts.getFirstId());
			}
			else if (id && contacts.exists(id)) {
				list.select(id);
			}
		});
	}
}
