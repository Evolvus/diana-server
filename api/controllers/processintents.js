'use strict';

var mongoose = require('mongoose'),
blacklistcheck = mongoose.model('blacklist'),
audit = mongoose.model('audit'),
ciservice = mongoose.model('ciservice'),
channel = mongoose.model('channel');


exports.handleintents = function(req, res) {
  console.log(req.body);
  //var val = req.body.input;
  //res.json({"intentname": val});
  ///////////





  //exports.handler = (event, context, callback) => {
      // console.log(event);
      //
      // context.callbackWaitsForEmptyEventLoop = false;

      // var request = event;
      var request = req;//JSON.stringify(req.body);

      console.log(request);

      // ciservice.update({name:req.body.channel.name}, {$inc: { failCount: 1 }},{upsert: true}, function(err){
      //   if(err){
      //     console.log('Could not update channel fail count' + err);
      //   }
      //   else {
      //
      //   }
      // })

      console.log(typeof(JSON.stringify(req.body.input)));
      //request.sessionAttributes = request.sessionAttributes === null ? {} : request.sessionAttributes;

      //request.userId ='Evolvus';
      var intentName = request.body.input.currentIntent.name;
      console.log(`You Intent is :${intentName}`);
      var input = request.body.input;
      console.log("input :>>>>>>>",input);
      var requestAttributes = request.body.input.requestAttributes;
      console.log("requestAttributes :>>>>>>>",requestAttributes);

      var auditid = request.body.input.requestAttributes.auditid;
      console.log("auditid :>>>>>>>",auditid);
      switch (intentName) {
        //// required

          case 'LambdaTest':
              console.log('Entered GreetIntent Execution Block');
              handleGreetIntent(request, res);
              break;

              case 'LambdaNew':
                  console.log('Entered GreetIntent Execution Block');
                  handleLambdaNewIntent(request, res);
                  break;


          case 'CustACCIntent':
              console.log('Entered CustACCIntent Execution Block');
              handleCustACCIntent(request, callback);
              break;

          case 'CustAuthIntent':
              console.log('Entered CustAuthIntent Execution Block');
              handleCustAuthIntent(request, callback);
              break;

          case 'getotp':
              console.log('Entered GetCustAuthIntent Execution Block');
              handleGetCustAuthIntent(request, callback);
              break;

          case 'genotp':
              console.log('Entered GetCustAuthIntent Execution Block');
              handlegenotpIntent(request, callback);
              break;

          case 'GetBalIntentnew':
              console.log('Entered GetBalIntent Execution Block');
              handleGetBalIntent(request, callback);
              break;

          case 'getCustAccIntentnew':
              console.log('Entered getCustAccIntent Execution Block');
              handlegetCustAccIntent(request, callback);
              break;

          case 'disconnectIntentnew':
              console.log('Entered disconnectIntent Execution Block');
              handledisconnectIntent(request, callback);
              break;


  /////////Not required



          case 'GetCustAuthIntentnew':
              console.log('Entered GetCustAuthIntent Execution Block');
              handleGetCustAuthIntent(request, callback);
              break;

  ///////////////


          default:
              handleDefault(request, callback);
              break;
      }


      // callback(null, 'Hello from Lambda');
  };


  ////////////////
  function handleGreetIntent(request, res) {
        console.log('Start handleGreetIntent');
  console.log(`request ${request}`);

        //var msg1 = date < 12 ? 'Good Morning' : date < 18 ? 'Good Afternoon' : 'Good Night';
        // console.log('connect to Mongo Db server');
        //
        //
        // console.log('Token:', PAGE_ACCESS_TOKEN);
        // // https.get('https://graph.facebook.com/v2.6/' + request.userId + '?fields=first_name,last_name&access_token=' + PAGE_ACCESS_TOKEN,
        //
        //
        //     (res) => {
        //       //  console.log('res:', res);
        //         console.log('headers:', res.headers);
        //         res.on('data', (d) => {
        //             //console.log(d);
        //             request.sessionAttributes.userFirstName = JSON.parse(d).first_name;
        //             request.sessionAttributes.custuserid=request.userId;
        //
        //             var custuserid1=request.sessionAttributes.custuserid;
        //             console.log(`sessionAttributes:${request.sessionAttributes.userFirstName}`);
        //
        //             console.log(`sessionAttributes:${request.sessionAttributes.custuserid}`);
        //             console.log(custuserid1);
        //
        // CustomerAccDetails.find({
        //     userid:custuserid1
        // }).then((docs) => {
        //         console.log('Data got fetched from the database' + docs.length);
        //         console.log(JSON.stringify(CustomerAuthDetails, undefined, 2));
        //         var userFirstName = request.sessionAttributes.userFirstName;
        //         console.log(`userFirstName:${userFirstName}`);
        //
        //         if (docs.length === 0) {
        //             var response = {
        //                 'contentType': 'PlainText',
        //                 'content': `Hi ${userFirstName},${msg1}, I see that you are not registered as a Diana customer. to validate Facebook Banking registeration details please type Register or Reg.`
        //             };
        //             console.log(`Response :${JSON.stringify(response)}`);
        //             callback(null, close(sessionAttributes, 'Fulfilled', response));
        //         } else {
        //           var cifofuser = `${docs[0].cifid}`;
        //           console.log(docs);
        //           request.sessionAttributes.cifidd = `${cifofuser}`;
        //           var nameofuser = `${docs[0].customer_Name}`;
        //           request.sessionAttributes.coreusername = `${nameofuser}`;
        //           console.log(request.sessionAttributes.coreusername);
        //
        //                     var response = {
        //                         'contentType': 'PlainText',
        //                         'content': `Hi ${request.sessionAttributes.coreusername},${msg1} You are already registered for facebook banking.I am here to help you on your Accounts services and other Banking information from ABC Bank.Please type in the following for me to understand the nature of your query. Type Balance for knowing your balance, transfers for initiating a transfer or statement for knowing last 5 transactions.`
        //                     };
        //                     console.log(`Response :${JSON.stringify(response)}`);
        //                     callback(null, close(sessionAttributes, 'Fulfilled', response));
        //                   }
        //
        //                                 },
        //                                 (e) => {
        //                                     var response = {
        //                                         'contentType': 'PlainText',
        //                                         'content': `Something went wrong `
        //                                     };
        //                                     console.log('Unable to fetch Data from database', e);
        //                                     console.log(`Response :${JSON.stringify(response)}`);
        //                                     callback(null, close(sessionAttributes, 'Fulfilled', response));
        //                                 });
        //                          });
        //
        //     }).on('error', (e) => {
        //     console.error(e);
        // });

var val = `HI This is response from diana server`
res.json({"callbackMessage": val});
  }

///////////
function handleLambdaNewIntent(request, res) {
      console.log('Start handleLambdaNewIntent');
      console.log(request);
      var auditid = request.body.input.requestAttributes.auditid;
console.log(`request ${auditid}`);
// audit.find({_id : auditid}, function(err, ctask) {
//   console.log('inside find');
//   console.log(ctask);
//   if (err){
//     res.send(err);
//   }else{
audit.update({_id : auditid}, {$set: { ciserviceName: "Lex" ,requestData :"request1",responseData : "responseData1",userName :"userName1",requestDate : new Date()}},  {upsert: true}, function(err,task){
  if (err){
    console.log('Could not update channel req count'+ err);
  }
  else{
  //  res.json({response :'The '+ctask[0].name+' channel is not enabled. Please enable at Diana Server.'});
  //  console.log('Data got fetched from the database' + docs.length);
  var val = `HI This is response from handleLambdaNewIntent server`
  res.json({"callbackMessage": val});
  }
// });

});

}



//////////

  //////////handleCust_ACC_Intent
  function handleCustACCIntent(request, callback) {
      console.log('Start CustACCIntent');
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);
      var msg = `Your Registration has been added successfully`;
      console.log('connect to Mongo Db server');
      var Customeraccdetails = new CustomerAccDetails({
          cifid: `${request.currentIntent.slots.cifid}`,
          salutation: `${request.currentIntent.slots.salutation}`,
          civil_ID: `${request.currentIntent.slots.civil_ID}`,
          customer_Name: `${request.currentIntent.slots.customer_Name}`,
          accounts: `${request.currentIntent.slots.accounts}`,
          accountname: `${request.currentIntent.slots.accountname}`,
          accountcurrency: `${request.currentIntent.slots.accountcurrency}`,
          accounttype: `${request.currentIntent.slots.accounttype}`,
          productcode: `${request.currentIntent.slots.productcode}`,
          AccoutBal: `${request.currentIntent.slots.AccoutBal}`,
          userid: `${request.currentIntent.slots.userid}`

      });
      Customeraccdetails.save().then((doc) => {
          console.log('Data got saved into the database');
          console.log(JSON.stringify(Customeraccdetails, undefined, 2));
          var response = {
              'contentType': 'PlainText',
              'content': `Hi ${request.userId},${msg} !!`
          };
          console.log(`Response :${JSON.stringify(response)}`);
          console.log(`callback start`);
          callback(null, close(sessionAttributes, 'Fulfilled', response));
          console.log(`callback end`);

      }, (e) => {
          var response = {
              'contentType': 'PlainText',
              'content': `Hi ${request.userId},${msg} !!`
          };
          callback(null, close(sessionAttributes, 'Fulfilled', response));
      });

  }


  ///////////
  //////////handleCust_Auth_Intent
  function handleCustAuthIntent(request, callback) {
      console.log('Start CustAuthIntent');
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);

      var msg = `Your Cust_Auth has been added successfully`;
      console.log('connect to Mongo Db server');
      var Customerauthdetails = new CustomerAuthDetails({
          cifid: `${request.currentIntent.slots.cifid}`,
          facebookid: `${request.currentIntent.slots.facebookid}`,
          twitterid: `${request.currentIntent.slots.twitterid}`,
          amazonid: `${request.currentIntent.slots.amazonid}`,
          googleid: `${request.currentIntent.slots.googleid}`,
          ques1: `${request.currentIntent.slots.ques1}`,
          ques2: `${request.currentIntent.slots.ques2}`,
          ques3: `${request.currentIntent.slots.ques3}`,
          ans1: `${request.currentIntent.slots.ans1}`,
          ans2: `${request.currentIntent.slots.ans2}`,
          ans3: `${request.currentIntent.slots.ans3}`,
          OTPbyemail: `${request.currentIntent.slots.OTPbyemail}`,
          EmailIdForAuth: `${request.currentIntent.slots.EmailIdForAuth}`,
          OTPbySMS: `${request.currentIntent.slots.OTPbySMS}`,
          RegisterMobile: `${request.currentIntent.slots.RegisterMobile}`,
          otp: `${request.currentIntent.slots.otp}`
      });

      Customerauthdetails.save().then((doc) => {
          console.log('Data got saved into the database');
          console.log(JSON.stringify(Customerauthdetails, undefined, 2));
          var response = {
              'contentType': 'PlainText',
              'content': `Hi ${request.userId},${msg} !!`
          };
          console.log(`Response :${JSON.stringify(response)}`);

          console.log(`callback start`);
          callback(null, close(sessionAttributes, 'Fulfilled', response));
          console.log(`callback end`);
      }, (e) => {
          var response = {
              'contentType': 'PlainText',
              'content': `Hi ${request.userId},${msg} !!`
          };
          callback(null, close(sessionAttributes, 'Fulfilled', response));
      });
  }
  // // ////////////

  //check cust registration details
  function handlegetCustAccIntent(request, callback) {
      console.log('Start handlegetCustAccIntent');
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);
      var msg1 = date < 12 ? 'Good Morning' : date < 18 ? 'Good Afternoon' : 'Good Night';
      var msg = `Your Registration has been added successfully`;
      console.log('connect to Mongo Db server');
    var faceid = `${request.currentIntent.slots.facebookid}`;
  //var faceid = `abcd@gmail.com`;
      //request.sessionAttributes.fid = faceid;
      request.sessionAttributes.fbid1 = `${request.currentIntent.slots.facebookid}`;
      console.log('facebook id is ' + faceid);

      console.log('Token:', PAGE_ACCESS_TOKEN);
      https.get('https://graph.facebook.com/v2.6/' + request.userId + '?fields=first_name,last_name&access_token=' + PAGE_ACCESS_TOKEN,


          (res) => {
              console.log('res:', res);
              console.log('headers:', res.headers);
              res.on('data', (d) => {
                  console.log(d);
                  request.sessionAttributes.userFirstName = JSON.parse(d).first_name;
                  console.log(`sessionAttributes:${request.sessionAttributes.userFirstName}`);
                  // use below code to resend the reply
                  //callSendAPI(messageData);
              });

          }).on('error', (e) => {
          console.error(e);
      });

      CustomerAuthDetails.find({
          facebookid: faceid
      }).then((docs) => {
              console.log('Data got fetched from the database' + docs.length);
              console.log(JSON.stringify(CustomerAuthDetails, undefined, 2));
              var userFirstName = request.sessionAttributes.userFirstName;
              console.log(`userFirstName:${userFirstName}`);

              if (docs.length === 0) {
                  var response = {
                      'contentType': 'PlainText',
                      'content': `Hi ${userFirstName},${msg1}, I see that you are not registered as a Facebook Chat customer with ABC Bank.For account specific details you need to register for Facebook Banking service – By either visiting you internet Banking page https://s3.amazonaws.com/dianaci/index.html or visiting the nearest Branch.Thank You.`
                  };
                  console.log(`Response :${JSON.stringify(response)}`);
                  callback(null, close(sessionAttributes, 'Fulfilled', response));
              } else {
                var cifofuser = `${docs[0].cifid}`;

                console.log(cifofuser);
                CustomerAccDetails.find({
                    cifid: cifofuser
                }).then((doc) => {
                    console.log('in for balance');
                    var nameofuser = `${doc[0].customer_Name}`;
                    request.sessionAttributes.coreusername = `${nameofuser}`;
                    console.log(request.sessionAttributes.coreusername);
    },
    (e) => {
        var response = {
            'contentType': 'PlainText',
            'content': `Something went wrong `
        };
        console.log('Unable to fetch Data from database', e);
        console.log(`Response :${JSON.stringify(response)}`);
        callback(null, close(sessionAttributes, 'Fulfilled', response));
    });
                  console.log(docs);
                  console.log(docs[0].cifid);
                  console.log('in for otp');
                  var otpGen = random(999999, 111111);
                  console.log(otpGen);

                  request.sessionAttributes.otp = `${otpGen}`;
                  console.log(docs);

                  var mobileofuser = `${docs[0].RegisterMobile}`;
                  var otpofuser = `${docs[0].otp}`;
                  console.log(mobileofuser);
                  console.log(`${docs[0].RegisterMobile}`);
                  console.log(`otp is :${otpGen}`);
                  console.log(`${docs[0].otp}`);

                  var sns = new AWS.SNS();
                  var params = {
                      Message: `Dear ${userFirstName}, you details is updated with DIANA Server for ABC Bank facebook banking services.`,
                      MessageStructure: 'string',
                      PhoneNumber: `${mobileofuser}`,
                      Subject: 'Reference'
                  };

                  sns.publish(params, function(err, data) {
                      if (err) {
                          console.log(err, err.stack);
                      } // an error occurred
                      else {
                          console.log(data);
                          var custuserid1=request.sessionAttributes.custuserid;
                          console.log(custuserid1);
                        // successful response
                        CustomerAccDetails.update({cifid: cifofuser},{userid:custuserid1},{multi:true},(err)=> {
                            if(err) {
                              console.log(err);
                            } else {
                                console.log("updated successfully");


                          var response = {
                              'contentType': 'PlainText',
                              'content': `Hi ${request.sessionAttributes.coreusername},${msg1} You are already registered for facebook banking . We have updated your details with diana, I am here to help you on your Accounts services and other Banking information from ABC Bank.Please type in the following for me to understand the nature of your query. Type Balance for knowing your balance, transfers for initiating a transfer or statement for knowing last 5 transactions.`
                          };
                          console.log(`Response :${JSON.stringify(response)}`);
                          callback(null, close(sessionAttributes, 'Fulfilled', response));
                        }

                                      })
                      }
                  });

                  console.log(params);
                  console.log(params.PhoneNumber);
              }
          },
          (e) => {
              var response = {
                  'contentType': 'PlainText',
                  'content': `Something went wrong `
              };
              console.log('Unable to fetch Data from database', e);
              console.log(`Response :${JSON.stringify(response)}`);
              callback(null, close(sessionAttributes, 'Fulfilled', response));
          });
  }

  //////////

  function handleGetCustAuthIntent(request, callback) {
      console.log('Start handleGetCustAuthIntent');
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);
      const slots = request.currentIntent.slots;
      var cnt = 0;
      var otpGen = request.sessionAttributes.otp;

      var faceid = `${request.sessionAttributes.fbid1}`;
      //var faceid = `abcd@gmail.com`;
      console.log('facebook id is ' + faceid);
      console.log('facebook id is ' + request.sessionAttributes.fbid1);
      console.log('connect to Mongo Db server');
      var otp11 = `${request.currentIntent.slots.otp}`;
      console.log(`Slot OTP: ${otp11}`);
      console.log(`Gen OTP:${otpGen}`);
  ////////////

  var cifofuser= `${request.sessionAttributes.cifidd}` ;

      if (otpGen === otp11) {

          CustomerAuthDetails.find({
              cifid: cifofuser}).then((docs) => {


              console.log('Data got fetched from the database ' + docs.length);
              console.log(JSON.stringify(CustomerAuthDetails, undefined, 2));
              if (docs.length !== 0) {

                  cnt = cnt + 1;
                  var cifofuser = `${docs[0].cifid}`;

                  console.log(cifofuser);
                  CustomerAccDetails.find({
                      cifid: cifofuser
                  }).then((doc) => {
                      console.log('in for balance');
                      var nameofuser = `${doc[0].customer_Name}`;
                      var balofuser = `${doc[0].AccoutBal}`;
                      var salofuser = `${doc[0].salutation}`;
                      var accounttype = `${doc[0].accounttype}`;
                      var accountcurrency = `${doc[0].accountcurrency}`
                      var accountNumber = `${doc[0].accounts}`;
                      accountNumber = accountNumber.replace(accountNumber.substring(4, 7), "*****");
                      console.log(balofuser);
                      console.log(`${doc[0].AccountBal}`);

                      if (doc.length === 1) {
                          console.log('got rec' + doc);
                          console.log(balofuser);
                          console.log(`${doc[0].AccountBal}`);
                          //console.log(AccountBal}`;);

                          var response = {

                              'contentType': 'PlainText',
                              'content': `${salofuser} ${nameofuser}, Your Balance in the ${accounttype} account ${accountNumber} is ${balofuser} ${accountcurrency}.
                Is there anything else I can help you with`

                          };
                          console.log(`Response :${JSON.stringify(response)}`);
                          callback(null, close(sessionAttributes, 'Fulfilled', response));
                      } else if (doc.length === 2) {
                          console.log('got rec' + doc);
                          console.log(balofuser);
                          //console.log(AccountBal}`;);

                          var response = {
                              'contentType': 'PlainText',
                              'content': `Dear ${nameofuser} currently have multiple accounts in ABC Bank, is your enquiry on a specific Account ? or do I read you Balances of all accounts`

                          };
                          console.log(`Response :${JSON.stringify(response)}`);
                          callback(null, close(sessionAttributes, 'Fulfilled', response));
                      } else {

                          var response = {
                              'contentType': 'PlainText',
                              'content': `Accout balance details are not present`
                          };
                          console.log(`Response :${JSON.stringify(response)}`);
                          callback(null, close(sessionAttributes, 'Fulfilled', response));

                      }
                  }, (e) => {
                      var response = {
                          'contentType': 'PlainText',
                          'content': `Something went wrong in fetching account bal`
                      };
                      console.log('Unable to fetch Data from database', e);
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                  })


              } else {
                  var response = {
                      'contentType': 'PlainText',
                      'content': `We regret to inform you that Facebook banking details is not available.
            Thank You.`
                  };
                  console.log(`Response :${JSON.stringify(response)}`);
                  callback(null, close(sessionAttributes, 'Fulfilled', response));
              }
          }, (e) => {
              var response = {
                  'contentType': 'PlainText',
                  'content': `Something went wrong `
              };
              console.log('Unable to fetch Data from database', e);
              console.log(`Response :${JSON.stringify(response)}`);
              callback(null, close(sessionAttributes, 'Fulfilled', response));
          })
      } else {
          var response = {
              'contentType': 'PlainText',
              'content': `We regret to inform you that the OTP is not correct Thank You. Is there anything else I can help you with? Type Balance for knowing your balance, type Transfers for initiating a transfer or statement for knowing last 5 transactions. `
          };
          console.log(`Response :${JSON.stringify(response)}`);
          callback(null, close(sessionAttributes, 'Fulfilled', response));
      }
  }


  /////////////

  function handleGetBalIntent(request, callback) {
      console.log('Start handleGetBalIntent');
      console.log(request);
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);
      const slots = request.currentIntent.slots;
      var cnt = 0;
      console.log('connect to Mongo Db server');
      var cifofuser= `${request.sessionAttributes.cifidd}` ;

      //var faceid = `${request.sessionAttributes.fid}`;
      var faceid = `${request.sessionAttributes.fbid1}`;
      // var faceid = `abcd@gmail.com`;
      console.log('facebook id is ' + faceid);

      CustomerAuthDetails.find({
          cifid: cifofuser
      }).then((docs) => {
          console.log('Data got fetched from the database ' + docs.length);
          console.log(JSON.stringify(CustomerAuthDetails, undefined, 2));

          if (docs.length !== 0) {

              cnt = cnt + 1;
              var cifofuser = `${docs[0].cifid}`;

              console.log(cifofuser);
              CustomerAccDetails.find({
                  cifid: cifofuser
              }).then((doc) => {
                  console.log('in for balance');
                  var nameofuser = `${doc[0].customer_Name}`;
                  var salofuser = `${doc[0].salutation}`;
                  var accounttype = `${doc[0].accounttype}`;
                  var accounttype2 = `${doc[1].accounttype}`;
                  var accountcurrency = `${doc[0].accountcurrency}`
                  var accountcurrency2 =`${doc[1].accountcurrency}`
                  var balofuser = `${doc[0].AccoutBal}`;
                  var balofuser2 = `${doc[1].AccoutBal}`;
                  var accountNumber = `${doc[0].accounts}`;
                  accountNumber = accountNumber.replace(accountNumber.substring(3, 4), "*****");
                  var accountNumber2 = `${doc[1].accounts}`;
                  accountNumber2 = accountNumber2.replace(accountNumber2.substring(3, 4), "*****");
                  var inputTranscript = '${request.inputTranscript}';
                  console.log(balofuser);
                  console.log(`${doc[0].AccountBal}`);
                  console.log(request.inputTranscript);
                  console.log(`inputTranscript:${inputTranscript}`);

                  if (`${accounttype}` === request.inputTranscript) {
                      console.log('got rec' + doc);
                      console.log(balofuser);
                      console.log(`${doc[0].AccountBal}`);

                      var response = {
                          'contentType': 'PlainText',
                          'content': `${salofuser} ${nameofuser}, Your Balance in the ${accounttype} account ${accountNumber} is ${balofuser} ${accountcurrency}.Is there anything else I can help you with`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                  } else if (`${accounttype}` === request.inputTranscript) {
                      console.log('got rec' + doc);
                      console.log(balofuser);
                      console.log(`${doc[0].AccountBal}`);

                      var response = {
                          'contentType': 'PlainText',
                          'content': `${salofuser} ${nameofuser}, Your Balance in the ${accounttype} account ${accountNumber} is ${balofuser} ${accountcurrency}.Is there anything else I can help you with`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                  } else if (`${accounttype2}` == request.inputTranscript) {
                      console.log('got rec' + doc);
                      //console.log(AccountBal}`;);
                      var response = {
                          'contentType': 'PlainText',
                          'content': `${salofuser} ${nameofuser}, Your Balance in the ${accounttype2} account ${accountNumber2} is ${balofuser2} ${accountcurrency2}.Is there anything else I can help you with`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                  } else if (`${accounttype2}` == request.inputTranscript) {
                      console.log('got rec' + doc);
                      //console.log(AccountBal}`;);
                      var response = {
                          'contentType': 'PlainText',
                          'content': `${salofuser} ${nameofuser}, Your Balance in the ${accounttype2} account ${accountNumber2} is ${balofuser2} ${accountcurrency2}.Is there anything else I can help you with`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                  } else {
                      var response = {
                          'contentType': 'PlainText',
                          'content': `${salofuser} ${nameofuser},Your Balance in the ${accounttype} account ${accountNumber} is ${balofuser} ${accountcurrency}.Your Balance in the ${accounttype2} account ${accountNumber2} is ${balofuser2} ${accountcurrency2}.Is there anything else I can help you with`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));

                  }
              }, (e) => {
                  var response = {
                      'contentType': 'PlainText',
                      'content': `Something went wrong in fetching account bal`
                  };
                  console.log('Unable to fetch Data from database', e);
                  console.log(`Response :${JSON.stringify(response)}`);
                  callback(null, close(sessionAttributes, 'Fulfilled', response));
              })
          } else {
              var response = {
                  'contentType': 'PlainText',
                  'content': `Something went wrong Thank You.`
              };
              console.log(`Response :${JSON.stringify(response)}`);
              callback(null, close(sessionAttributes, 'Fulfilled', response));
          }
      }, (e) => {
          var response = {
              'contentType': 'PlainText',
              'content': `Something went wrong `
          };
          console.log('Unable to fetch Data from database', e);
          console.log(`Response :${JSON.stringify(response)}`);
          callback(null, close(sessionAttributes, 'Fulfilled', response));
      })
  }


  ///////////

  function handledisconnectIntent(request, callback) {

      console.log('Start handledisconnectIntent');
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);
      var cifofuser= `${request.sessionAttributes.cifidd}` ;

      //var faceid = `${request.sessionAttributes.fbid1}`;
      console.log('cifofuser id is ' + cifofuser);

      CustomerAuthDetails.find({
            cifid: cifofuser
      }).then((docs) => {
          console.log('Data got fetched from the database ' + docs.length);
          console.log(JSON.stringify(CustomerAuthDetails, undefined, 2));
          if (docs.length !== 0) {

              var cifofuser = `${docs[0].cifid}`;

              console.log(cifofuser);
              CustomerAccDetails.find({
                  cifid: cifofuser
              }).then((doc) => {
                  console.log('in for details');
                  if (doc.length !== 0) {
                      console.log('got rec' + doc);
                      var nameofuser = `${doc[0].customer_Name}`;
                      var salofuser = `${doc[0].salutation}`;
                      var response = {
                          'contentType': 'PlainText',
                          'content': `Thank You ! ${salofuser} ${nameofuser}, Let’s talk soon when you need any help with account service inquiries of ABC Bank.`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                      return (response.content);
                  } else {
                      var response = {
                          'contentType': 'PlainText',
                          'content': `Thank You !`
                      };
                      console.log(`Response :${JSON.stringify(response)}`);
                      callback(null, close(sessionAttributes, 'Fulfilled', response));
                  }
              }, (e) => {
                  var response = {
                      'contentType': 'PlainText',
                      'content': `Something went wrong in fetching account bal`
                  };
                  console.log('Unable to fetch Data from database', e);
                  console.log(`Response :${JSON.stringify(response)}`);
                  callback(null, close(sessionAttributes, 'Fulfilled', response));
              })
          } else {
              var response = {
                  'contentType': 'PlainText',
                  'content': `Thank You.`
              };
              console.log(`Response :${JSON.stringify(response)}`);
              callback(null, close(sessionAttributes, 'Fulfilled', response));
          }
      }, (e) => {
          var response = {
              'contentType': 'PlainText',
              'content': `Something went wrong `
          };
          console.log('Unable to fetch Data from database', e);
          console.log(`Response :${JSON.stringify(response)}`);
          callback(null, close(sessionAttributes, 'Fulfilled', response));
      })
  }

  //Default or Error Handling for invalid intent
  function handleDefault(request, callback) {
      var sessionAttributes = request.sessionAttributes;
      var response = {
          'contentType': 'PlainText',
          'content': `Invalid Request. Please try again !`
      }
      callback(null, close(sessionAttributes, 'Fulfilled', response));
  }

  function handlegenotpIntent(request, callback) {
      console.log('Start handlegenotpIntent');
      var sessionAttributes = request.sessionAttributes;
      console.log(`Session Attr:${JSON.stringify(sessionAttributes)}`);
      var msg1 = date < 12 ? 'Good Morning' : date < 18 ? 'Good Afternoon' : 'Good Night';
      var msg = `Your Registration has been added successfully`;
      console.log('connect to Mongo Db server');
  //  var faceid = `${request.currentIntent.slots.facebookid}`;
  //var faceid = `abcd@gmail.com`;
      //request.sessionAttributes.fid = faceid;
    //  request.sessionAttributes.fbid1 = `${request.currentIntent.slots.facebookid}`;
      //console.log('facebook id is ' + faceid);
  var cifofuser= `${request.sessionAttributes.cifidd}` ;
      console.log('Token:', PAGE_ACCESS_TOKEN);
      https.get('https://graph.facebook.com/v2.6/' + request.userId + '?fields=first_name,last_name&access_token=' + PAGE_ACCESS_TOKEN,


          (res) => {
              console.log('res:', res);
              console.log('headers:', res.headers);
              res.on('data', (d) => {
                  console.log(d);
                  request.sessionAttributes.userFirstName = JSON.parse(d).first_name;
                  console.log(`sessionAttributes:${request.sessionAttributes.userFirstName}`);
                  // use below code to resend the reply
                  //callSendAPI(messageData);
              });

          }).on('error', (e) => {
          console.error(e);
      });

      CustomerAuthDetails.find({
          cifid: cifofuser
      }).then((docs) => {
              console.log('Data got fetched from the database' + docs.length);
              console.log(JSON.stringify(CustomerAuthDetails, undefined, 2));
              var userFirstName = request.sessionAttributes.userFirstName;
              console.log(`userFirstName:${userFirstName}`);

              if (docs.length === 0) {
                  var response = {
                      'contentType': 'PlainText',
                      'content': `Hi ${userFirstName},${msg1}, I see that you are not registered as a Facebook Chat customer with ABC Bank.For account specific details you need to register for Facebook Banking service – By either visiting you internet Banking page https://s3.amazonaws.com/dianaci/index.html or visiting the nearest Branch.Thank You.`
                  };
                  console.log(`Response :${JSON.stringify(response)}`);
                  callback(null, close(sessionAttributes, 'Fulfilled', response));
              } else {
                var cifofuser = `${docs[0].cifid}`;

                console.log(cifofuser);
                CustomerAccDetails.find({
                    cifid: cifofuser
                }).then((doc) => {
                    console.log('in for balance');
                    var nameofuser = `${doc[0].customer_Name}`;
                    request.sessionAttributes.coreusername = `${nameofuser}`;
                    console.log(request.sessionAttributes.coreusername);
    },
    (e) => {
        var response = {
            'contentType': 'PlainText',
            'content': `Something went wrong `
        };
        console.log('Unable to fetch Data from database', e);
        console.log(`Response :${JSON.stringify(response)}`);
        callback(null, close(sessionAttributes, 'Fulfilled', response));
    });
                  console.log(docs);
                  console.log(docs[0].cifid);
                  console.log('in for otp');
                  var otpGen = random(999999, 111111);
                  console.log(otpGen);

                  request.sessionAttributes.otp = `${otpGen}`;
                  console.log(docs);

                  var mobileofuser = `${docs[0].RegisterMobile}`;
                  var otpofuser = `${docs[0].otp}`;
                  console.log(mobileofuser);
                  console.log(`${docs[0].RegisterMobile}`);
                  console.log(`otp is :${otpGen}`);
                  console.log(`${docs[0].otp}`);

                  var sns = new AWS.SNS();
                  var params = {
                      Message: `Dear ${userFirstName}, you are trying to access confidential information via DIANA and otp is : ${otpGen}`,
                      MessageStructure: 'string',
                      PhoneNumber: `${mobileofuser}`,
                      Subject: 'Reference'
                  };

                  sns.publish(params, function(err, data) {
                      if (err) {
                          console.log(err, err.stack);
                      } // an error occurred
                      else {
                          console.log(data);
                          var custuserid1=request.sessionAttributes.custuserid;
                          console.log(custuserid1);
                        // successful response
                        CustomerAccDetails.update({cifid: cifofuser},{userid:custuserid1},{multi:true},(err)=> {
                            if(err) {
                              console.log(err);
                            } else {
                                console.log("updated successfully");


                          var response = {
                              'contentType': 'PlainText',
                              'content': `Hi ${request.sessionAttributes.coreusername},${msg1} otp has shared please type the same..`
                          };
                          console.log(`Response :${JSON.stringify(response)}`);
                          callback(null, close(sessionAttributes, 'Fulfilled', response));
                        }

                                      })
                      }
                  });

                  console.log(params);
                  console.log(params.PhoneNumber);
              }
          },
          (e) => {
              var response = {
                  'contentType': 'PlainText',
                  'content': `Something went wrong `
              };
              console.log('Unable to fetch Data from database', e);
              console.log(`Response :${JSON.stringify(response)}`);
              callback(null, close(sessionAttributes, 'Fulfilled', response));
          });
  }


  //Prepare Response
  function close(sessionAttributes, fulfillmentState, message) {
      console.log(sessionAttributes, fulfillmentState, message);
      return {
          sessionAttributes,
          dialogAction: {
              type: 'Close',
              fulfillmentState,
              message
          }
      };

  }

  //////////////
