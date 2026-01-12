/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let steps = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];

        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);

        const diagonal = Math.min(dx, dy);
        const remain = Math.abs(dx - dy);

        steps += diagonal + remain;
    }

    return steps;
};
