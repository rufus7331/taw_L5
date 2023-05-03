export class Punkt {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    public toString(): string {
        return `(${this.x},${this.y})`;
    }
}
class Prostokat {
    private a: Punkt;
    private b: Punkt;
    private c: Punkt;
    private d: Punkt;

    constructor(a: Punkt, b: Punkt, c: Punkt, d: Punkt) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    public move(dx: number, dy: number): void {
        this.a.move(dx, dy);
        this.b.move(dx, dy);
        this.c.move(dx, dy);
        this.d.move(dx, dy);
    }

    public getArea(): number {
        const ab = Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2));
        const bc = Math.sqrt(Math.pow(this.c.x - this.b.x, 2) + Math.pow(this.c.y - this.b.y, 2));
        return ab * bc;
    }
}

let przyklad = new Prostokat(new Punkt(1,3),new Punkt(5,5),new Punkt(3,7),new Punkt(7,4))
console.log(przyklad.getArea())
przyklad.move(1,1)
