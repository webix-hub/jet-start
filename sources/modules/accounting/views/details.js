import {JetView} from "webix-jet";

export default class DetailsView extends JetView{
	config(){
		return {
            rows:[
                { localId:"text", template:"Details" },
                { view:"button", inputWidth:200, value:"Back", 
                  click: () => this.show("../dashboard")
                }
            ]
        };
    }
    urlChange(){
        this.$$("text").setHTML( "Details : "+ this.getParam("region") );
    }
}