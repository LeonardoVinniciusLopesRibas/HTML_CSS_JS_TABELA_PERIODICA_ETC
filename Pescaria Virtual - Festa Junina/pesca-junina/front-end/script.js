let numero_sorteado = document.querySelector('#numero-sorteado');

document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        numero_sorteado.textContent = 'Número sorteado: ' + getRandomInt();
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}