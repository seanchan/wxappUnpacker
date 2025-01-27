var r = require("./typeof");

module.exports = function(e, t) {
    if ("object" !== r(e) || null === e) return e;
    var i = e[Symbol.toPrimitive];
    if (void 0 !== i) {
        var o = i.call(e, t || "default");
        if ("object" !== r(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
};