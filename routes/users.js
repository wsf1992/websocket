var express = require('express');
var router = express.Router();
var WebSocket = require('ws');

var wss = new WebSocket.Server({port: 8080})

/* GET users listing. */
router.get('/connect', function (req, res, next) {
  // res.send('respond with a resource');
  wss.on('connection', function connection(ws) {

  });
});

module.exports = router;
