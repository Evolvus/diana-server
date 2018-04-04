'use strict';


exports.handleintents = function(req, res) {
  console.log(req.body);
  var val = req.body.input;
  res.json({"intentname": val});
};
