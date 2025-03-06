//for activity 1
function f1(x, y) {
    return x + y;
}
//for activity 2
function f2(x, y) {
    return -0.2 * (y - 20);
}
function get_yp(x, y, h, f) {
    return (y[0] +
        ((4 * h) / 3) * (2 * f(x[1], y[1]) - f(x[2], y[2]) + 2 * f(x[3], y[3])));
}
function get_yc(x, y, x4, h, yp, f) {
    return y[2] + (h / 3) * (f(x[2], y[2]) + 4 * f(x[3], y[3]) + f(x4, yp));
}
//# sourceMappingURL=milnes.js.map