/* question  */

/* 1.what is an iffe and why are they used  */

/*
// my answer

An iffe is a function that is called immediately as it was created.

They are used to protect the scope of functions and variables within it.

*/





// 2. code out an iffe that functions properly;

// an example of an in IFFE function
(() => {
    let numbersArr = [5, 10, 20, 30, 40, 50];
    console.log(numbersArr.filter(num => num > 25))
})();


/*
make this function an iife

function doubleNumber(num){
return num *2;
}

*/

(function (num) {
    let result = num * 2;
    console.log(result);
})((2));

