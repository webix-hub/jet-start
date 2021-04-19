import {JetView} from "webix-jet";

export default class GridView extends JetView {
	constructor(app, name, data){
		super(app, name); //call parent constructor
		this._gridData = data; //define specific parameters
	}
	config(){
		return {
			rows:[
				{view: "datatable",
					editable: true,
					autoConfig:true},
				{ view:"toolbar", cols:[
					{ view:"button", value:"Add new",
						on:{ onItemClick:function(){
							var table = this.getParentView().getParentView().queryView("datatable");
							table.add({Name:"Alan"});
						}
						}
					},
					{ view:"button",  value:"Remove selected",
						on:{ onItemClick:function(){
							var table = this.getParentView().getParentView().queryView("datatable");
							var sel = table.getSelectedId();
							if(sel) table.remove(sel);
						}
						}},
					{ view:"button", value:"Refresh",
						on:{ onItemClick:function(){
							var table = this.getParentView().getParentView().queryView("datatable");
							table.refresh();
						}
						}
					},
				]}
			]
		};
	}
	init(view) {
		view.queryView("datatable").parse(this._gridData);
	}
}