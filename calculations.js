let operationsEnum = {
    operationzero: -1,
    addition: 0,
    subtraction: 1,
    multiplication: 2,
    division: 3
}

result = 0;
resultDisplay = false;
lastOperation = -1;
outputRequested = true;

function press(pressed) {
    if(outputRequested)
    {
        clears();
        outputRequested = false;
        lastOperation = operationsEnum.operationzero;
    }
    var inp = document.getElementById('display');
    if(resultDisplay)
    {
        clearInput();
        resultDisplay = false;
    }

    if(inp.innerHTML == '0')
    {
        inp.innerHTML = pressed;
        return;
    }

    inp.innerHTML += pressed;
}

function calculate(currentOperation) {
    if(outputRequested)
    {
        outputRequested = false;
        document.getElementById('display').innerHTML = result;
        lastOperation = operationsEnum.operationzero;
    }
    var writtenNumber = document.getElementById('display').innerHTML;
    if(writtenNumber == '')
    {
        return;
    }
    var number = parseFloat(writtenNumber);
    switch (lastOperation) {
        case operationsEnum.operationzero:
            result = number;
            break;
        case operationsEnum.addition:
            result += number;
            break;
        case operationsEnum.subtraction:
            result -= number;
            break;
        case operationsEnum.multiplication:
            result *= number;
            break;
        case operationsEnum.division:
            result /= number;
            break;
        default:
            break;
    }

    lastOperation = currentOperation;
    resultDisplay = true;
    
    showOutput()
    clearInput();
}

function equals() {
    var writtenNumber = document.getElementById('display').innerHTML;
    if(writtenNumber == '')
    {
        return;
    }
    var number = parseFloat(writtenNumber);
    switch (lastOperation) {
        case operationsEnum.operationzero:
            result = number;
            break;
        case operationsEnum.addition:
            result += number;
            break;
        case operationsEnum.subtraction:
            result -= number;
            break;
        case operationsEnum.multiplication:
            result *= number;
            break;
        case operationsEnum.division:
            result /= number;
            break;
        default:
            break;
    }

    resultDisplay = true;
    outputRequested = true;
    showOutput()
    clearInput();
}

function showOutput() {
    document.getElementById('result').innerHTML = result;
}

function clearInput() {
    document.getElementById('display').innerHTML = '0';
}

function clearOutput() {
    document.getElementById('result').innerHTML = '0';
}

function clears() {
    clearInput();
    clearOutput();
    result = 0;
}