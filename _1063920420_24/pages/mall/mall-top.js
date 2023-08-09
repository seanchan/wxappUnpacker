(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/mall-top" ], {
    "5eb1": function(t, a, n) {
        n.r(a);
        var e = n("9486"), o = n.n(e);
        for (var l in e) "default" !== l && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(l);
        a.default = o.a;
    },
    "697a": function(t, a, n) {},
    "8ea6": function(t, a, n) {
        var e = n("697a");
        n.n(e).a;
    },
    9486: function(t, a, n) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = {
                components: {},
                props: {
                    listData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        tabBarTop: t.$globalData.systemInfo.titleBarBottom,
                        tabBarHeight: t.$globalData.systemInfo.frontImageHeight,
                        isBackShow: !1
                    };
                },
                computed: {},
                created: function() {
                    var a = this;
                    setTimeout(function() {
                        a.tabBarTop = t.$globalData.systemInfo.titleBarBottom, a.tabBarHeight = t.$globalData.systemInfo.frontImageHeight;
                    }, 100);
                },
                mounted: function() {},
                methods: {
                    toCustomer: function() {
                        this.$emit("toCustomer");
                    },
                    turnSearch: function() {
                        this.$emit("turnSearch");
                    }
                }
            };
            a.default = n;
        }).call(this, n("543d").default);
    },
    c08a: function(t, a, n) {
        n.d(a, "b", function() {
            return e;
        }), n.d(a, "c", function() {
            return o;
        }), n.d(a, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    d398: function(t, a, n) {
        n.r(a);
        var e = n("c08a"), o = n("5eb1");
        for (var l in o) "default" !== l && function(t) {
            n.d(a, t, function() {
                return o[t];
            });
        }(l);
        n("8ea6");
        var r = n("f0c5"), u = Object(r.a)(o.default, e.b, e.c, !1, null, "2178f9e3", null, !1, e.a, void 0);
        a.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/mall/mall-top-create-component", {
    "pages/mall/mall-top-create-component": function(t, a, n) {
        n("543d").createComponent(n("d398"));
    }
}, [ [ "pages/mall/mall-top-create-component" ] ] ]);