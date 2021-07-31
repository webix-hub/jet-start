import {JetView} from "webix-jet";

import countries from "../models/countries";
import statuses from "../models/statuses";
import GridView from "./gridView";

export default class DataView extends JetView {
	config() {
		return {
			rows: [
				{
					view: "tabview",
					cells: [
						{
							header: "Statuses",
							body: {$subview: new GridView(this.app, "Statuses", statuses)}
						},
						{
							header: "Countries",
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
