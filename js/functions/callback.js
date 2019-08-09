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

// passing a callback function (addEventListener method)

const showClick = function () {
    console.log("click");
}

document.addEventListener("click", showClick);

// passing a callback function (setInterval method)

const displayTime = () => {
    console.log('one second elapsed');
}
setInterval(displayTime, 1000);

// passing a callback function (forEach method on array)

const slovenianDestination = ['Blejsko jezero', 'Ljubljanski grad', 'Piran', 'Postojnska jama'];

slovenianDestination.forEach(touristAttraction => console.log(`${touristAttraction} is a tourist attraction in Slovenia`));