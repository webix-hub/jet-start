function status(){
	return webix.ajax().post("server/login.php?status")
		.then(a => a.json());
}

function login(user, pass){
	return webix.ajax().post("server/login.php", {
		user, pass
	}).then(a => a.json());
}

function logout(){
	return webix.ajax().post("server/login.php?logout")
		.then(a => a.json());
}

export default {
	status, login, logout
}