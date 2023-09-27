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
