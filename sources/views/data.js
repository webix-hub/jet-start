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
    const countriesDt = {
		// maxWidth: 500,
      view: "datatable",
      hover: "myHover",
      data: countries,
	  editable:true,
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
		view: "datatable",
		hover: "myHover",
		data: statuses,
		editable:true,
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
			template:
			  "<span class ='webix_icon wxi-#Icon#'></span>",
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
		view: "multiview",
      cells: [countriesDt, statusesDt],
    };

    return dataMultiview;
  }
}
