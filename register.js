$(document).ready(function(){
$.ajax({
	type: "GET",
	url: "http://127.0.0.1:8080/api/person/",
	contentType: "application/json; charset=utf-8",
	dataType: "json",
    success: function(data,status) {
    	$("#person").empty();
    		$("#person").append(`<option>select person</option>`)
	    	for (var i = 0; i < data.length; i++) {
	    		$("#person").append(`<option id="`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].First_name+`</option>`);
	    	}
	    	$("#person").change(function(){
    			console.log($(this).find(':selected').text());
    			if($("#person").prop('selectedIndex')==0){
    				$("input:text").val("");
    			}
    			for (var i = 0; i < data.length; i++) {
	    			if(data[i].First_name==$(this).find(':selected').text())
	    			{
	    				console.log(data[i].id)
	    				$('#fname').val(data[i].First_name);
	    				$('#lname').val(data[i].Last_name);
	    				$('#org').val(data[i].organization);
	    				$('#des').val(data[i].designation);
	    				$('#datepicker').val(data[i].date_of_birth);
	    				$('#state').val(data[i].state);
	    				$('#city').val(data[i].city);
	    				var country=data[i].country;
	    				$.ajax({
							type: "GET",
							url: "http://127.0.0.1:8080/api/location/",
							contentType: "application/json; charset=utf-8",
							dataType: "json",
						    success: function(data,status) {	
						    		for (var i = 0; i < data.length; i++) { 
						    			if(data[i].id==country)
						    			console.log(data[i].country)
						    			$('#count').val(data[i].country);
						    		}
						    } 

						});
	    				
	    			}

	    		}
	    	});
    },
   	
	});
});

$('#submit').click(function() { 
	if($("#person").prop('selectedIndex')!=0){
		// alert('not 0');
		// console.log($("#person").find(':selected').prop('id'));

		var ma= parseInt($("#person").find(':selected').prop('id'), 10)

		console.log(ma);

		$.ajax({
	    type: "PATCH",
	    url: "http://127.0.0.1:8080/api/person/",
	    data: JSON.stringify({"id":ma,"First_name": $('#fname').val(),"Last_name": $('#lname').val(),"organization": $('#org').val(),"designation": $('#des').val(),"date_of_birth": $('#datepicker').val(),"state": $('#state').val(),"city": $('#city').val(),"country": 1}),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data,status) {
	        console.log(data);
	        $("#successMessage").text("Your data successfully added");
	        alert("Your data successfully added");
	        
	    },
	    error: function(data,status){
	        console.log(data.responseText);
	
	    }
		});

	}
	else{
		// alert('index 0');

		//______________________________________________________________________________POST DATA
			$.ajax({
	    type: "POST",
	    url: "http://127.0.0.1:8080/api/person/",
	    data: JSON.stringify({"person_img": null,"First_name": $('#fname').val(),"Last_name": $('#lname').val(),"organization": $('#org').val(),"designation": $('#des').val(),"date_of_birth": $('#datepicker').val(),"state": $('#state').val(),"city": $('#city').val(),"country": 1}),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data,status) {
	        console.log(data);
	        $("#successMessage").text("Your data successfully added");
	        alert("Your data successfully added");
	        
	    },
	    error: function(data,status){
	        console.log(data.responseText);
	
	    }
		});

		
		// alert($('#fname').val())
	}
});


//srpatel@stral.in