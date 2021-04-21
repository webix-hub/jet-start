import { JetView } from "webix-jet";

export default class GridView extends JetView {
  constructor(app, name, data) {
    super(app, name); //call parent constructor
    this._gridData = data; //define specific parameters
  }
  config() {
    return {
      rows: [
        {
          view: "datatable",
          editable: true,
          localId: "mydatatable",
          autoConfig: true,
        },
        {
          view: "toolbar",
          cols: [
            {
              view: "button",
              localId: "addbutton",
              value: "Add new",
            },
            {
              view: "button",
              localId: "removebutton",
              value: "Remove selected",
            },
          ],
        },
      ],
    };
  }
  init(view) {
    let table = this.$$("mydatatable");
    table.parse(this._gridData);
    table.getColumnConfig("Name").editor = "text";
    this.$$("addbutton").attachEvent("onItemClick", function () {
      table.add({ Name: "Alan" });
    });
    this.$$("removebutton").attachEvent("onItemClick", function () {
      var sel = table.getSelectedId();
      if (sel) table.remove(sel);
    });
  }
}
