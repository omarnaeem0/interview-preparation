## Some imoprtant types of functions

### Higher Order Function
* function that either takes one or more function as a parameter, or returns a function.
* It can also do both at a time as well.
* For example we want to calculate area and diameter of circle and we have this code
  ```javascript
  const radius = [1, 2, 3];
  // function to calculate area of the circle
  const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
      output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
  }
  // function to calculate diameter of the circle
  const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
      output.push(2 * radius[i]);
    }
    return output;
  }
  console.log(calculateArea(radius));
  console.log(calculateDiameter(radius))
  ```
* we are writing nearly same functions with slightly different logic. so the solution is to extract the similar code in a seperate function (higher order function) and pass it the function with logic that actually is different. 
  ```javascript
  const radius = [1, 2, 3];
  // logic to clculate area
  const area = function(radius){
    return Math.PI * radius * radius;
  }
  // logic to calculate diameter
  const diameter = function(radius){
    return 2 * radius;
  }
  // a reusable function to calculate area, diameter, etc
  const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
      output.push(logic(radius[i]))
    }
    return output;
  }
  console.log(calculate(radius, area));
  console.log(calculate(radius, diameter));
  ```

### Pure Function
* a function (a block of code) that always returns the same result if the same arguments are passed.
* It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
* Also, a pure function does not produce any observable side effects such as network requests or data mutation, etc.
  ```javascript
  function calculateGST(productPrice) {
      return productPrice * 0.05;
  }
  console.log(calculateGST(15))
  ```
* If a pure function calls a pure function, this isn’t a side effect, and the calling function is still considered pure.
* The example given below is not a pure function as the output dependent on an external variable `tax`. So if the tax value is updated somehow, then we will get a different output even though we pass the same productPrice as a parameter to the function.
  ```javascript
  let tax = 20;
  function calculateGST(productPrice) {
      return productPrice * (tax / 100) + productPrice;
  }
  console.log(calculateGST(15))
  ```

### IIFE (Immediatly invoked function expression)
* a function that runs the moment it is invoked or called in the JavaScript event loop.
  ```javascript
  (async () => {
    try {
      console.log('1: Will get dog pics!');
      const x = await getDogPic();
      console.log(x);
      console.log('3: Done getting dog pics!');
    } catch (err) {
      console.log('ERROR 💥');
    }
  })();
  ```

### Currying
* Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
* It helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
* turn a function call `sum(1,2,3)` into `sum(1)(2)(3)`.
