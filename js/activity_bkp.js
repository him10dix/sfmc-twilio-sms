// var connection = new Postmonger.Session();

// // Startup Sequence
// connection.trigger('ready');
// connection.on('initActivity', function(data){
  
// 	document.getElementById('phoneNumber').value = JSON.stringify(data, null, 2);
	
	
	
// });	
	
// // Save Sequence
// connection.on('clickedNext', function(){
// 	var phoneNumber = JSON.parse(document.getElementById('phoneNumber').value);
	
// 	connection.trigger('updateActivity', phoneNumber);
	
// });

// message



var connection = new Postmonger.Session();

// Startup Sequence
connection.trigger('ready');
connection.on('initActivity', function(data){
  
	//document.getElementById('message').value = JSON.stringify(data, null, 2);
	//document.getElementById('phoneNumber').value = 'Hello Paste the JSON HERE';
    document.getElementById('message').value = 'Yoooo';
    document.getElementById('phoneNumber').value = '+918299472525'
	
	
	
});	
	
// Save Sequence
connection.on('clickedNext', function(){
	var message = document.getElementById('message').value;

    /*message['metaData'] = {

        "icon": "https://test-sms-445915.ue.r.appspot.com/icon.png",
    
        "category": "message",
    
        "iconSmall": "",
    
        "original_icon": "icon.png",
    
        "isConfigured": true
    
      };*/

    var phoneNumber = document.getElementById('phoneNumber').value;


    // phoneNumber = {
    //     "inArguments": [
    //       {"contactKey": "{{Contact.Key}}" },
    //       {"TargetType": "{{Contact.Attribute.JourneyEntrySource.TargetType}}"},
    //       {"TargetId"  : "{{Contact.Attribute.JourneyEntrySource.TargetId}}"},
    //       {"PhoneNumber" : "{{Contact.Attribute.JourneyEntrySource.PhoneNumber}}"}
    //     ],
    //     "url": "https://demo.genetrix.tech/IVRCall/MakeCall.php"
    //   };
    
    message['arguments'] = phoneNumber;

	
	connection.trigger('updateActivity', message);
	
});

