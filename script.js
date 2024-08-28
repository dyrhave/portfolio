document.addEventListener("DOMContentLoaded", function () {

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);

    let trailX = 0, trailY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function followCursor() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        cursorTrail.style.left = `${trailX}px`;
        cursorTrail.style.top = `${trailY}px`;

        requestAnimationFrame(followCursor);
    }

    followCursor();

    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseover', () => {
            cursor.style.backgroundColor = '#ff4c4c';
            cursorTrail.style.backgroundColor = 'rgba(255, 76, 76, 0.5)';
        });

        element.addEventListener('mouseout', () => {
            cursor.style.backgroundColor = '#ff8c42';
            cursorTrail.style.backgroundColor = 'rgba(255, 140, 66, 0.5)';
        });
    });
});