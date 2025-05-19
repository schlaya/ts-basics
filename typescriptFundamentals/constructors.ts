class PointConstructor {
    // now x and y are only accesible within class
    private x: number;
    private y: number;

    // falls x nichts übergibt automatisch 0
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
}

let pointConstructor = new PointConstructor(1, 2);
pointConstructor.draw();
