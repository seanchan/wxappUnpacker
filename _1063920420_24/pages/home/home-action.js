(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/home-action" ], {
    "098d": function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = t("2d48"), c = a(t("b775"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = a(t("823b")).default.useLogger("home-action"), u = {
                components: {},
                data: function() {
                    return {
                        isRelease1: e.getStorageSync("nowRelease")
                    };
                },
                computed: {},
                mounted: function() {},
                methods: {
                    clickLeft: function() {
                        this.$emit("search"), i.log("click left");
                    },
                    getLoginStatus: function() {
                        var e = this;
                        return new Promise(function(n, t) {
                            c.default.$get("/check/login", {}, {
                                header: {
                                    MINIAPPTOKEN: e.token
                                }
                            }).then(function() {
                                n();
                            }).catch(function(e) {
                                t(e);
                            });
                        });
                    },
                    clickRight: function() {
                        var n = this;
                        e.scanCode({
                            scanType: [ "qrCode" ],
                            success: function(e) {
                                n.getLoginStatus().then(function() {
                                    var t = {
                                        code: String(e.result)
                                    };
                                    c.default.$get("/home/scan", t, {}).then(function(e) {
                                        0 === e.ret ? 2 === e.data.type ? (0, o.routeTo)({
                                            name: "order-verification",
                                            params: {
                                                type: "line",
                                                channel: "ticket",
                                                qrCode: e.data.code
                                            }
                                        }) : n.$emit("scancode") : 3 === e.type ? n.$emit("scancodeGames", e.code) : n.$emit("scancode");
                                    }).catch(function(e) {
                                        n.$emit("scancode");
                                    });
                                });
                            }
                        }), i.log("click right");
                    }
                }
            };
            n.default = u;
        }).call(this, t("543d").default);
    },
    "35ad": function(e, n, t) {
        t.r(n);
        var o = t("098d"), c = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = c.a;
    },
    f721: function(e, n, t) {
        t.d(n, "b", function() {
            return c;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            topNav: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/top-nav/top-nav") ]).then(t.bind(null, "9cbe"));
            }
        }, c = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    fb3e: function(e, n, t) {
        t.r(n);
        var o = t("f721"), c = t("35ad");
        for (var a in c) "default" !== a && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(a);
        var i = t("f0c5"), u = Object(i.a)(c.default, o.b, o.c, !1, null, "753b01d8", null, !1, o.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/home-action-create-component", {
    "pages/home/home-action-create-component": function(e, n, t) {
        t("543d").createComponent(t("fb3e"));
    }
}, [ [ "pages/home/home-action-create-component" ] ] ]);