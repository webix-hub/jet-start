var chai = require("chai");
var expect = chai.expect;

import { JetApp } from "webix-jet";
import View from "jet-views/data";

let temp, app, view;


describe("/data", function() {
	before(function(){
		temp = document.createElement("DIV");
		document.body.appendChild(temp);

		app = new JetApp({});
	});

	it("can be initialized", function() {
		view = new View(app, "");
		view.render(temp);
	});

	it("has some data", function() {
		expect(view.getRoot().count()).to.be.above(0);
	});


	after(function(){
		document.body.removeChild(temp);
	});
});
