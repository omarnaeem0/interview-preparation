
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

### Promise
* A promise, in our context, is something which will take some time to do. There are two possible outcomes of a promise:
  - We either run and resolve the promise, or
  - Some error occurs along the line and the promise is rejected
* A promise takes in two functions as parameters. That is, resolve and reject. Remember that resolve is success, and reject is for when an error occurs.
  ```javascript
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😢');
      resolve(data);
    });
  });
  ```

### Callback Hell
* block of code with nested callback functions where each of them calls the next callback and depends on the previous one.
  ```javascript
  readFilePromise(`${__dirname}/dog.txt`).then((data) => {
    superagent
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .then((res) => {
        console.log(res.body.message);
        return writeFilePromise('dog-img.txt', res.body.message)
          .then(() => {
            console.log('Random dog image saved to file!');
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  ```

### Promise chaining
* Promises are a neat way to fix problems brought about by callback hell, in a method known as promise chaining. You can use this method to sequentially get data from multiple endpoints, but with less code and easier methods.
  ```javascript
  readFilePromise(`${__dirname}/dog.txt`)
    .then(data => {
      console.log(`Breed: ${data}`);
      return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
      console.log(res.body.message);
      return writeFilePromise('dog-img.txt', res.body.message);
    })
    .then(() => {
      console.log('Random dog image saved to file!');
    })
    .catch(err => {
      console.log(err);
    });
  ```
### Promise.all()
* The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
* This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed which means already fulfilled), with an array of the fulfillment values.
* It rejects when any of the input's promises rejects, with this first rejection reason.
  ```javascript
  const res1Pro = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const res2Pro = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const res3Pro = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
  const imgs = all.map((el) => el.body.message);
  console.log(imgs);
  ```
* when all of the promises are fulfilled, it returns an array of fulfillment values in the same order promises are passed.

### async/await

---

## Some types of functions

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
* The example given below is not a pure function as the output dependent on an external variable `tax`. So if the tax value is updated somehow, then we will get a different output though we pass the same productPrice as a parameter to the function.
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