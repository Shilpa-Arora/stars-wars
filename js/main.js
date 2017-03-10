// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF fired");
	var request;
	var request1;
	var content1 = document.querySelector("#characterimg");
	var content2 = document.querySelector("#characterdetail");
var content = document.querySelector("#characters");


	function showCharactersList(){
		request = create();
			
		if(request===null){
			alert("You are using outdated browser");
			return;
		}
		var url="http://swapi.co/api/people/?page=3";
		request.onreadystatechange=stateChangedList;
		request.open("GET", url, true);
		request.send(null);

	}
function stateChangedList(){
	if(request.readyState===4 || request.readyState==="complete"){
createList(request);

}
}

function createList(request){

	var charnames = JSON.parse(request.responseText);
console.log(charnames);
console.log(charnames.results[0].name);

	for (var i=0; i<charnames.results.length; i++){

		content.innerHTML += '<li><a href="#" data-charid="'+charnames.results[i].films[0]+'">'+charnames.results[i].name+'</a></li><hr>';

	}
	var anchors = content.querySelectorAll("a");
	console.log(anchors);
	for (var i=0; i <anchors.length; i++) {

		anchors[i].addEventListener("click", charDetail, false);
	}
}
/*names display up*/
function charDetail(e) {
	console.log("details called");
	
	e.preventDefault();
	var url = e.currentTarget.dataset.charid;
	console.log(url);
	request1 = create();
	if(request===null){
		alert("browser outdated");
return;
	}
	
	request1.onreadystatechange=stateChangedInfo;
	request1.open("GET",url,true);
	request1.send(null);
}
function stateChangedInfo(){
	if(request1.readyState===4 || request1.readyState==="complete"){
showInfo(request1);
	}
}
function showInfo (request1) {

	var detail = JSON.parse(request1.responseText);
console.log(detail.episode_id);


	content1.innerHTML ='<h2 class="hidden">Characters movie information: image</h2><img src="images/'+detail.episode_id+'.jpg" class="imgfilm" alt="no img">';
	content2.innerHTML = 
'<h2 class="hidden">Characters movie information: Movie detail</h2><h2>'+detail.title+"</h2><br><h4>Opening Crawl: "+detail.opening_crawl+"</h4><br><h4>Director:"+detail.director+"</h4><br><h4>Producer:"+detail.producer+"</h4><br><h4>Release Date: "+detail.release_date+"</h4>";}




showCharactersList();
})();