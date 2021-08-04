const countries = new webix.DataCollection({
	url: "http://localhost:8096/api/v1/countries/",
	save: "rest->http://localhost:8096/api/v1/countries/"
});

export default countries;
