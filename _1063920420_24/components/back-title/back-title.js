(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/back-title/back-title", "components/ui/font-weight" ], {
    1274: function(t, e, n) {
        n.r(e);
        var o = n("c9a9"), a = n("2f2a");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("9fd0");
        var i = n("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, "5f70738d", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "1c2b": function(t, e, n) {
        n.r(e);
        var o = n("2042"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    2042: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("aa3e"), a = {
            data: function() {
                return {
                    assetsImage: o.assetsImage.common,
                    error: "url('".concat(o.assetsImage.common.error, "')"),
                    loadingimg: "url('".concat(o.assetsImage.common.loading, "')"),
                    seizeImg: o.assetsImage.seizeImg
                };
            }
        };
        e.default = a;
    },
    "269f": function(t, e, n) {
        n.r(e);
        var o = n("eca4"), a = n("1c2b");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("37a9");
        var i = n("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "2f2a": function(t, e, n) {
        n.r(e);
        var o = n("f0c3"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    "37a9": function(t, e, n) {
        var o = n("c473");
        n.n(o).a;
    },
    "9fd0": function(t, e, n) {
        var o = n("ba78");
        n.n(o).a;
    },
    ba78: function(t, e, n) {},
    c473: function(t, e, n) {},
    c9a9: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    eca4: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    f0c3: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("823b")), a = n("2d48"), c = n("aa3e"), i = (r(n("269f")), r(n("4738")));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var u = o.default.useLogger("back-title"), l = {
                name: "TopNav",
                components: {
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    leftIcon: {
                        type: String,
                        default: ""
                    },
                    navTitle: {
                        type: String,
                        default: ""
                    },
                    backColor: {
                        type: String,
                        default: "#0368d9"
                    },
                    textColor: {
                        type: String,
                        default: "#fff"
                    },
                    showCancel: {
                        type: Boolean,
                        default: !1
                    },
                    isShowIcon: {
                        type: Boolean,
                        default: !1
                    },
                    custom: {
                        type: Boolean,
                        default: !1
                    },
                    type: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        top: t.$globalData.systemInfo.titleBarBottom,
                        frontImageStyle: t.$globalData.systemInfo.frontImageHeight,
                        assetsImage: c.assetsImage.index
                    };
                },
                computed: {
                    titleText: function() {
                        return decodeURIComponent(this.navTitle || "");
                    }
                },
                created: function() {
                    var e = this;
                    setTimeout(function() {
                        var n = t.getMenuButtonBoundingClientRect();
                        e.top = n.top, e.frontImageStyle = t.$globalData.systemInfo.frontImageHeight;
                    }, 100);
                },
                mounted: function() {},
                methods: {
                    onClickLeft: function() {
                        "coupon" === this.type ? (0, a.routeBack)({
                            params: {}
                        }) : "cashier" === this.type ? this.$emit("cashier") : "invoice" === this.type ? (0, 
                        a.routeBack)({
                            delta: 3
                        }) : "shop" === this.type ? (0, a.routeBack)({
                            delta: 2
                        }) : "reserve" === this.type ? this.$emit("routeBack") : ("collect" === this.type && i.default.Event.event({
                            id: "click_my_collection_return",
                            label: "",
                            params: {}
                        }), (0, a.routeBack)({
                            params: {}
                        }));
                    },
                    onClickRight: function() {
                        (0, a.routeTo)({
                            name: "home",
                            params: {},
                            type: "reLaunch"
                        });
                    },
                    setFrontImageHeightStyle: function() {
                        try {
                            var e = t.$globalData.systemInfo, n = (e.statusBarHeight, e.menuButton), o = e.ratio, a = (n.bottom + 10) / o;
                            this.frontImageStyle = a;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            u.tag("setFrontImageHeightStyle").log(t);
                        }
                    },
                    clikReporting: function() {
                        this.$emit("clikReporting");
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/back-title/back-title-create-component", {
    "components/back-title/back-title-create-component": function(t, e, n) {
        n("543d").createComponent(n("1274"));
    }
}, [ [ "components/back-title/back-title-create-component" ] ] ]);