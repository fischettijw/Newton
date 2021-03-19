// https://www.youtube.com/watch?v=hHeq-SB8uVg
// https://www.youtube.com/watch?v=QvFYgkYNwS4   (why)

// x^2 - 5 = 0
// 2 * x
// 2.23606

// 3*x^2 - sin(x) - 13 = 0
// 6 * x - cos(x)
// 2.14772

// cos(7*x^3 -2x) = 0
// -sin(7*x^3 - 2x)*(21*x^2 - 2)
// x = 0.984602


// let x;
// let func;
// let dev;

let guess = 2; // initial guess

for (let i = 0; i < 100000; i++) {
    guess -= nextGuess(guess)
}
let ans = guess;
console.log(`answer = ${ans}`);



// equ = x^2 - 5
// dev = 2 * x
// ans = 2.23606
// function nextGuess(x) {
//   let equ = Math.pow(x, 2) - 5;
//   let dev = 2 * x;
//   let ans = equ / dev
//   return equ / dev;
// }


// equ = 3*x^2 - sin(x) - 13
// dev = 6 * x - cos(x)
// ans = 2.14772
function nextGuess(x) {
    let equ = 3 * Math.pow(x, 2) - Math.sin(x) - 13;
    let dev = 6 * x - Math.cos(x);
    let ans = equ / dev
    return equ / dev;
}


// equ = cos(7*x^3 -2x)
// dev = -sin(7*x^3 - 2x)*(21*x^2 - 2)
// ans = 0.984602
// function nextGuess(x) {
//     // let equ = Math.cos(7 * Math.pow(x, 3) - (2 * x))
//     // let dev = -Math.sin(7 * Math.pow(x, 3) - (2 * x)) * ((21 * Math.pow(x, 2)) - 2);

//     let equ = Math.cos(7 * x * x * x - 2 * x);
//     let dev = (-Math.cos(7 * x * x * x - 2 * x) * (21 * x * x - 2));

//     let ans = equ / dev
//     return equ / dev;
// }