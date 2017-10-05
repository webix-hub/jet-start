export function getData(){
	return webix.ajax("server/data.php")
		.then(a => a.json());
}

export function saveData(id, action, data){
	return webix.ajax().post("server/data.php", { id, action, data });
}