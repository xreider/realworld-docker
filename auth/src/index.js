const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { connectDb } = require('./helpers/db');
const { port, host, db, apiUrl } = require('./configuration');
const app = express();

const startServer = async () => {
  app.listen(port, async () => {
    console.log(`Started auth service on port ${port}`);
    console.log(`Started auth service on host ${host}`);
    console.log(`Started auth service our database ${db}`);
  });
};

app.get('/test', (req, res) => {
  res.send('Our auth server is working correctly');
});

app.get('/testwithapidata', (req, res) => {
  axios.get(apiUrl + '/testapidata').then((response) => {
    res.json({
      testapidata: response.data.testwithapidata,
    });
  });
});

app.get('/api/currentUser', (req, res) => {
  res.json({
    id: '1234',
    email: 'foo@gmail.com',
  });
});

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);
