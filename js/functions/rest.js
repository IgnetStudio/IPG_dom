// WAYS TO PLAY WITH REST PARAMETERS

// multiple elements passed (as arguments) to array

function slovenianCities(...args) {
    console.log(args);
    console.log(typeof args); // object
    console.log(Array.isArray(args)); // true
    return args;
}

slovenianCities('Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Koper', 'Velenje', 'Novo Mesto');

// same result, different syntax

function slovenianWords(...words) {
    let auxiliaryText = "";

    // for loop
    for (let i = 0; i < words.length; i++) {
        auxiliaryText += `word is ${words[i]}; `;
    }

    // forEach method
    words.forEach(function (word) {
        auxiliaryText += `word is ${word}; `;
    })

    // forEach (arrow function)
    words.forEach(word => auxiliaryText += `word is ${word}; `)

    console.log(auxiliaryText);
}

slovenianWords('Živjo', 'Hvala', 'Dober dan', 'Adijo');