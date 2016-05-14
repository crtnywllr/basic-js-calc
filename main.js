//Define variables
var calc = "";
var ans = "";
var display = $('.textbox');
//Declare functions


//Call functions
$(document).ready(function () {
    $('button').on('click', function () {
        var input = ($(this).attr("value"));
        console.log(input);
        if (parseInt(input, 10) || input === "/" || input === "*" || input === "+" || input === "-" || input === "%" || input === ".") {
            calc += input;
            display.val(calc);
        } else if (input === '=') {
            console.log(calc);
            ans = eval(calc);
            display.val(ans);
        } else if (input === 'AC') {
            calc = '';
            display.val("");
        } else if (input === 'CE') {
            calc = calc.slice(0, -1);
            display.val(calc);
        } else {
            input = ans;
            calc += ans;
            display.val(calc);
        }
    });
});
