(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/function-tab" ], {
    "371b": function(t, e, n) {
        n.r(e);
        var r = n("a17d"), i = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = i.a;
    },
    "5fb9": function(t, e, n) {},
    "6d40e": function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    9238: function(t, e, n) {
        var r = n("5fb9");
        n.n(r).a;
    },
    a17d: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("823b")), i = (n("2d48"), o(n("4738"))), a = n("86ea");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            r.default.useLogger("home-scenic");
            var l = {
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
                        listIndex: 0,
                        isSamsung: !1
                    };
                },
                computed: {
                    dataList: function() {
                        return this.listData.map(function(t, e) {
                            return function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                                        u(t, e, n[e]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    });
                                }
                                return t;
                            }({}, t, {
                                index: e
                            });
                        }).reduce(function(t, e) {
                            var n = t[t.length - 1];
                            (!n || n.children.length >= 10) && (t.push({
                                rows: [],
                                children: []
                            }), n = t[t.length - 1]), n.children.length < 10 && n.children.push(e);
                            var r = n.children.length, i = t.length > 1 || !(4 == r || 6 == r || 7 == r || 8 == r);
                            n.rows = [];
                            for (var a = 0, o = i ? 5 : 4; a < r; a += o) {
                                for (var c = n.children.slice(a, a + o); c.length < o; ) c.push({
                                    icon: null,
                                    title: c.length,
                                    placer: !0
                                });
                                n.rows.push(c);
                            }
                            return t;
                        }, []);
                    },
                    listHeihgt: function() {
                        return 186 * ((this.dataList || [])[this.listIndex] || {
                            dense: !0,
                            rows: [],
                            children: []
                        }).rows.length;
                    },
                    showIndicator: function() {
                        return ((this.dataList || []).length || 0) > 1;
                    },
                    indicatorLeft: function() {
                        return 18 * this.listIndex;
                    },
                    indicatorRight: function() {
                        var t = (this.dataList || []).length || 0;
                        return t > 0 ? 18 * (t - this.listIndex - 1) : 0;
                    }
                },
                mounted: function() {
                    this.getFrontImageHeight();
                },
                methods: {
                    goDetail: function(t, e, n) {
                        if (!e.placer) {
                            var r = {
                                material_title: e.title,
                                index: n
                            };
                            i.default.Event.event({
                                id: "click_mall_functional_area_button",
                                label: "",
                                params: r
                            }), (0, a.launchScheme)(e.mini_jump_url);
                        }
                    },
                    getFrontImageHeight: function() {
                        var e = this;
                        t.getSystemInfo({
                            success: function(t) {
                                e.isSamsung = "samsung" === t.brand;
                            }
                        });
                    },
                    handleSwiperChange: function(t) {
                        var e = t.detail.current;
                        this.listIndex = e;
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    b76e: function(t, e, n) {
        n.r(e);
        var r = n("6d40e"), i = n("371b");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("9238");
        var o = n("f0c5"), c = Object(o.a)(i.default, r.b, r.c, !1, null, "04c9e1fe", null, !1, r.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/mall/function-tab-create-component", {
    "pages/mall/function-tab-create-component": function(t, e, n) {
        n("543d").createComponent(n("b76e"));
    }
}, [ [ "pages/mall/function-tab-create-component" ] ] ]);