export default {
	view: "menu",
	id: "top:menu",
	css: "app_menu",
	width: 180,
	layout: "y",
	select: true,
	template: "<span class='webix_icon #icon#'></span> #value# ",
	data: [
		{ value: "Contacts", id: "contacts", icon: "wxi-user" },
		{ value: "Data", id: "data", icon: "wxi-calendar" },
		{ value: "Settings", id: "settings", icon: "wxi-pencil" },
	],
};
