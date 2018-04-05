'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var audit = new Schema({
  channelName: {
    type: String,
      required: 'Kindly enter the name of channel ',
  },
  ciserviceName: {
    type: String
  },
  requestData: {
    type: String
    },
  responseData: {
    type: String
  },
  userName: {
    type: Number
  },
  requestDate: {
    type: Date,
    required : 'Date please '
  },
  lastUpdatedDate: {
    type: Date
    }
});





module.exports = mongoose.model('audit', audit);
//module.exports = mongoose.model('diag_registration', diag_registration);