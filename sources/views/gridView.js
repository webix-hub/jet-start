import { JetView } from 'webix-jet';

export default class GridView extends JetView {
  constructor(app, name, data) {
    super(app, name);
    this._gridData = data;
  }
  config() {
    return {
      rows: [
        {
          view: 'datatable',
          editable: true,
          editation: 'dbclick',
          localId: 'mydatatable',
          autoConfig: true,
        },
        {
          view: 'toolbar',
          cols: [
            {
              view: 'button',
              localId: 'addbutton',
              value: 'Add new',
            },
            {
              view: 'button',
              localId: 'removebutton',
              value: 'Remove selected',
            },
          ],
        },
      ],
    };
  }
  init(view) {
    let table = this.$$('mydatatable');
    table.parse(this._gridData);
    table.getColumnConfig('Name').editor = 'text';
    this.$$('addbutton').attachEvent('onItemClick', function () {
      table.add({ Name: 'New item' });
    });
    this.$$('removebutton').attachEvent('onItemClick', function () {
      let sel = table.getSelectedId();
      if (sel) table.remove(sel);
    });
  }
}
