var r = require("./typeof"), e = require("./toPrimitive");

module.exports = function(i) {
    var t = e(i, "string");
    return "symbol" === r(t) ? t : String(t);
};