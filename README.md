
---

## data types

### primitive types
* data types such as `null`, `undefined`, `boolean`, `number`, `string`, `bigint`, and `symbol` cannot be changed.
* they are `immutable`, means they can not be changed once they are created.
  ```javascript
  let string = 'this is a string';
  string[0] = 'T';
  console.log(string); // Output => this is a string
  ```
* they can however be replaced by another value, it can not be directly altered.
  ```javascript
  let string = 'hello world';
  string = 'this is a string';
  console.log(string); // Output => this is a string
  ```
* they can be compared by value
  ```javascript
  const example1 = 'This is a test string';
  const example2 = 'This is a test string';
  console.log(example1 == example2) // Output => true
  ```

### non-primitive types
* data types include `objects` such as `arrays` and `functions` that can be changed.
* they are `mutable` data types because we can change the value after creation.
  ```javascript
  let arr = [1,2,3,4,5,6];
  arr[1] = 7;
  console.log(arr); // Output => [1,7,3,4,5,6]
  ```
* they are not compared by value, they are compared by reference.
  ```javascript
  let arr = [1,2,3];
  let arr2 = [1,2,3];
  console.log(arr === arr2); // Output => false

  let obj = { name: 'test', age: 18 };
  let obj2 = { name: 'test', age: 18 };
  console.log(obj === obj2); // Output => false
  ```
* only strictly equal if they have reference of other object
  ```javascript
  let obj1 = {name: 'test', city: 'Jaipur'}
  let obj3 = obj1;
  console.log(obj1 === obj3); // Output => true
  ```
   

---

## pass by reference, pass by value

### pass by reference 
* basically pass the address `reference` of the entity such as a function as an argument to the function being invoked.
* altering the value inside that function changes the original value.

### pass by value
* passing an argument by value into the function will not change its value outside the function.
* it copies the value into two different locations in memory hence treating them as entirely separate entities.


---

## var, let, and const variables

### var
* global or functional scoped only.
* var declared inside functional scope can not be accessed outside that function.
* var can be re-declared which is the issue with var.
* var is hoisted to the top level of valid scope and initialized as undefined.

### let
* block scoped. anything between `{}`
* let declared inside block scope can not be accessed outside that block.
* let can be re-assigned but can not be re-declared with same variable name.
* re-declaring let with let keyword returns an error: Identifier 'variableName' has already been declared.
* let is hoisted to the top level of block scope but throws a 'Reference Error' when accessed before declaration.

### const
* everything is same as let variable except it has to be assigned a value at the time of declaration and it can not be de-assigned/updated.

---

## what is  spread operator, rest operator, default parameter

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

---

## deep copy and shallow copy

### shallow copy
* means that only the first level of the object is copied. Deeper levels are referenced.
* a shallow copy can be achieved using the spread operator `…` or using `Object.assign()`. 
  ```javascript
  const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

  const shallowCopy1 = { ...obj };
  const shallowCopy2 = Object.assign({}, obj);
  ```

### deep copy
* a deep copy can be achieved using `JSON.parse()` + `JSON.stringify()`
* deep copy is not that fast when it comes to performance.

---

## Asynchronous JavaScript – Callbacks, Promises, and Async/Await

### Synchronous vs Asynchronous
* By default, JavaScript is a synchronous, single threaded programming language. Means instructions will go one after another.
* asynchronous is where some complex time taking instructions are handed over to event loop and gets executed only when all of the instructions are completely executed.
* To further understand the asynchronous nature of JavaScript, there comes callback functions, promises, and async and await.

### Callbacks
* A callback is a function that is passed inside another function, and then called in that function to perform a task.

### Callback Hell
