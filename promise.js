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
