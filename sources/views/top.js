import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

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
						{value: _("Contacts"), id: "contacts", icon: "wxi-user"},
						{value: _("Data"), id: "data", icon: "wxi-pencil"},
						{value: _("Settings"), id: "settings", icon: "mdi mdi-cogs"}
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
