const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const mesCont =require(`./controllers/messages_controller.js`)
const port = 3000;
const baseURL = '/api/messages'

app.use(bodyParser.json())


app.post(baseURL, mesCont.create)
app.get(baseURL, mesCont.read)
app.put(`${baseURL}/:id`, mesCont.update)
app.delete(`${baseURL}/:id`, mesCont.delete)

app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`)
});
