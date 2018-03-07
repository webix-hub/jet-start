const jsdom = require("jsdom").JSDOM;
const fs = require("fs", { runScripts: "dangerously" });
const webix = fs.readFileSync("./node_modules/webix/webix.js").toString("utf-8");

const dom = new jsdom(`<!DOCTYPE html>
<html><body></body></html>`, { runScripts: "dangerously" });

global.window = dom.window;
global.document = dom.window.document;
window.console = global.console;

window.onerror = function () { console.log(arguments) }
const scriptEl = window.document.createElement("script");
scriptEl.textContent = webix;
window.document.body.appendChild(scriptEl);


global.webix = dom.window.webix;


Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === "undefined") {
		global[property] = document.defaultView[property];
	}
});

global.navigator = {
	userAgent: "node.js"
};