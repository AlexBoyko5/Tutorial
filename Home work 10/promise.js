//~============ МОЙ вариант  ==================================

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const delayInput = form.querySelector('input[name="delay"]');
    const delay = parseInt(delayInput.value);

    const stateInput = form.querySelector('input[name="state"]:checked');
    const state = stateInput.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise.then(
        (delay) => {
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        },
        (delay) => {
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay}ms`,
            });
        }
    );
});

//^==============================================

// Імпорт бібліотеки iziToast та її CSS стилів
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Отримання посилання на форму за класом "form"
const form = document.querySelector(".form");

// Додаємо слухача подій для події submit форми
form.addEventListener("submit", function (event) {
    // Попереджаємо стандартну поведінку події (відправлення форми)
    event.preventDefault();

    // Отримання значення затримки введеної користувачем з поля вводу
    const delayInput = form.querySelector('input[name="delay"]');
    const delay = parseInt(delayInput.value);

    // Отримання обраного стану промісу (fulfilled або rejected) з радіокнопок
    const stateInput = form.querySelector('input[name="state"]:checked');
    const state = stateInput.value;

    // Створення нового промісу
    const promise = new Promise((resolve, reject) => {
        // Викликаємо setTimeout, щоб затримати виконання промісу на певну кількість мілісекунд
        setTimeout(() => {
            // Перевірка стану промісу
            if (state === "fulfilled") {
                // Якщо стан - fulfilled, вирішуємо проміс з переданим значенням затримки
                resolve(delay);
            } else {
                // Інакше, відхиляємо проміс з переданим значенням затримки
                reject(delay);
            }
        }, delay);
    });

    // Обробка промісу за допомогою методу then()
    promise.then(
        // Випадок успішного виконання промісу
        (delay) => {
            // Відображення повідомлення про успіх за допомогою iziToast.success()
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        },
        // Випадок невдалого виконання промісу
        (delay) => {
            // Відображення повідомлення про помилку за допомогою iziToast.error()
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay}ms`,
            });
        }
    );
});






//~==============================================
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// console.log(promise); // Об'єкт промісу
//~==============================================
// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//     value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     },
//     error => {
//         console.log(error); // "Error! Error passed to reject function"
//     }
// );
//~==============================================
// const isSuccess = !true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// // Registering promise callbacks
// promise
//     .then(value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     })
//     .catch(error => {
//         console.log(error); // "Error! Error passed to reject function"
//     });
//~==============================================
const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

// Registering promise callbacks
promise
    .then(value => console.log(value)) // "Success! Value passed to resolve function"
    .catch(error => console.log(error)) // "Error! Error passed to reject function"
    .finally(() => console.log("Promise settled")); // "Promise settled"
