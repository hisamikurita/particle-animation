import { Particle } from './particle';
import { Utils } from './util';

(() => {

    window.addEventListener('load', function () {
        init();
        render();
    })

    var canvas = document.querySelector('#canvas'),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p, particles = [], amount = 0;

    function init() {
        window.onresize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles.forEach((particle) => {
                particle.resize();
            })
        }

        // RequestAnimationFrame
        (function () {
            var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();


        ctx.font = "bold " + (width / 10) + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.baseline = 'middle';
        ctx.fillText('Hisami Kurita', width / 2, height / 2);
        var imgData = ctx.getImageData(0, 0, width, height).data;

        for (var i = 0; i < width; i += Math.round(width / 150)) {
            for (var j = 0; j < width; j += Math.round(width / 150)) {
                if (imgData[((i + j * width) * 4) + 3] > 150) {
                    particles.push(new Particle(i, j));
                }
            }
        }
        amount = particles.length;
    }

    function render() {
        // ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < amount; i++) {
            p = particles[i];
            p.update();
            p.draw();
        }
        requestAnimationFrame(render);
    }
})();