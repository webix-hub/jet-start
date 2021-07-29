var chai = require("chai");
var expect = chai.expect;

import MyApp from "myapp";
import View from "jet-views/top";

let temp, app, view;


describe("/top", function() {
	before(function(done){
		temp = document.createElement("DIV");
		document.body.appendChild(temp);

		app = new MyApp({});
		// if you are using async services on app
		// you need to wait till they are ready
		app.getService("user").getStatus(true).then(done);

		// or, you can provide a stub instead
		// app.getService("user").getUser = () => ({ name:"Alex" });
	});

	it("can be initialized", function() {
		view = new View(app, "");
		view.render(temp, "top");
	});

	it("has top menu", function() {
		expect(view.$$("top:menu")).to.be.a("object");
	});

	it("has user name in header", function(){
		expect(view.$$("header").config.template()).to.equal("Alex");
	});


	after(function(){
		document.body.removeChild(temp);
	});
});
