const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
emailInput.addEventListener('input', () => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.ariaValue,
        message: messageInput.value,
    }))
});
messageInput.addEventListener('input', () => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.ariaValue,
        message: messageInput.value,
    }))
});
const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
}
const form = document.getElementById('feedback-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
})
//&================= Task #2 Alex Koz ==========================================
// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'feedback-form-state';

// const savedState = JSON.parse(localStorage.getItem(localStorageKey));

// if (savedState) {
//     form.elements.email.value = savedState.email?.trim() || '';
//     form.elements.message.value = savedState.message?.trim() || '';
// }

// form.addEventListener('input', event => {
//     const formData = {
//         email: form.elements.email.value,
//         message: form.elements.message.value,
//     };

//     localStorage.setItem(localStorageKey, JSON.stringify(formData));
// });

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const emailValue = form.elements.email.value.trim();
//     const messageValue = form.elements.message.value.trim();

//     if (emailValue && messageValue) {

//         const formData = {
//             email: emailValue,
//             message: messageValue,
//         };

//         console.log(formData);

//         localStorage.removeItem(localStorageKey);
//         form.reset();
//     } else {

//         alert('Будь ласка, заповніть обидва поля перед відправкою форми.');
//     }
// });
//&================= Task #2 Lilia ==========================================

// const feedbackFormEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('input');
// const textareaEl = document.querySelector('textarea');
// const localStorageKey = 'feedback-form-state';

// feedbackFormEl.addEventListener('input', handleInput);

// function handleInput() {
//     const storedObj = {
//         email: feedbackFormEl.elements.email.value.trim(),
//         textarea: feedbackFormEl.elements.message.value.trim(),
//     };
//     localStorage.setItem(localStorageKey, JSON.stringify(storedObj));
// }

// window.addEventListener('DOMContentLoaded', () => {
//     const storedData = localStorage.getItem(localStorageKey);
//     if (storedData) {
//         const parsedData = JSON.parse(storedData);
//         inputEl.value = parsedData.email;
//         textareaEl.value = parsedData.message;
//     }
// });

// feedbackFormEl.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     if (inputEl.value !== '' && textareaEl.value !== '') {
//         console.log(JSON.parse(localStorage.getItem(localStorageKey)));
//     }
//     localStorage.removeItem(localStorageKey);
//     feedbackFormEl.reset();
// }
