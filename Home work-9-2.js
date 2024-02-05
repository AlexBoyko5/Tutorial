const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const form = document.querySelector('#feedback-form');

// Функция для сохранения состояния в локальное хранилище
const saveStateToLocalStorage = () => {
    const state = {
        email: emailInput.value.trim(), // Обрезаем начальные и конечные пробелы
        message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

// Функция для загрузки состояния из локального хранилища
const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
};

// Слушатель события ввода для сохранения состояния при изменении полей
form.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageInput) {
        saveStateToLocalStorage();
    }
});

// Слушатель события отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Вместо удаления из локального хранилища можно сделать полную очистку
    localStorage.clear();

    // Очистка полей формы
    emailInput.value = '';
    messageInput.value = '';

    // Отображение в консоли данных, которые могли бы быть отправлены
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
});

// Загрузка состояния из локального хранилища при загрузке страницы
loadStateFromLocalStorage();
//&===========================================================

const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const form = document.querySelector('#feedback-form');


const saveStateToLocalStorage = () => {
    const state = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
};


const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
};


form.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageInput) {
        saveStateToLocalStorage();
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.clear();
    emailInput.value = '';
    messageInput.value = '';
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
});

loadStateFromLocalStorage();
//&================= Task #2 исправл ==========================================
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');


const saveStateToLocalStorage = () => {
    const state = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
};


const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
};


form.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageInput) {
        saveStateToLocalStorage();
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    //~== что данные сохраняются в LocalStorage, вы можете изменить
    //~==место вывода в консоль, чтобы отобразить сохраненные значения
    //~== до их очистки. Т.е. console.log до localStorage.clear
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    emailInput.value = '';
    messageInput.value = '';
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
});

loadStateFromLocalStorage();