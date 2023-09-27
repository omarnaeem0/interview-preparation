## Deep copy and Shallow copy

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
