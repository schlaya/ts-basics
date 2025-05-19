class PointProperties {
    constructor(private _x: number, private _y: number) {}

    draw() {
        console.log("X: " + this._x + ", Y: " + this._y);
    }

    get X() {
        return this._x;
    }

    set X(value) {
        if (value < 0) throw new Error("value can not be less than 0.");

        this._x = value;
    }
}

let pointProperties = new PointProperties(1, 2);
let x = pointProperties.X;
pointProperties.X = 10;
pointProperties.draw();
