import {JetView, plugins} from "webix-jet";



export default class DashboardView extends JetView{
	config(){
		const ui = {
			template:"Current time: #time#",
			data:{ time:"" }
		};
		
		return ui;
	}
	init(){
		this.RefreshState =  data => this.getRoot().setValues(data)

		const io = this.app.getService("io");
		io.on('dashinfo', this.RefreshState);
	}
	destroy(){
		const io = this.app.getService("io");
		io.off('dashinfo', this.RefreshState);
	}
}