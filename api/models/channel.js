'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var channel = new Schema({
  name: {
    type: String,
      required: 'Kindly enter the name ',
  },
  webhookApi: {
    type: String,
      required: 'Kindly enter the value to be blacklisted',
  },
  verificationToken: {
    type: String,
      required: 'Kindly enter the value to be blacklisted',
  }
});





module.exports = mongoose.model('channel', channel);
//module.exports = mongoose.model('diag_registration', diag_registration);
