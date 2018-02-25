const express = require('express');

const app = express();

const path = require('path');

exports.home = function(req, res, err){
   if (err) {
  //        console.log('Error in res : %s, status code: %s', err, res.statusCode);      
  //        res.write(err.status).end();
     }
      else {
            res.sendFile(path.join(__dirname + '/../view/index.html'));
      }
}