// write a  function  which can be invoked by calling it this way

/* trippleAdd(20)(30)(30) */  //returns the sum of all those numbers;

const tripleAdd = num1 => num2 => num3 => num1 + num2 + num3;
console.log(tripleAdd(20)(10)(30));