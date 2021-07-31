import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		return {
			cols: [
				{
					view: "menu",
					id: "top:menu",
					css: "app_menu",
					localId: "menu",
					width: 180,
					layout: "y",
					select: true,
					template: "<span class='webix_icon #icon#'></span> #value# ",
					data: [
						{value: "Contacts", id: "contacts", icon: "wxi-user"},
						{value: "Data", id: "data", icon: "wxi-pencil"},
						{value: "Settings", id: "settings", icon: "mdi mdi-cogs"}
					]
				},
				{$subview: true}
			]
		};
	}

	init() {
		this.use(plugins.Menu, "menu");
	}
}
