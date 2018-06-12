const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.listen(3000, () => console.log("Webhook server is listening, port 3000"));

app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

app.get('/webhook', function (req, res) {
  const hubChallenge = req.query['hub.challenge'];
  const hubMode = req.query['hub.mode'];

  const verifyTokenMatches = (req.query['hub.verify_token'] === "crowdbotics");
  if (hubMode && verifyTokenMatches) {
   res.status(200).send(hubChallenge);
   } else {
   res.status(403).end();
   }
})

app.get('/favicon.ico', (req, res) => res.status(204));
