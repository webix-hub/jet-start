import {JetView} from "webix-jet";
import {getData, saveData} from "models/records";

export default class DataView extends JetView{
	config(){
		return { view:"datatable", save:saveData, editable:true, autoConfig:true };
	}
	init(view){
		view.parse(getData());
		this.app.getService("status").track(view);
	}
}