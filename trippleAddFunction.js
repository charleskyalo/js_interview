// write a  function  which can be invoked by calling it this way

/* trippleAdd(20)(30)(30) */  //returns the sum of all those numbers;

const tripleAdd = num1 => num2 => num3 => num1 + num2 + num3;
console.log(tripleAdd(20)(10)(30));

/* writing a more readable code function */

function tripleAddFunctionRefactored(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

console.log(tripleAddFunctionRefactored(20)(30)(40)); //returns 90;