document.getElementById('spinButton').addEventListener('click', () => {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360) + 720;
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;


    setTimeout(() => {
        wheel.style.transition = 'none';
        const actualDegree = randomDegree % 360;
        wheel.style.transform = `rotate(${actualDegree}deg)`;
    }, 4000);
});
