var chai = require("chai");
var expect = chai.expect;

import MyApp from "myapp";
import View from "jet-views/data";

let temp, app, view;


describe("/data", function() {
	before(function(){
		temp = document.createElement("DIV");
		document.body.appendChild(temp);

		app = new MyApp({});
	});

	it("can be initialized", function() {
		view = new View(app, "");
		view.render(temp, "data");
	});

	it("has some data", function() {
		expect(view.getRoot().count()).to.be.above(0);
	});


	after(function(){
		document.body.removeChild(temp);
	});
});
