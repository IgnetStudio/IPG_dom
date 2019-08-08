// WAYS TO CALLBACK FUNCTIONS

// higher-order function

function itemsCount(paramNumber, callback) {
    console.log(paramNumber);
    return callback(paramNumber)
}

// lower-order function

function addOne(paramIncrement) {
    paramIncrement++
    console.log(paramIncrement);
    return paramIncrement;
}

// pass lower-order function as callback to higher-order function

itemsCount(2, addOne);

// addEventListener method

const showClick = function () {
    console.log("click");
}

document.addEventListener("click", showClick);