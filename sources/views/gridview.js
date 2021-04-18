import {JetView} from "webix-jet";

export default class GridView extends JetView {
    constructor(app, name, data){
        super(app, name); //call parent constructor
        this._gridData = data; //define specific parameters
    }
    config(){
        return {
            view: "datatable",
            autoConfig:true
        };
    }
init(view) {
       view.parse(this._gridData);
    }
}