// WAYS TO PLAY WITH ARGUMENTS

const displayArgs = function () {
    console.log(arguments.length); // 3
    console.log(arguments[0]); // Slovenia
    console.log(typeof arguments); // object (list of arguments passed to array)
    console.log(Array.isArray(arguments)); // false; array methods disabled
}

displayArgs('Slovenia', null, {})

// for loop & return

const allArgs = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(`all arguments added: ${allArgs(1, 2, 3)} `);

// conditionals (different arguments received)

function sloveniaArgs(capital, terrain, sea) {
    if (arguments.length === 0) {
        console.log('no arguments received');
    } else if (arguments.length === 1) {
        console.log(`capital is ${capital}`);
    } else if (arguments.length === 2) {
        console.log(`capital is ${capital}, terrain is ${terrain}`);
    } else {
        console.log(`capital is ${capital}, terrain is ${terrain}, sea is ${sea}`);
    }
}

sloveniaArgs('Ljubljana', 'mountainous', 'Adriatic');