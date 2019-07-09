import {JetView} from "webix-jet";

export default class LoginView extends JetView{
    config(){
        const login_form = {
            view:"form", localId:"login:form",
            width:400, borderless:false, margin:10,
            rows:[
                { view:"text", name:"login", label:"User Name", labelPosition:"top" },
                { view:"text", type:"password", name:"pass", label:"Password", labelPosition:"top" },
                { view:"button", value:"Login", click:() => this.do_login(), hotkey:"enter" }
            ],
            rules:{
                login:webix.rules.isNotEmpty,
                pass:webix.rules.isNotEmpty
            }
        };

        return {
            cols:[{}, {
                localId:"login:top", rows:[
                {}, 
                { type:"header", template: this.app.config.name, css:"webix_dark" },
                login_form,
                {}
            ]}, {}]
        };
    }

    init(view){
        view.$view.querySelector("input").focus();
    }

    do_login(){
        const user = this.app.getService("user");
        const form = this.$$("login:form");
        const ui = this.$$("login:top");

        if (form.validate()){
            const data = form.getValues();
            user.login(data.login, data.pass).catch(function(){
                webix.html.removeCss(ui.$view, "invalid_login");
                form.elements.pass.focus();
                webix.delay(function(){
                    webix.html.addCss(ui.$view, "invalid_login");
                });
            });
        }
    }
}