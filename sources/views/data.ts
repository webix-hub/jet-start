import {data} from "models/records";
import {JetView} from "webix-jet";


export default class DataView extends JetView{
	config(){
		return { view:"datatable", autoConfig:true };
	}
	init(view){
		view.parse(data);
	}
}