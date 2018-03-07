var chai = require("chai");
var expect = chai.expect;

import { JetApp } from "webix-jet";
import View from "jet-views/top";

let temp, app, view;


describe("/top", function() {
	before(function(){
		temp = document.createElement("DIV");
		document.body.appendChild(temp);

		app = new JetApp({});
	});

	it("can be initialized", function() {
		view = new View(app, "");
		view.render(temp);
	});

	it("has top menu", function() {
		expect(view.$$("top:menu")).to.be.a("object");
	});


	after(function(){
		document.body.removeChild(temp);
	});
});
