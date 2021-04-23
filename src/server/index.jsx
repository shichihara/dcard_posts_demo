import https from 'https';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../client/App';
import cors from 'cors';
import axios from 'axios';
const app = express();

const port = process.env.port || 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/posts', async (req, res) => {
  const limit = req.query.limit;
  const popular = req.query.popular;
  const before = req.query.before || undefined;
  try {
    if (popular) {
      if (before) {
        const data = await axios.get('https://dcard.tw/_api/posts?popular=true'+ '&limit=' + limit + '&before=' + before)
        res.json(data.data);
      } else {
        const data = await axios.get('https://dcard.tw/_api/posts?popular=true'+ '&limit=' + limit)
        res.json(data.data);
      }
    } else {
      if (before) {
        const data = await axios.get('https://dcard.tw/_api/posts?limit=' + limit + '&before=' + before)
        res.json(data.data);
      } else {
        const data = await axios.get('https://dcard.tw/_api/posts?limit=' + limit)
        res.json(data.data);
      }
    }
    
  } catch(err) {
    console.log('error...', err)
    res.send(err);
  }
});

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter>
      <App/>
    </StaticRouter>
  );
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script crossorigin src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});