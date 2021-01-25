module.exports = function reverse(n) {
    const a = n < 0 ? n.toString().substr(1) : n.toString();
    const b = a.toString().split("").reverse().join("");
    return +b;
};
