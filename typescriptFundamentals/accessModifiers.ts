class PointAccessModifier {

    //here wo do not need to assign it to this.x = x 
    constructor(private x: number = 0, private y: number = 0) {}

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
}

let pointAccessModifier = new PointAccessModifier(1, 2);
pointConstructor.draw();
