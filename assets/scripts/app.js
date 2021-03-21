const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber() {
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, caclNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${caclNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeTolog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operationKey: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult + +enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber);
    writeTolog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult - +enteredNumber;
    createAndWriteLog('-', initialResult, enteredNumber);
    writeTolog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multifly() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult * +enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber);
    writeTolog('MULTIFY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult / +enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber);
    writeTolog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multifly);
divideBtn.addEventListener('click', divide);