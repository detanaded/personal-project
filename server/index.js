require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session')
const{SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))




massive(CONNECTION_STRING).then((database) =>{
  app.set('db', database)
  console.log('Pepebase Set!')
  app.listen(SERVER_PORT, () => {console.log(`Pepe Memin on ${SERVER_PORT}!`)})
})


