(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/navigation/custom-navigation" ], {
    "2a0c": function(t, n, o) {},
    "5c3f": function(t, n, o) {
        o.d(n, "b", function() {
            return a;
        }), o.d(n, "c", function() {
            return e;
        }), o.d(n, "a", function() {});
        var a = function() {
            var t = this, n = (t.$createElement, t._self._c, t.frontImageStyle ? o("a2bd") : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: n
                }
            });
        }, e = [];
    },
    "91ac": function(t, n, o) {
        o.r(n);
        var a = o("9bb2"), e = o.n(a);
        for (var c in a) "default" !== c && function(t) {
            o.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = e.a;
    },
    "9bb2": function(t, n, o) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = o("2d48"), e = {
                data: function() {
                    return {
                        top: t.$globalData.systemInfo.menuButton.top,
                        frontImageStyle: t.$globalData.systemInfo.frontImageHeight,
                        titleShow: !1
                    };
                },
                mounted: function() {
                    var n = this;
                    setTimeout(function() {
                        var o = t.getMenuButtonBoundingClientRect();
                        n.top = o.top, n.frontImageStyle = t.$globalData.systemInfo.frontImageHeight;
                    }, 100);
                },
                created: function() {
                    var n = this;
                    setTimeout(function() {
                        var o = t.getMenuButtonBoundingClientRect();
                        n.top = o.top;
                    }, 100);
                },
                methods: {
                    back: function() {
                        (0, a.routeBack)({
                            params: {}
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, o("543d").default);
    },
    c2e7: function(t, n, o) {
        o.r(n);
        var a = o("5c3f"), e = o("91ac");
        for (var c in e) "default" !== c && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(c);
        o("eb63");
        var u = o("f0c5"), i = Object(u.a)(e.default, a.b, a.c, !1, null, "5d63b4dc", null, !1, a.a, void 0);
        n.default = i.exports;
    },
    eb63: function(t, n, o) {
        var a = o("2a0c");
        o.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/navigation/custom-navigation-create-component", {
    "components/navigation/custom-navigation-create-component": function(t, n, o) {
        o("543d").createComponent(o("c2e7"));
    }
}, [ [ "components/navigation/custom-navigation-create-component" ] ] ]);