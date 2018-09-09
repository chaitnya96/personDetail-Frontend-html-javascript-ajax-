
$(document).ready(function(){
$.ajax({
	type: "GET",
	url: "http://127.0.0.1:8080/api/person/",
	contentType: "application/json; charset=utf-8",
	dataType: "json",
    success: function(data,status) {
    	
    	for (var i = 0; i < data.length; i++) { 
    		console.log(data[i])
    		$("#tabdata").append(`<tr>
		        <td id="t1">`+data[i].First_name+`</td>
		        <td id="t2">`+data[i].organization+`</td>
		        <td id="t3">`+data[i].designation+`</td>
		        <td id="t4">`+data[i].date_of_birth+`</td>
		        <td id="t5">`+data[i].country+`</td>
		      </tr>`);
    	}
    },
   	
	});


	
	    
});