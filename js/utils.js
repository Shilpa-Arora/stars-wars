// JavaScript Document

//utility function to create AJAX request/XHR object

function create() {
	"use strict";
	var request;
	
	try {
		request = new XMLHttpRequest();
	  } catch(e) {
		try {
		 request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
		 		request = new ActiveXObject("Microsoft.XMLHTTP");
			} 	catch(e) {
				request = null;
			
		}
	}
}
	return request;
}
