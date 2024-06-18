const socket = io('https://londord.pythonanywhere.com/'); // URL сервера

socket.on('waiting', (data) => {
    document.getElementById('message').innerText = data.message;
});

socket.on('gameStart', (data) => {
    document.getElementById('message').innerText = 'Game started! Your opponent is ' + data.opponent;
    document.getElementById('coin').style.display = 'block';
});

socket.on('coinToss', (data) => {
    const resultElement = document.getElementById('result');
    const coinElement = document.getElementById('coin');

    // Показать анимацию подбрасывания монетки
    coinElement.style.animation = 'flip 2s infinite';

    setTimeout(() => {
        // Скрыть анимацию и показать результат
        coinElement.style.animation = 'none';
        coinElement.style.display = 'none';
        resultElement.innerText = data.message;
    }, 2000); // Длительность анимации 2 секунды
});
