<?php
session_start();

// common helper
function toJson($data){
	echo json_encode($data, true);
}


//get current session status
if (isset($_GET["status"])){
	toJson($_SESSION["user"]);
//logout
} else if (isset($_GET["logout"])){
	$_SESSION["user"] = null;
//login
} else {
	$user = $_POST["user"];
	$pass = $_POST["pass"];

	// very naive implementation
	// do not use it in a production

	if ($user === "admin" && $pass === "1"){
		$user = [
			"name" => "admin",
			"role" => "admin", 
			"email" => "admin@webix.com" ];
		$_SESSION["user"] = $user;
		toJson($user);
	} else {
		toJson(null);
	}
}