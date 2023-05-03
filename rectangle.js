"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punkt = void 0;
class Punkt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
}
exports.Punkt = Punkt;
class Prostokat {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    move(dx, dy) {
        this.a.move(dx, dy);
        this.b.move(dx, dy);
        this.c.move(dx, dy);
        this.d.move(dx, dy);
    }
    getArea() {
        const ab = Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2));
        const bc = Math.sqrt(Math.pow(this.c.x - this.b.x, 2) + Math.pow(this.c.y - this.b.y, 2));
        return ab * bc;
    }
}
let przyklad = new Prostokat(new Punkt(1, 3), new Punkt(5, 5), new Punkt(3, 7), new Punkt(7, 4));
console.log(przyklad.getArea());
przyklad.move(1, 1);
