'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/registration');
  var blackList = require('../controllers/blacklist');
  var processReq = require('../controllers/processReq');
  var channel = require('../controllers/channel');
  var ciservice = require('../controllers/ciservice');
  var processintents = require('../controllers/processintents');

    app.route('/lexregistration')
      .get(todoList.list_all_regs_lex)
      .post(todoList.register_a_channel_lex);

    app.route('/diagregistration')
      .get(todoList.list_all_regs_diag)
      .post(todoList.register_a_channel_diag);

    app.route('/handlereq')
      .post(processReq.handlerequest)
      //.post(todoList.register_a_channel_diag);

    app.route('/handleintents')
      .post(processintents.handleintents)


    app.route('/blacklist')
      .post(blackList.blacklist)
      .get(blackList.listblacklist)

    app.route('/channel')
      .post(channel.regchannel)
      .get(channel.listchannel)

      app.route('/ciservice')
        .post(ciservice.regciservice)
        .get(ciservice.listciservice)

};
