'use strict';

//var Regex = require("regex");
// var http  = require('http'),
//     https = require('https'),
//     aws4  = require('aws4');

var crypto = require('crypto'),
key = 'jenson';
var mongoose = require('mongoose'),
  //Task = mongoose.model('Tasks');
blacklistcheck = mongoose.model('blacklist');
//Task1 = mongoose.model();
//
// opts = {
//         host: 'runtime.lex.us-east-1.amazonaws.com',
// 		    //host:'10.10.69.203'
//         service: 'lex',
//         region: 'us-east-1',
//         path: '/lex',
//       };
// aws4.sign(opts,{accessKeyId:'AKIAIAQRC3ZWYZX3RAEA',
// secretAccessKey:'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'});

exports.handlerequest = function(req, res) {
  console.log(req.body);
  var val = req.body.input;

  blacklistcheck.find({}, function(err, task) {
    if (err){
      res.send(err);
    }else{
      //console.log(task);
      console.log(task.length);

      for (var i=0 ; i < task.length ; i++){
        var checkval = new RegExp(task[i].pattern.toString());
      //  console.log(task[i].pattern.toString());
      //  console.log(checkval);
      //  console.log(val);
//        console.log(checkval.test(val));
        //console.log(/^[0-9]{10}$/.test(val));

        if (checkval.test(val)) {
          var hash = crypto.createHmac('md5', key).update(val).digest('hex');
          var resp = hash + "  is a "+ task[i].name ;
          res.json({"resp": resp});
          }
      };
  res.json({"resp": val});
  }
  //res.json(task);
  });




};
