const redis = require("redis");
const axios = require("axios");
const express = require("express");
// Create a client

let client = redis.createClient();

client.on('connect', () => {
    console.log("Redis connection established...")
})

client.on('error', () => {
    console.log("An error occured connecting to Redis!")
})


// Set Port number
const portNumber = 8080

const app = express();
