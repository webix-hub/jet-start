import { JetView } from "webix-jet";
import { countries } from "../models/countries";
import { statuses } from "../models/statuses";

export default class DataView extends JetView {
	// config(){
	// 	return { view:"datatable", autoConfig:true, css:"webix_shadow_medium" };
	// }
	// init(view){
	// 	view.parse(data);
	// }
	config() {
		const statusesDtLocalId = "statuses-dt";
		const countriesDtLocalId = "countries-dt";
    
		const countriesDt = {
			// maxWidth: 500,
			id: countriesDtLocalId,
			// localId: countriesDtLocalId,
			view: "datatable",
			hover: "myHover",
			data: countries,
			editable: true,
			select: true,
			scrollX: false,
			columns: [
				// {
				//   id: "id",
				//   header: "#",
				//   width: 50,
				// },
				{
					id: "Name",
					header: "Country",
					fillspace: true,
				},
				{
					id: "delete",
					header: "",
					css: "rank",
					template:
            "<span class ='webix_icon wxi-trash removeItemDatatable'></span>",
				},
			],
			onClick: {
				removeItemDatatable: function (e, id) {
					this.remove(id);
					return false;
				},
			},
		};

		const statusesDt = {
			// localId: statusesDtLocalId,
			id: statusesDtLocalId,
			view: "datatable",
			hover: "myHover",
			data: statuses,
			editable: true,
			select: true,
			scrollX: false,
			columns: [
				{
					id: "id",
					header: "#",
					width: 50,
				},
				{
					id: "Name",
					header: "Name",
					fillspace: true,
				},
				{
					id: "Icon",
					header: "Icon",
					template: "<span class ='webix_icon wxi-#Icon#'></span>",
				},
				{
					id: "delete",
					header: "",
					css: "rank",
					template:
            "<span class ='webix_icon wxi-trash removeItemDatatable'></span>",
				},
			],
			onClick: {
				removeItemDatatable: function (e, id) {
					this.remove(id);
					return false;
				},
			},
		};

		const dataMultiview = {
			rows: [
				{
					view: "segmented",
					id: "data-tabbar",
					value: "countries-dt",
					multiview: true,
					options: [
						{ value: "Country", id: countriesDtLocalId },
						{ value: "Status", id: statusesDtLocalId },
					],
				},
				{
					cells: [countriesDt, statusesDt],
				},
			],
		};

		return dataMultiview;
	}
	// init(view) {
	//   console.log(view);
	// }
}
