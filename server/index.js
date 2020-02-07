const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../database/index.js');
const { PORT, PROXY_PORT } = require('../app.config.js');

const server = express();
const corsOptions = {
  origin: function (origin) {
    console.log(origin);
    return `http://localhost:${PROXY_PORT}`;
  },
};

server.use(morgan(':url'));
server.use(cors(corsOptions));
server.use(express.static(path.join(__dirname, '/../public')));
server.use('/:pageId', express.static(path.join(__dirname, '/../public')));

server.get('/reviews/:pageId', (req, res) => {
  console.log(req.params);
  db.getAllReviewsForPage(req.params.pageId, (err, results) => {
    if (err) {
      console.log('error from db query for reviews', err);
      res.send(err);
    } else {
      console.log(`db query returned ${results.length} results`);
      res.send(results);
    }
  });
});

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
