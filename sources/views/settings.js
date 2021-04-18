import {JetView} from "webix-jet";

export default class Segmented extends JetView {
    config(){
        return { rows:[
            {view:"segmented", value:1,
                width:200,
                height:50,
                options:[
                    { "id":"1", "value":"RU" }, 
                    { "id":"2", "value":"EN" }, 
                ],
            },
            {}
        ]}
    }
}