import { JetView, plugins } from "webix-jet";
import { contacts } from "../models/contacts";

export default class ContactsView extends JetView {
  //list and form
  config() {
    const btnWidth = 100;
    const ContactsList = {
        // header: "Contacts list",
      view: "list",
      data: contacts,
      template: "#Name# #Email#",
    };

    const btnSave = {
      width: btnWidth,
      view: "button",
      // id: "btn-add-new-item",
      type: "form",
      value: "Save",
      css: "webix_primary",
      // click: saveForm,
    };

    const btnDelete = {
      width: btnWidth,
      view: "button",
      // id: "btn-add-new-item",
      type: "form",
      value: "Delete",
      // css: "webix_primary",
      // click: saveForm,
    };

    const ContactsForm = {
      view: "form",
      gravity: 0.5,
      minWidth: 200,
      elements: [
        { view: "template", template: "edit info", type: "section" },
        {
          rows: [
            {
              view: "text",
              label: "Name",
              // localId: "",
              name: "Name",
              // invalidMessage: "Title must not be empty",
            },
            {
              view: "text",
              label: "Email",
              // localId: "",
              name: "Email",
              // invalidMessage: "Title must not be empty",
            }
          ],
        },
        {
          cols: [{}, btnSave, btnDelete, {}],
        },
        {}
      ],
    };

    const ui = {
      cols: [ContactsList, ContactsForm],
    };

    return ui;
  }
}
