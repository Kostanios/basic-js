module.exports = function repeater(str, options) {
if(options.repeatTimes === undefined){var repeat = 1}
    else {var repeat = options.repeatTimes;}

    if(options.separator === undefined){var separator = "+"}
    else {var separator = String(options.separator);}

    if(options.addition === undefined){var addition = ""}
     else { var addition = String(options.addition)};

    if(options.additionSeparator === undefined){var additionSeparator  = ""}
        else{var additionSeparator = String(options.additionSeparator);} 

    if (options.additionRepeatTimes === undefined){var timeaddition = 1} 
        else{var timeaddition  =  options.additionRepeatTimes ;}

    var StringStr = String(str)

    var recal = ""
    for(i = 0; i < repeat ; i++){
        recal += StringStr;
        for(var k = 0 ; k <timeaddition ; k++){
            recal += addition;
            if(k+1 == timeaddition ){break}
            recal += additionSeparator;
        }
        if(i+1 == repeat){break;}
        recal += separator;
    }
    return  recal;
};
  
