var e = require("./toPropertyKey");

module.exports = function(r, t, n) {
    return (t = e(t)) in r ? Object.defineProperty(r, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[t] = n, r;
};