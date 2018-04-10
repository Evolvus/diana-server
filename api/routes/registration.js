'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/registration');
  var blackList = require('../controllers/blacklist');
  var processReq = require('../controllers/processReq');
  var channel = require('../controllers/channel');
  var ciservice = require('../controllers/ciservice');
  var processintents = require('../controllers/processintents');
  var processalexaintents = require('../controllers/processalexaintents');
  var audit = require('../controllers/audit');
  var answer = require('../controllers/answers');

    app.route('/lexregistration')
      .get(todoList.list_all_regs_lex)
      .post(todoList.register_a_channel_lex);

    app.route('/diagregistration')
      .get(todoList.list_all_regs_diag)
      .post(todoList.register_a_channel_diag);

    app.route('/webhook')
      .post(processReq.handlerequest)
      .get(processReq.handlegetrequest)
      //.post(todoList.register_a_channel_diag);

    app.route('/handleintents')
      .post(processintents.handleintents)

	app.route('/handlealexaintents')
      .post(processalexaintents.handleintents)

    app.route('/blacklist')
      .post(blackList.blacklist)
      .get(blackList.listblacklist)

    app.route('/channel')
      .post(channel.regchannel)
      .get(channel.listchannel)

      app.route('/channel/:channelName')
        .get(channel.stats)

      app.route('/channel/:id')
        .put(channel.updatechannel)

      app.route('/ciservice')
        .post(ciservice.regciservice)
        .get(ciservice.listciservice)

      app.route('/ciservice/:ciserviceName')
        .get(ciservice.listciservice)

      app.route('/ciservice/:id')
        .put(ciservice.updateciservice)

      app.route('/audit')
        .get(audit.listaudits)

      app.route('/answers')
        .get(answer.listallanswers)

      app.route('/answers/:status')
        .get(answer.listunanswered)

};
