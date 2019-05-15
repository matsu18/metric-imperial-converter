/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');
const helmet = require('helmet');



module.exports = function (app) {

  app.use(helmet());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);    
      var returnNum = convertHandler.convert(initNum, initUnit);    
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
         
      res.json({"initNum": initNum, "initUnit": initUnit, "returnNum": returnNum, "returnUnit": returnUnit, "string": toString});
    });
    
};
