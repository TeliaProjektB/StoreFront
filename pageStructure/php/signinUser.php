<?php

session_start();
if(isset($_SESSION["userId"])){
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	echo "You need to log out in order to register a new account.";
}

require  $_SERVER["DOCUMENT_ROOT"].'/StoreFront/pageStructure/php/signinUserClass.php';

$signinManager = new registerUser;

if(isset($_POST["userName"]) && isset($_POST["password"])){
    $name = htmlspecialchars($_POST["userName"]);
    $pass = htmlspecialchars($_POST["password"]);
    

    $signinManager = $signinManager->checkUser($name, $pass);

    
	if($signinManager != false){
		$userInfo = $signinManager->getIdFromName($name);

		$_SESSION["userId"] = $userInfo["ID"];
		$_SESSION["User_name"] = $userInfo["User_name"];
		$_SESSION["firstname"] = $userInfo["firstname"];
		$_SESSION["lastname"] = $userInfo["lastname"];
		echo $signinManager;
		die("success");
	}else{
		header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
		die("There was an error communicating with the server whild registering.");
	}

}





?>