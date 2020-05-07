import { Utils } from './util';

const mouse = {};
// const colors = ['#607D8B', '#FFF3E0', '#0097A7'];
const colors = ['#645f5a'];

window.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

export class Particle {
  constructor(x, y) {
    this.canvas = document.querySelector('#canvas');
    this.ctx = canvas.getContext("2d");
    this.color = Utils.randomColor(colors);
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.radius = Math.random() * 5 + 2;
    this.ax = 0;
    this.ay = 0;
    this.friction = Math.random() * 0.05 + 0.94;
    this.dest = {
      x: x,
      y: y,
    }
  }
  update() {
    this.ax = (this.dest.x - this.x) / 30;
    this.ay = (this.dest.y - this.y) / 30;
    this.x += this.ax;
    this.y += this.ay;
  }
  draw() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    // this.ctx.shadowColor = this.color;
    // this.ctx.shadowBlur = 4;
    // this.ctx.shadowOffsetX = 0;
    // this.ctx.shadowOffsetY = 0;
    // this.ctx.globalAlpha = .8;
    this.ctx.fill()
    this.ctx.restore();
  }
}