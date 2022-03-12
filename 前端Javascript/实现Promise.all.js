function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resultCount = 0;
    let results = new Array(promises.length);

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (value) => {
          resultCount++;
          results[i] = value;
          if (resultCount === promises.length) {
            return resolve(results);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}
