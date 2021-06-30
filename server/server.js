
// port 

const _PORT = process.env.PORT || 3001;

// modules here

require('dotenv').config(); // .env file should be in the root folder

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Express will be invoked in the top level of the file and 
// stored in a instance of appServer 
const app = express();
const appServer = app.listen(_PORT, () => { 
    // appServer will be passed in 
    // the HOF's arg              
    console.log('listening')
});
const { ApolloServer } = require('apollo-server-express');
const io = require('socket.io')(appServer, {
    // from here the server is instantiated with from the app 
    // instance created in the top level
    cors: {origin: `http://localhost:${_PORT}`}
});

// schema, resolver, typeDefs here

// Middleware

/* 

    App Middleware and Request Method can be used normally
    from the app reference in the top level

    // Development Testing Below!

*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Database connection

/* 

    For Contributors please modularize this code in the config
    and get the .env vars from scrum lead

*/

mongoose.connect(`mongodb+srv://${process.env.UN}:${process.env.PW}@cluster0.kufxl.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('test');
    // When the client request hit the server, the socket is instantiated
    io.on('connection', (socket) => {
        console.log('user created')
    });
}).catch(err => {
    console.log('failed')
    console.log(err)
});




