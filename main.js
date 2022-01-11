const app = document.getElementById('typewriter');

const typewriter = new typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('FlyerS, siempre con vos')
    .pauseFor(200)
    .start()