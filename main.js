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
// Promise.all([promiseA, promiseB, promiseC])
//   .then((value) => console.log(value[0], value))
//   .catch((error) => console.log(error));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// метод Promise.any()
// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Упс!"), 1000))
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Помилка!"), 3000))
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Все пропало!"), 2000))
//   ),
//   // new Promise((resolve, reject) => setTimeout(() => resolve(1), 500)),
//   // new Promise((resolve, reject) => setTimeout(() => resolve(43), 200)),
// ])
//   .then((resolve) => console.log(resolve))
//   .catch((error) => {
//     console.log(error.constructor.name);
//     console.log(error.errors);
//     // можна виводить або масив момилок або по окремості
//     // console.log(error.errors[1]);
//     // console.log(error.errors[2]);
//     console.log(error.errors[0]);
//   });

// !!!!!!!!!!!!!!!!!!!!!!!!!!//
// Методи Promise.resolve() та Promise.reject()
// (Статичні методи для створення промісів,миттєво успішно виконуються або відхиляються)

// Fulfiled promise
// new Promise((resolve) => resolve("Success value")).then((value) =>
//   console.log(value)
// );
// Promise.resolve("Promise.resolveSuccess value").then((value) =>
//   console.log(value)
// );

//Rejected promise
// new Promise((resolve, reject) => reject("Error")).catch((error) =>
//   console.log(error)
// );
// Promise.reject("Promise.reject error catch").catch((error) =>
//   console.log(error)
// );
// Тепер трошки практики на більш конкретних прикладах
// const makeGreeting = (guestName) => {
//   if (guestName === "" || guestName === undefined) {
//     return {
//       success: false,
//       message: "Guest naame must not be empty",
//     };
//   }return {
//     succes: true,
//     massege: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting("Polly");
// if (result.succes) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === "" || guestName === undefined) {
//     return onError("Guest name must not be empty");
//   }
//   onSuccess(`Welcome ${guestName}!Have a nice day!`);
// };

// makeGreeting(
//   "Polly",
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );

// Останнім кроком іде промісифікація самої функції
// const makeGreeting = (guestName) => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }
//   return Promise.resolve(`Welcome ${guestName}...`);
// };
// makeGreeting("Jeremy")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// makeGreeting("Jully")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// Цикл подій
