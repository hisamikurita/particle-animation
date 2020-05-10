import { Utils } from './util';

const mouse = {};
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
    this.vx2 = 0;
    this.vy2 = 0;
    this.friction = Math.random() * 0.05 + 0.94;
    this.speed = 20;
    this.angle = Math.PI * 2 * Math.random();
    this.rotationSpeed = Math.random() * .001 + .0015;
    this.distancex = Utils.randomDist(this.canvas.width / 12, this.canvas.width / 6 + 120, 2);
    this.distancey = Utils.randomDist(this.canvas.height / 12, this.canvas.height / 1.8 + 200, 6);
    this.x3 = Math.cos(this.angle) * this.distancex + this.canvas.width / 2;
    this.y3 = Math.sin(this.angle) * this.distancey + this.canvas.height / 2;
    this.rotationSpeed = Math.random() * .001 + .0015;
    this.x4 = x;
    this.y4 = y;
    this.ax = (Math.random() - 0.5) * 10;
    this.ay = (Math.random() - 0.5) * 10;
  }
  load() {
    this.vx = (this.x2 - this.x) / this.speed;
    this.vy = (this.y2 - this.y) / this.speed;
    this.x += this.vx;
    this.y += this.vy;
  }
  circle() {
    this.dist = Utils.distanceXY(this.x, this.y, mouse.x, mouse.y);
    this.angle += this.rotationSpeed;
    this.vx = (this.x3 - this.x) / this.speed;
    this.vy = (this.y3 - this.y) / this.speed;
    this.x += this.vx;
    this.y += this.vy;
    this.x3 = Math.cos(this.angle) * this.distancex + this.canvas.width / 2 + this.vx2;
    this.y3 = Math.sin(this.angle) * this.distancey + this.canvas.height / 2 + this.vy2;
    this.vx2 *= this.friction;
    this.vy2 *= this.friction;
    if (this.dist < this.radius * 20) {
      this.vx2 += this.ax * mouse.x;
      this.vy2 += this.ay * mouse.y;
    }
  }
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