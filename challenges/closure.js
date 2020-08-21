// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
  // nestedFunction can access internal variable because myFunction encloses nestedFunction and nestedFunction is able to reach out to the outer scope to access internal vatriable

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  
  let num = 0;

  return function counter() {

    for (let i = 1; i <= number; i++) {
      // console.log((num += i));
      num += i;
    }
    return num;
  };

}

// function summation(num) {

//   let count = 1;

//   function counter() {
//     return 
//   }

// }


let counter = summation(4);
// console.log(summation(4));
console.log(counter());