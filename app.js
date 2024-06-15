document.getElementById('spinButton').addEventListener('click', () => {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360) + 720; 
    const result = document.getElementById('result');

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        wheel.style.transition = 'none';
        const actualDegree = randomDegree % 360;
        wheel.style.transform = `rotate(${actualDegree}deg)`;

        const segments = 6;
        const segmentDegree = 360 / segments;
        const winningSegment = Math.floor((360 - actualDegree + segmentDegree / 2) / segmentDegree) % segments + 1;

        result.innerText = `Result: ${winningSegment}`;
    }, 4000);
});
