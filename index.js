const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const dbd = require('dbd.js');
const bot = new dbd.Bot({
  "token": 'BOT TOKEN',
  "prefix": '*'
});

bot.onMessage();

bot.command({
  name: 'ping',
  code: `pong! \`$ping\``
});
