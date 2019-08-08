// WAYS TO INITIALIZE FUNCTIONS

// function expression

const showMessage = function () {
    console.log('anonymous function scope');
}

showMessage();

// function declaration

function sumParams(x, y) {
    console.log(`named function return: param x value = ${x} + param y value = ${y}`);
    return x + y;
}

sumParams(3, 5);

// function constructor

const textAlert = new Function('text', 'console.log(`${text} display`);');

textAlert('constructed function');

// arrow function (always anonymous, parameters optional)

const defaultPrintInfo = (param1, param2) => {
    console.log(`arrow function with param1: ${param1} & param2: ${param2}`);
    return param1 + param2;
};

defaultPrintInfo('default param1', 'default param2');