const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const twilio = require('twilio');
const FuelRest = require('fuel-rest');
var path        = require('path');

const app = express();
const twilioAccountSid = 'AC93765b6dd521f2a7bb8aa7ada7f868a8';
const twilioAuthToken = '54c6c73106a09a0526f8e006c5a78b66';
const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', async (req, res) => {
    // res.status(200).send({
    //     status: 'ok',
    //     messageSid: "Hellpo"
    //   });
    
    console.log('In home page!');
    res.render('index.html');
    
});

// This will handle the request when Journey Builder makes the API call
app.post('/custom-activity', async (req, res) => {
    console.log('In custom activity!');
    const { inArguments } = req.body;
  console.log(req.body);
  // Extract data from Journey Builder's payload
  const toPhoneNumber = inArguments[0].phoneNumber;
  const smsMessage = inArguments[0].message;
// const toPhoneNumber="+918299472525"
// const smsMessage= "hello him10dix"
  // Send SMS using Twilio
  twilioClient.messages
    .create({
      body: smsMessage,
      from: '+12315592893',
      to: toPhoneNumber
    })
    .then((message) => {
      res.status(200).send({
        status: 'ok',
        messageSid: message.sid
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: 'error',
        message: err.message
      });
    });

//   try {
//     // Make an external API call (for example, sending SMS via Twilio)
//     const response = await axios.post('https://external-api.com/send-sms', {
//       phoneNumber: phoneNumber,
//       message: message
//     });

//     // Respond to SFMC Journey Builder with success status
//     res.status(200).json({ status: 'ok', messageSid: response.data.sid });
//   } catch (error) {
//     // Handle any errors and respond to SFMC with failure status
//     res.status(500).json({ status: 'error', error: error.message });
//   }
});

// Define the server's listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Custom Activity API listening on port ${port}`);
});
