var expression = '';
var result = 0;

//document.getElementsByClassName("value-input").onclick = handleInput;

function handleInput (el) {
    var value = el.textContent;
    if(el.className === 'value-input') {
        expression = expression.concat(value); 
    } else if (el.className === 'value-change'){
        lastInput = expression.charAt(expression.length - 1);
        if (lastInput !== '+' && lastInput !== '-' && lastInput !== '*'&&lastInput !== '/') {
            expression = expression.concat(value);
        } else if (lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/'){
            expression = expression.substring(0, expression.length - 1);
            expression = expression.concat(value);
        }       
    }
    document.getElementsByClassName("value-expresion")[0].innerHTML = expression;
}

function cancelInput() {
    expression = expression.substring(0, expression.length - 1);
    console.log(expression.substring(0, expression.length - 1));
    document.getElementsByClassName("value-expresion")[0].innerHTML = expression;
}

function handleOutput() {
    resultValue =  eval(expression);
    var resultItem = document.createElement("li");
    resultItem.innerHTML = expression.concat("=" + resultValue);
    console.log(resultItem.innerHTML);
    document.getElementById('log-output').appendChild(resultItem);
}