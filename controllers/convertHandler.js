/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var re_intfloat = /^(\d*\.\d+|\d+)$/g;
    var re_fraction = /^(\d*\.?\d+\/\d+\.?\d*)$/g;
    var unitRe = /[a-z]/gi;
    var subject = input.substring(0,input.search(unitRe));
    if (!subject) {
      result = 1;
    } else {
      if (re_intfloat.test(subject) || re_fraction.test(subject)) {
        result = eval(subject);
      } else {
        result = "invalid number";
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var re = /^(gal|l|lbs|kg|mi|km)$/gi;
    var unitRe = /[a-z]/gi;
    var subject = input.substring(input.search(unitRe));
    if (re.test(subject)) {
      result = subject;
    } else {
      result = "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'initUnit';
  }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
        switch(unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = "no unit";
  }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = 0;
    }
    result = parseFloat(result.toFixed(5));
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
