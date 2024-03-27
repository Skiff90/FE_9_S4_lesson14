// Клас проміс має 6 статичних методів.
// Розглянемо кожен з них окремо на практиці:

// 1.Метод Promise.all()
// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);
// const promiseC = makePromise("promiseC value", 500);
// Promise.all([promiseA, promiseB,promiseC])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// Метод Promise.race() - буде чекати того хто найшвидже виконає обіцянку з будь-яким результатом
// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
// const promiseA = makePromise("promiseA value", 5000);
// const promiseB = makePromise("promiseB value", 10000);
// const promiseC = makePromise("promiseC value", 500);
// Promise.race([promiseA, promiseB,promiseC])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// метод Promise.any()
// let promise = Promise.any(iterable);
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Упс!"), 1000))),
  new Promise((resolve,reject) => setTimeout(() => reject(new Error("Помилка!"), 3000))),
  new Promise((resolve,reject) => setTimeout(() => reject(new Error("Все пропало!"), 2000))),
//   new Promise((resolve,reject) => setTimeout(() => resolve(1),500)),
//   new Promise((resolve,reject) => setTimeout(() => resolve(43),200))
])
.then(resolve => console.log(resolve))
.catch(error => {
    console.log(error.constructor.name);
    console.log(error.errors);
    // можна виводить або масив момилок або по окремості
    // console.log(error.errors[1]);
    // console.log(error.errors[2]);
    console.log(error.errors[0])
});
