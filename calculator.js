function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } 
    else if (operator === '-') {
        result = num1 - num2;
    }
     else if (operator === '*') {
        result = num1 * num2;
    } 
    else if (operator === '/') {
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } 
        else {
            result = num1 / num2;
        }
    } else if (operator === '%') {

        result = num1 % num2;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
function clearData() {
    document.getElementById("num1").value = "";

    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "Result:";
}