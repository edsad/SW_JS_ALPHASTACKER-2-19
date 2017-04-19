console.log("help me");

// // Create an array that contains the letters of the alphabet
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// console.log(alphabet);
// var alpha = [];

// for (var i = 0; i < alphabet.length; i++) {
//     alpha.push[i];
//     console.log(alpha, alphabet[i]);
// };

// // The stackLetter function should accept the array as the sole argument
// function stackLetters() {
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     var letters = '';
//     console.log(alphabet);


//     for (var i = 0; i < alphabet.length; i++) {
//         letters += alphabet[i];
//         console.log(letters);
//     }
// //         if (counter === 3) {
// //             letters += '';
// //             counter = 0;
// //         };
// //         counter ++
// //     console.log(letters);
// };

    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
// }

// Invoke the function and pass in the array
// stackLetters(alphabet)





// var alphabet = ["abcdefghijklmnopqrstuvwxyz".split];
// var splitAlphabet = [];
// for (var i = 0; i < alphabet.length; i++){
// var reversed = alphabet[i].split(" ");
// reversed.push (reversed);
// }
//   console.log("reversed", reversed);





// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var alphabetLength = alphabet.length;
// for (var i = 0; i < alphabetLength; i++){
//   console.log(alphabet[i]);
// };

var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
var alpha = [];
console.log(alphabet);

for (var i = 0; i < alphabet.length; i++) {
    alpha.push[i];
    console.log(alpha, alphabet[i]);
}

function stackLetters() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var letters = '';
    console.log(alphabet);


for (var i = 0; i < alphabet.length; i++) {
    letters += alphabet[i];
    console.log(letters);
}
}

function stackLetters() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var letters = '';
    var counter = 3;

    for (var i = 0; i < alphabet.length; i++) {
        letters += alphabet[i];
        if (counter === 3) {
            letters += '';
            counter = 3;
        };
        counter++
        console.log(letters);
    };
};

stackLetters();







