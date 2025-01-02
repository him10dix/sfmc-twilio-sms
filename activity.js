var connection = new Postmonger.Session();

// // Startup Sequence
connection.trigger('ready');
connection.on('initActivity', function(data){
  
	document.getElementById('configuration').value = JSON.stringify(data, null, 2);
	console.log("in initActivity");
	
	
});	
	
// Save Sequence
connection.on('clickedNext', function(){
	var configuration = JSON.parse(document.getElementById('configuration').value);
	console.log("in clickedNext");
    console.log("configuration");
	connection.trigger('updateActivity', configuration);
	
});



