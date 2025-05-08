// when naming interfaces use PascalCase
// interfaces are purely for declarations
interface Point1 {
    x: number;
    y: number;
}

let drawPoint = (point1: Point1) => {
    // ...
};

drawPoint({
    x: 1,
    y: 2,
});
