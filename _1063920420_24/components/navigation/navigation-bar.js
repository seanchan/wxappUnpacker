(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/navigation/navigation-bar" ], {
    "0762": function(t, n, a) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = a("2d48"), e = {
                components: {
                    NavInner: function() {
                        a.e("components/navigation/nav-inner").then(function() {
                            return resolve(a("b215"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {
                    navType: {
                        type: String,
                        default: "default"
                    },
                    alwaysShowHome: {
                        type: Boolean,
                        default: !1
                    },
                    customBackHandler: {
                        type: String,
                        default: null
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    backgroundColor: {
                        type: String,
                        default: "#ffffff"
                    }
                },
                data: function() {
                    return {
                        customNav: !1,
                        navBarBgOpacity: 0,
                        obAnchor: null,
                        navHeight: "128px",
                        menuTop: "26px",
                        menuHeight: "32px",
                        cityName: "伦敦",
                        titleMargin: "97px",
                        titleWidth: "181px"
                    };
                },
                computed: {},
                mounted: function() {
                    this.initAnchor("static" === this.navType);
                },
                methods: {
                    initAnchor: function(n) {
                        var a = this, o = t.$globalData.systemInfo, e = o.navigationCustomed, i = o.menuButton, c = o.windowWidth;
                        if (e) try {
                            var r = i.bottom, u = i.top, f = i.height, l = c - i.left;
                            this.titleMargin = "".concat(l, "px"), this.titleWidth = "".concat(c - 2 * l, "px"), 
                            this.menuHeight = "".concat(f, "px"), this.menuTop = "".concat(u, "px"), this.navHeight = "".concat(r + 10, "px");
                            var s = t.createIntersectionObserver(this);
                            n ? this.navBarBgOpacity = 1 : s.relativeToViewport({
                                top: -30
                            }).observe("#nav-anchor", function(t) {
                                var n = t.intersectionRatio;
                                a.navBarBgOpacity = 0 === n ? 1 : 0;
                            }), this.customNav = !0;
                        } catch (t) {}
                    },
                    goBack: function() {
                        this.customBackHandler ? this.$emit("customBack", this.customBackHandler) : (0, 
                        o.routeBack)();
                    },
                    goHome: function() {
                        (0, o.routeTo)({
                            name: "home"
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, a("543d").default);
    },
    "0b68": function(t, n, a) {
        a.d(n, "b", function() {
            return o;
        }), a.d(n, "c", function() {
            return e;
        }), a.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, e = [];
    },
    "72ff": function(t, n, a) {
        var o = a("c980");
        a.n(o).a;
    },
    b6d4: function(t, n, a) {
        a.r(n);
        var o = a("0b68"), e = a("d462");
        for (var i in e) "default" !== i && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(i);
        a("72ff");
        var c = a("f0c5"), r = Object(c.a)(e.default, o.b, o.c, !1, null, "cbe6692a", null, !1, o.a, void 0);
        n.default = r.exports;
    },
    c980: function(t, n, a) {},
    d462: function(t, n, a) {
        a.r(n);
        var o = a("0762"), e = a.n(o);
        for (var i in o) "default" !== i && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(i);
        n.default = e.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/navigation/navigation-bar-create-component", {
    "components/navigation/navigation-bar-create-component": function(t, n, a) {
        a("543d").createComponent(a("b6d4"));
    }
}, [ [ "components/navigation/navigation-bar-create-component" ] ] ]);