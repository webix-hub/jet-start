import {JetView} from "webix-jet";

export default class DepartmentsView extends JetView{
	config(){
		return {
            rows:[
                { type:"header", template:"Accounting"},
                { cols:[
                    { view:"list", width:200, localId:"users", select:true, on:{
                        onAfterSelect: (id) => this.show("./details?region="+id)
                    }},
                    { $subview:true }
                ]}
            ]
        };
    }

	init(){
        this.$$("users").parse([
            { id:1, value:"Europe" },
            { id:2, value:"Asia" },
            { id:3, value:"North America" }
        ]);
	}
}