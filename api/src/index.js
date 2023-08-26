const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { connectDb } = require('./helpers/db');
const { port, host, db, authApiUrl } = require('./configuration');
const app = express();
const postSchema = new mongoose.Schema({
  name: String,
});
const Post = mongoose.model('Post', postSchema);

const startServer = async () => {
  app.listen(port, async () => {
    console.log(`Started api service on port ${port}`);
    console.log(`On host ${host}`);
    console.log(`Our database ${db}`);

    const posts = await Post.find({});

    if (!posts?.length) {
      const silence = new Post({ name: 'Silence' });
      silence.save().then(function (savedSilence) {
        console.log('savedSilence !!уцйуйцуйцуыаваыава', savedSilence);
      });
      console.log(silence);

      console.log('posts', posts);
    } else {
      console.log('posts length', posts.length);
      console.log('posts', posts);
    }
  });
};

app.get('/test', (req, res) => {
  res.send('Our api server is working correctly');
});

app.get('/testapidata', (req, res) => {
  res.json({
    testwithapidata: true,
  });
});

app.get('/testwithcurrentuser', (req, res) => {
  console.log('authApiUrl', authApiUrl);
  axios.get(authApiUrl + '/currentUser').then((response) => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data,
    });
  });
});

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);
