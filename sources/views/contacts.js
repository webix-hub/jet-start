import {JetView} from "webix-jet";
import {contacts} from "models/contacts";


export default class Contacts extends JetView {
config(){
    return { 
        view:"layout",
        cols:[
            { view:"list",
            template:"#Name# #Email# #Status#",
            data:contacts }, 
            { view:"form",
            width:300,
            elements:[
                { view:"text", label:"Email", name:"email"},
                { view:"text", type:"password", label:"Password", name:"password"},
                { margin:5, cols:[
                    { view:"button", value:"Login" , css:"webix_primary"},
                    { view:"button", value:"Cancel"}
                    ]}
                ]}, 
            ]   
        };
    }
}