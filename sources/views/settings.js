import {JetView} from "webix-jet";

export default class Segmented extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
			rows: [
				{
					name: "lang",
					localId: "lang",
					optionWidth: 120,
					view: "segmented",
					label: _("Language"),
					options: [
						{id: "en", value: "English"},
						{id: "ru", value: "Russian"}
					],
					click: () => this.toggleLanguage(),
					value: lang},
				{}
			]

		};
	}

	toggleLanguage() {
		const langs = this.app.getService("locale");
		const value = this.$$("lang").getValue();
		langs.setLang(value);
	}
}
