document.addEventListener('DOMContentLoaded', () => {
    const cartaSobre = document.querySelector('.carta-sobre');

    cartaSobre.addEventListener('click', () => {
        cartaSobre.classList.toggle('abierta');
    });
});
