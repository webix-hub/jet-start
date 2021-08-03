import {JetView} from "webix-jet";

import countries from "../models/countries";
import statuses from "../models/statuses";
import GridView from "./gridView";

export default class DataView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		return {
			rows: [
				{
					view: "tabview",
					cells: [
						{
							header: _("Statuses"),
							body: {$subview: new GridView(this.app, "Statuses", statuses)}
						},
						{
							header: _("Countries"),
							body: {
								$subview: new GridView(this.app, "Countries", countries)
							}
						}
					]
				}
			]
		};
	}
}
