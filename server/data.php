<?php
// common helper
function toJson($data){
	echo json_encode($data, true);
}

// in a real app you will read data from DB here
$data = [
	[
		"id" => 1, "title" => "The Shawshank Redemption",
		"year" => 1994, "votes" => 678790,
		"rating" => 9.2, "rank" => "1" ],
	[
		"id" => 2, "title" => "The Godfather",
		"year" => 1972, "votes" => 511495,
		"rating" => 9.2, "rank" => "2" ],
	[
		"id" => 3, "title" => "The Godfather: Part II",
		"year" => 1974, "votes" => 319352,
		"rating" => 9.0, "rank" => "3" ],
	[
		"id" => 4, "title" => "The Good, the Bad and the Ugly",
		"year" => 1966, "votes" => 213030,
		"rating" => 8.9, "rank" => "4" ],
	[
		"id" => 5, "title" => "My Fair Lady",
		"year" => 1964, "votes" => 533848,
		"rating" => 8.9, "rank" => "5" ],
	[
		"id" => 6, "title" => "12 Angry Men",
		"year" => 1957, "votes" => 164558,
		"rating" => 8.9, "rank" => "6" ]
];

if (isset($_POST["action"])){
	//do some db updates
	sleep(1); //simulate delay
	if (rand(0,10) > 5)
		http_response_code(500); //simulate error

	toJson("ok");
} else {
	//return data
	toJson($data);
}