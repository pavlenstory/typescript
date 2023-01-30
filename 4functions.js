function sum(a, b) {
    return a + b;
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty position', position());
console.log('One param', position(4));
console.log('Two params', position(13, 43));
