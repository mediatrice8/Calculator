var add= function(number1,number2){
    return number1 + number2;
    };
    var subtract =function(number1,number2){
        return number1 -number2;
    };
    var multiply =function(number1,number2){
        return number1 * number2;
    };
    var number1 = parseInt(prompt( "enter the number"));
    var number2 = parseInt(prompt("enter another number"));
    var result = multiply(number1 ,number2);
    alert (result);