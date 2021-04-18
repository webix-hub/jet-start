import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config(){
		return { cols:[
			{ view:"menu",layout:"y", width:200, select:true,
			data:[
				{ id:"1",value:"Contacts", href: "#!/top/contacts"},
				{ id:"2",value:"DataView", href: "#!/top/data"},
				{ id:"3",value:"Segmented", href: "#!/top/settings"},
				],
			}, 
			{ $subview:true}
		]};
	}
	init(view){
	//	view.queryView("menu").parse(data);
	}
}
