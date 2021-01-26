function leeJson(dirURL){
	var url = dirURL;
	var xmlhttp = new XMLHttpRequest();
	document.getElementById("ptext2").innerHTML = "nada1  " + url+ "-   ";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("ptext2").innerHTML = "nada2";
		var myObj = JSON.parse(this.responseText);
		document.getElementById("ptext2").innerHTML = myObj.name + " - " + myObj.age + " - " + myObj.city;
		}
		
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}