(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Popups/Mask" ], {
    "003c": function(n, e, t) {
        t.r(e);
        var o = t("b3d5"), a = t("e8ac");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("006e");
        var u = t("f0c5"), s = Object(u.a)(a.default, o.b, o.c, !1, null, "9685ab9e", null, !1, o.a, void 0);
        e.default = s.exports;
    },
    "006e": function(n, e, t) {
        var o = t("25a5");
        t.n(o).a;
    },
    "25a5": function(n, e, t) {},
    b3d5: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this, e = (n.$createElement, n._self._c, n.show ? n.__get_style([ n.style ]) : null);
            n.$mp.data = Object.assign({}, {
                $root: {
                    s0: e
                }
            });
        }, a = [];
    },
    dcd3: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "Mask",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                style: {
                    type: Object,
                    default: function() {
                        return {
                            zIndex: 100
                        };
                    }
                },
                isTapClose: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {};
            },
            methods: {
                clean: function() {
                    return !1;
                },
                onTap: function() {
                    this.isTapClose && this.$emit("update:show", !1);
                }
            }
        };
        e.default = o;
    },
    e8ac: function(n, e, t) {
        t.r(e);
        var o = t("dcd3"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Popups/Mask-create-component", {
    "components/Popups/Mask-create-component": function(n, e, t) {
        t("543d").createComponent(t("003c"));
    }
}, [ [ "components/Popups/Mask-create-component" ] ] ]);