const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const verificationController = require('./controllers/verification')
const messageWebhookController = require('./controllers/messageWebhook')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(__dirname + '/public/images/favicon.ico'))
app.get('/favicon.ico', (req, res) => res.status(204))

app.listen(3000, () => console.log("Webhook server is listening, port 3000"))

app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})



app.get('/webhook', verificationController)
app.post('/webhook', messageWebhookController)
