// first two are named "fields"
// the third and fourth one are a method
class PointObject {
    x: number;
    y: number;

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getDistance(another: PointObject) {
        // ...
    }
}

let point = new PointObject();
point.x = 1;
point.y = 2;
point.draw();
