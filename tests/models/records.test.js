var chai = require("chai");
var expect = chai.expect;

import {data} from "models/records";

describe("model: records", function() {
	it("has some data", function() {
		expect(data.count()).to.be.above(0);
	});
});
