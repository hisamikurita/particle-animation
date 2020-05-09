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
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.x2 = Math.random() * this.canvas.width;
    this.y2 = Math.random() * this.canvas.height;
    this.radius = Math.random() * 2.5 + 1;
    this.vx = 0;
    this.vy = 0;
    this.friction = Math.random() * 0.05 + 0.94;
    this.speed = 30;
    this.angle = Math.PI * 2 * Math.random();
    this.rotationSpeed = Math.random() * .001 + .0015;
    this.distancex = Utils.randomDist(this.canvas.width / 12, this.canvas.width / 6 + 120, 2);
    this.distancey = Utils.randomDist(this.canvas.height / 12, this.canvas.height / 1.8 + 200, 6);
    this.x3 = Math.cos(this.angle) * this.distancex + this.canvas.width / 2;
    this.y3 = Math.sin(this.angle) * this.distancey + this.canvas.height / 2;
    this.rotationSpeed = Math.random() * .001 + .0015;
    this.x4 = x;
    this.y4 = y;
  }
  load() {
    this.vx = (this.x2 - this.x) / this.speed;
    this.vy = (this.y2 - this.y) / this.speed;
    this.x += this.vx;
    this.y += this.vy;
  }
  // circle() {
  //   this.angle += this.rotationSpeed;
  //   this.vx = (this.x3 - this.x) / this.speed;
  //   this.vy = (this.y3 - this.y) / this.speed;
  //   this.x += this.vx;
  //   this.y += this.vy;
  //   this.x3 = Math.cos(this.angle) * this.distancex + this.canvas.width / 2;
  //   this.y3 = Math.sin(this.angle) * this.distancey + this.canvas.height / 2;
  // }
  font() {
    this.vx = (this.x4 - this.x) / this.speed;
    this.vy = (this.y4 - this.y) / this.speed;
    this.x += this.vx;
    this.y += this.vy;
  }
  draw() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill()
    this.ctx.restore();
  }
}