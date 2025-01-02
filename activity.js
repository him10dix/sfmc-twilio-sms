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

// hiddenconfiguration

// var connection = new Postmonger.Session();

// // Startup Sequence
// connection.trigger('ready');
// connection.on('initActivity', function(data){
  
// 	// document.getElementById('hiddenconfiguration').value = JSON.stringify(data, null, 2);
// 	document.getElementById('configuration').value = 'Hello Paste the JSON HERE';
// 	console.log("in initActivity")
	
	
// });	
	
// // Save Sequence
// connection.on('clickedNext', function(){
//     console.log("in clickedNext")
// 	// var hiddenconfiguration = JSON.parse(document.getElementById('hiddenconfiguration').value);

//     // hiddenconfiguration['metaData'] = {

//     //     "icon": "https://demo.genetrix.tech/IVRCall/icon.png",
    
//     //     "category": "message",
    
//     //     "iconSmall": "",
    
//     //     "original_icon": "icon.png",
    
//     //     "isConfigured": true
    
//     //   };

//     var configuration = JSON.parse(document.getElementById('configuration').value);


//     // configuration = {
//     //     "inArguments": [
//     //       {"contactKey": "{{Contact.Key}}" },
//     //       {"TargetType": "{{Contact.Attribute.JourneyEntrySource.TargetType}}"},
//     //       {"TargetId"  : "{{Contact.Attribute.JourneyEntrySource.TargetId}}"},
//     //       {"PhoneNumber" : "{{Contact.Attribute.JourneyEntrySource.PhoneNumber}}"}
//     //     ],
//     //     "url": "https://demo.genetrix.tech/IVRCall/MakeCall.php"
//     //   };
    
//     // hiddenconfiguration['arguments'] = configuration;

// 	console.log()
// 	connection.trigger('updateActivity', hiddenconfiguration);
	
// });

