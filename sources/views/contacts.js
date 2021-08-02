import {JetView} from "webix-jet";

import contacts from "../models/contacts";
import Form from "./form";

export default class Contacts extends JetView {
	config() {
		return {
			cols: [
				{ rows: [
				 {
					view: "list", 
					localID:"list",
					select:true,
				    template: "#id# #Name# #Email# <span class='webix_icon wxi-close removeUser'>",
					onClick: {
						"removeUser": function (event, id, node) {
							this.remove(id);
							return false
						}
					},
					on: {
						onAfterLoad: function(){
						   this.select(this.getFirstId());
						},
						onAfterSelect: function(id){
							this.$scope.setParam("el", id, true)
						}
					}
				 },
				 {
					 view: "button",
					 localId: "button",
					 value: "Add",
					 click: function(){
						contacts.add({"Name": "New name", "Email": "New email"});
					 }
				 }
				]
			    }, 
				Form]
		};
	}

	init(view) {
		view.queryView("list").parse(contacts);	
		this.on(view, "onAfterSelect", id => this.app.callEvent("contact:select", [id]))	
	}

}
