
// port 

const _PORT = process.env.PORT || 3001;

// modules here

require('dotenv').config(); // .env file should be in the root folder

const { ApolloServer } = require('apollo-server-express');
const io = require('socket.io')();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

io.on('connection', client => {
    client.emit('game', {
        data: 'hello world'
    })
});

io.listen(3000);


// schema, resolver, typeDefs here



// Middleware


// app 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));






// Database connection

/* 

    For Contributors please modularize this code in the config
    and get the .env vars from scrum lead

*/

mongoose.connect(`mongodb+srv://${process.env.UN}:${process.env.PW}@cluster0.kufxl.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(_PORT, () => {
        console.log('Listening for request')
    })
}).catch(err => {
    console.log('failed')
    console.log(err)
});


module.exports = mongoose.connection; 


