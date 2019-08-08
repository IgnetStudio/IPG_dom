// WAYS TO PLAY WITH FUNCTIONS

const defaultPrintInfo = (param1, param2) => {
    console.log(`arrow function with param1: ${param1} & param2: ${param2}`);
    return param1 + param2;
};

defaultPrintInfo('default param1', 'default param2');

// assignment by reference & invoke

const assignPrintInfo = defaultPrintInfo;
assignPrintInfo('assigned param1', 'assigned param2');

// undefined value, without parameter

let indexInteger = 0;
const plusOne = function () {
    indexInteger++;
}

// return value, with parameters & arguments

const divideTwice = function (number) {
    return number / 2;
}

console.log(`amount of required params: ${divideTwice.length}`);
divideTwice(7); // 3.5

const thirdPower = function (indexNo, indexPow) {
    const mathResult = Math.pow(indexNo, indexPow);
    console.log(`${indexNo} to ${indexPow} power is: ${mathResult}`);
    return mathResult;
}

console.log(`amount of required params: ${thirdPower.length}`);
thirdPower(2, 5); // arguments (value parameters)

// 1st parameter overwritten by argument, 2nd parameter remains as default

const concatWords = (defaultParam1 = 'default 1st parameter', defaultParam2 = 'default 2nd parameter') => {
    const fullPhrase = defaultParam1 + ' & ' + defaultParam2;
    console.log(`result of concatenation is: ${fullPhrase}`);
    return fullPhrase;
}
concatWords('new 1st parameter');