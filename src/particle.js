import { Utils } from './util';

const mouse = {};

window.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

export class Particle {
  constructor(x, y) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.color = '#645f5a';
    this.x = this.canvas.width + Math.random();
    this.y = this.canvas.height + Math.random();
    this.dest = {
      x: x,
      y: y
    }
    this.radius = Math.random() * 2.5 + 1;
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.friction = Math.random() * 0.05 + 0.94;
    this.ax = 0;
    this.ay = 0;
  }
  update() {
    this.ax = (this.dest.x - this.x) / 100;
    this.ay = (this.dest.x - this.y) / 100;
    this.vx += this.ax;
    this.vy += this.ay;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;
    if (this.dist < this.radius * 30) {
      this.vx += this.ax * mouse.x / 10;
      this.vy += this.ay * mouse.y / 10;
    }
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    if (this.dist < this.radius * 30) {
      this.ctx.fillStyle = '#87d7f2';
    }
    this.ctx.fill()
  }
  resize() {
    this.distancex = Utils.randomDist(this.canvas.width / 12, this.canvas.width / 6 + 150, 2);
    this.distancey = Utils.randomDist(this.canvas.height / 12, this.canvas.height / 1.8 + 200, 6);
  }
  mousemove() {
    this.dist = Utils.distanceXY(this.x, this.y, mouse.x, mouse.y);
  }
}