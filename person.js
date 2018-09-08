
$(document).ready(function(){
$.ajax({
	type: "GET",
	url: "http://127.0.0.1:8080/api/person/",
	contentType: "application/json; charset=utf-8",
	dataType: "json",
    success: function(data,status) {
    	$("#person").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#person").append(`<option id="person`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].First_name+" - "+data[i].division+`</option>`);
	    	}
    },
   	
	});
});