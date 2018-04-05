'use strict';

var http  = require('http'),
    https = require('https'),
    aws4  = require('aws4');
var rp   = require('request-promise');

var crypto = require('crypto'),
key = 'jenson';

var mongoose = require('mongoose'),
blacklistcheck = mongoose.model('blacklist'),
audit = mongoose.model('audit'),
ciservice = mongoose.model('ciservice'),
channel = mongoose.model('channel');



// var mongoose = require('mongoose'),
// audit = mongoose.model('audit');

var request = require('request');

exports.handlerequest = function(req, res) {
registerrequest(req,res);

};

exports.handlegetrequest = function(req, res) {
  // if (req.query["hub.verify_token"] === process.env.VERIFICATION_TOKEN) {
  //     console.log("Verified webhook");
  //     res.status(200).send(req.query["hub.challenge"]);
  // } else {
  //     console.error("Verification failed. The tokens do not match.");
  //     res.sendStatus(403);
  // }

  var token = req.body.token;
  console.log(token);

  channel.find({verificationToken : token}, function(err, ctask) {
    if (err){
      res.send(err);
    }else{
      if (ctask.length ===0){
          res.json({response :'The channel is not registered with Diana Server or the Token is Incorrect'});
      }else{
        console.log(ctask[0].enabled);
        if( ctask[0].enabled === 1){
          res.status(200)
        }else{
          res.json({response :'The '+ctask[0].name+' channel is not enabled. Please enable at Diana Server.'});
        }
      }

    };

});


};

function registerrequest(req,res) {

  //console.log(JSON.stringify(req.body));
  var token = req.body.verify_token;
  console.log(token);

  channel.find({verificationToken : token}, function(err, ctask) {
    if (err){
      res.send(err);
    }else{
      if (ctask.length ===0){
          res.json({response :'The channel is not registered with Diana Server or the Token is Incorrect'});
      }else{
        console.log(ctask[0].enabled);
        if( ctask[0].enabled === 1){
          req.body.channel = ctask[0];
          var count = req.body.channel.reqCount + 1;
        channel.update({name:req.body.channel.name}, {$set: { reqCount: count }},  {upsert: true}, function(err,task){
          if (err){
            console.log('Could not update channel req count'+ err);
          }
          else{
            console.log('req count incremented  ' + task);
            var auditdata = {channelName : req.body.channel.name, requestDate : new Date()} ;
            var auditinfo = new audit(auditdata);
            auditinfo.save(function(err, task) {
              if (err){
                console.log('Audit information could not be saved' + err);
              }else{
              console.log(task);
              req.body.auditid = task._id;
              console.log(req.body.auditid);
            }
            });
          }
        });



          handlelexrequest(req, res);

        }else{
          res.json({response :'The '+ctask[0].name+' channel is not enabled. Please enable at Diana Server.'});
        }
      }

    };

});

};

function handlelexrequest(req,res) {

  //console.log(req.body);
  var val = req.body.input;
  var channelid = req.body.channel.name;

      console.log('in');
    var    bodytext = '{"inputText" : "'+val+'" , "channelid" : "'+ channelid +'"}';
    console.log(bodytext);

  var opts = {
         host: 'runtime.lex.us-east-1.amazonaws.com',
         service: 'lex',
         region: 'us-east-1',
         uri: 'https://runtime.lex.us-east-1.amazonaws.com/bot/dianaBot/alias/dianaServer/user/shrimank/text',
         path: 'bot/dianaBot/alias/dianaServer/user/shrimank/text',
         body : bodytext
         };

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

             aws4.sign(opts, {
               accessKeyId: accessKeyId,
               secretAccessKey: secretAccessKey

             });

             console.log("Opts after sign");
             //console.log(opts);
             rp(opts)
             .then( (html)=>{
                console.log(typeof(html))
                //console.log(req.body);
                channel.update({name:req.body.channel.name}, {$inc: { successCount:  1 }},{upsert: true},  function(err){
                  if(err){
                    console.log('Could not update channel success count' + err);
                  }
                })
                //JSON.parse(html).timestamp = new Date();
                res.json(JSON.parse(html));
                var out = html;
              }
               )
             .catch( (e)=> {
               console.log('failed:'+e)
               channel.update({name:req.body.channel.name}, {$inc: { failCount: 1 }},{upsert: true}, function(err){
                 if(err){
                   console.log('Could not update channel fail count' + err);
                 }
               })
               res.json({response : e.message})
           });
           };
         });
           }
         });



}
