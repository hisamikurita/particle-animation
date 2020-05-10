import { Particle } from './particle';
import { Utils } from './util';

(() => {

    window.addEventListener('load', function () {
        init();
        render01();
        setTimeout(function () {
            cancelAnimationFrame(frame01);
            title.style.opacity = 0;
            text.style.opacity = 1;
            render02();
        }, 3000);
        setTimeout(function () {
            cancelAnimationFrame(frame02);
            text.style.opacity = 0;
            render03();
        }, 10000);
    })

    window.onresize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        init();
    }

    const offscreencanvas = document.createElement('canvas'),
        offscreenctx = offscreencanvas.getContext('2d'),
        canvas = document.querySelector('#canvas'),
        ctx = canvas.getContext('2d'),
        body = document.querySelector('body'),
        title = document.querySelector('h1'),
        text = document.querySelector('p');


    body.classList.add('active');

    let amount = 0, particles = [], frame01 = 0, frame02 = 0;

    function init() {

        // RequestAnimationFrame
        (function () {
            const requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();

        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;

        offscreencanvas.width = WIDTH;
        offscreencanvas.height = HEIGHT;

        offscreenctx.font = "bold " + (WIDTH / 8) + "px arial";
        offscreenctx.textAlign = 'center';
        offscreenctx.baseline = 'middle';
        offscreenctx.fillText("Follow me !!", WIDTH / 2, HEIGHT / 2);
        const imgData = offscreenctx.getImageData(0, 0, WIDTH, HEIGHT).data;

        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        const skip = 150;
        for (let x = 0; x < WIDTH; x += Math.round(WIDTH / skip)) {
            for (let y = 0; y < HEIGHT; y += Math.round(WIDTH / skip)) {
                if (imgData[((x + y * WIDTH) * 4) + 3] > skip) {
                    particles.push(new Particle(x, y));
                }
            }
        }
        amount = particles.length;
    }

    function render01() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < amount; i++) {
            let p = particles[i];
            p.load();
            p.draw();
        }
        frame01 = requestAnimationFrame(render01);
    }
    function render02() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < amount; i++) {
            let p = particles[i];
            p.circle();
            p.draw();
        }
        frame02 = requestAnimationFrame(render02);
    }
    function render03() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < amount; i++) {
            let p = particles[i];
            p.font();
            p.draw();
        }
        requestAnimationFrame(render03);
    }
})();