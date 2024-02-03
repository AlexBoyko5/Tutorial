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