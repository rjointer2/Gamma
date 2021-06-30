
// port 

const _PORT = process.env.PORT || 3001;

// modules here

require('dotenv').config(); // .env file should be in the root folder

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const appServer = app.listen(_PORT, () => {
    console.log('listening')
});
const { ApolloServer } = require('apollo-server-express');
const io = require('socket.io')(appServer, {
    cors: {origin: `http://localhost:${_PORT}`}
});

// schema, resolver, typeDefs here

// Middleware

// app 

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
    console.log('test')
    io.on('connection', (socket) => {
        console.log('user created')
    });
}).catch(err => {
    console.log('failed')
    console.log(err)
});




