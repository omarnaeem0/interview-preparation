## Data types

### Primitive types
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

### Non-primitive types
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
   