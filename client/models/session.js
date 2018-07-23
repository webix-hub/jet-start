function status(){
	return webix.ajax().post("server/login/status")
		.then(a => a.json());
}

function logout(){
	return webix.ajax().post("server/logout")
		.then(a => a.json());
}

export default {
	status, logout
}