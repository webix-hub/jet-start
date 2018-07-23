import {JetView} from "webix-jet";

export default class LoginView extends JetView{
    config(){
        return {};
    }
    init(view){
        document.location.href = "/server/auth/google";
    }
}