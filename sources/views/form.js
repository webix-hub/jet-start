import { JetView } from 'webix-jet';
export default class Form extends JetView {
  config() {
    return {
      view: 'form',
      width: 300,
      elements: [
        { view: 'text', type: 'text', label: 'Name', name: 'name' },
        { view: 'text', label: 'Email', name: 'email' },
        { view: 'text', type: 'text', label: 'Status', name: 'status' },
        {
          margin: 5,
          cols: [
            { view: 'button', value: 'Login', css: 'webix_primary' },
            { view: 'button', value: 'Cancel' },
          ],
        },
      ],
    };
  }
}
