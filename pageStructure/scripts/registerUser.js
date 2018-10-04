function registerUser(){
	var userName = document.getElementById("registerName").value;
	var userPassword = document.getElementById("registerEmail").value;
	var userEmail = document.getElementById("registerPassword").value;
	var userFirstName = document.getElementById("registerFirstname").value;
	var userLastName = document.getElementById("registerLastName").value;

	


	ajaxRequest("/StoreFront/pageStructure/php/registerUser.php", "name="+userName+"&password="
		+userPassword+"&email="+userEmail+
		"&firstName="+userFirstName+
		"&lastName="+userLastName, 
		function(responseText, status){
			if(status == 200){
				window.open("/StoreFront/home", "_self");
			}
	});
}





function ajaxRequest(phpCode, postData, onLoad){
	var xhr = new XMLHttpRequest();

	var postData = postData;

	xhr.open("POST", phpCode, true);

	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {//Call a function when the state changes.
	    if(this.readyState == XMLHttpRequest.DONE) {
	    	console.log(this.responseText);
	    	onLoad(this.responseText, this.status);
	    }
	}
	xhr.send(postData); 



}