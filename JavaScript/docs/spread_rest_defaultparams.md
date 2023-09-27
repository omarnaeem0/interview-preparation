## Spread operator, rest operator, default parameter

### spread operator
* denoted by `...`
* used to copy an array or object.
* can only create a shallow copy.
* in order to insert elements of one array into another at once.
  ```javascript
  let baked_desserts = ['cake', 'cookie', 'donut'];
  let desserts = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
  console.log(desserts2);
  ```
* can be used to pass arguments to a function
  ```javascript
  function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
  }
  let numbers = [1,2,3];
  multiply(...numbers);
  ```

### rest operator
* denoted same as spread operator `...`
* used to remaining part of array, object or function parameters.
  ```javascript
  function multiply(number1, ...remianingAttributes) {
    console.log(number1 * remianingAttributes[0] * remianingAttributes[1]);
  }
  let numbers = [1,2,3];
  multiply(...numbers);
  ```
* In detail difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.
* In the example above `remianingAttributes` will be an array of remaining attributes passed to `multiply` function.

### default parameter
* default parameter is the default value assigned to the parameters of a function
  ```javascript
  function generateMultiplierValue(number, multiplier = 2) {
    return number * multiplier;
  }
  console.log(generateMultiplierValue(2)) // returns 4;
  ```
* In above example if the second parameter in not passed, it will detect and use `2` which is default value to the second parameter.
