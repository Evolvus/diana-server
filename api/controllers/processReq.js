'use strict';

var http  = require('http'),
    https = require('https'),
    aws4  = require('aws4');
var rp   = require('request-promise');

var crypto = require('crypto'),
key = 'jenson';

var mongoose = require('mongoose'),
blacklistcheck = mongoose.model('blacklist');

var mongoose = require('mongoose'),
ciservice = mongoose.model('ciservice');

var request = require('request');

exports.handlerequest = function(req, res) {
  console.log(req.body);
  var val = req.body.input;
      console.log('in');
    var    bodytext = '{"inputText" : "'+val+'"}';
    console.log(bodytext);

  var opts = {
         host: 'runtime.lex.us-east-1.amazonaws.com',
         service: 'lex',
         region: 'us-east-1',
         uri: 'https://runtime.lex.us-east-1.amazonaws.com/bot/dianaBot/alias/dianaServer/user/shrimank/text',
         path: 'bot/dianaBot/alias/dianaServer/user/shrimank/text',
         body : bodytext
         };
         console.log(opts.body);

         blacklistcheck.find({}, function(err, task) {
           if (err){
             res.send(err);
           }else{

             for (var i=0 ; i < task.length ; i++){
                 var checkval = new RegExp(task[i].pattern.toString());
                 if (checkval.test(val)) {
                  res.json({response :'You have entered something blacklisted - ' +task[i].name });
                }
              };

              var hash = crypto.createHmac('md5', key).update(val).digest('hex');
              var resp = hash;

             ciservice.find({name : "Lex"}, function(err, task) {
               if (err){
                 res.send(err);
               }else{
                 var accessKeyId  = task[0].accessKey;
                 var secretAccessKey = task[0].secretKey;

             console.log(opts);
             aws4.sign(opts, {
               accessKeyId: accessKeyId,
               secretAccessKey: secretAccessKey

             });

             console.log("Opts after sign" +opts);
             rp(opts)
             .then( (html)=>{
                console.log(typeof(html))
                res.json(JSON.parse(html));
                var out = html;
              }
               )
             .catch( (e)=> console.log('failed:'+e));
           };
         });
           }
         });
};
