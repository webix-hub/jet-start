import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
    config() {
        const settingsBtn = {
            view: "button",
            value: "Language"
        }
        return settingsBtn;
    }
}