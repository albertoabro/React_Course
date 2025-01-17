
//const array = new Array( 100 ) initialize with size;

const array = [1,2,3,4];
//array.push(1) not recommended this modify the principal object

let array2 = [...array,5];

const array3 = array2.map( //function is need it
  function(number){        //This function does the instructions for each number in the original array
    return number * 2;     //In this case, this function return 2,4,6,8,10
  }
);

console.log(`Array3: ${array3}`);
console.log(`Array2: ${array2}`);
console.log(`Array: ${array}`);
