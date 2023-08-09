(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/scroll-tab/scroll-tab" ], {
    "2a9e": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n("2f62"), o = c(n("823b")), l = c(n("4738")), r = (n("2d48"), c(n("b775")), 
        n("86ea"));
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var u = o.default.useLogger("scroll-tab"), f = {
            name: "ScrollTab",
            props: {
                list: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {
                    top: 0,
                    smallLineWidth: 0,
                    smallLineLeft: 0,
                    smallLineRight: "",
                    showScrollLine: !1,
                    tips: !0,
                    newList: []
                };
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }({}, (0, i.mapState)({
                token: function(t) {
                    return t.bindPhone.token;
                }
            })),
            watch: {
                list: {
                    handler: function(t, e) {
                        this.newList = t, this.getSmallLineWith(), u.log("监听滚动tab列表：", t);
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                u.log("this.list:", this.list), this.getSmallLineWith();
            },
            methods: {
                showTips: function(t, e) {
                    var n = this;
                    if (this.tips) {
                        this.tips = !1;
                        var i = {
                            title: t.title,
                            index: e
                        };
                        l.default.Event.event({
                            id: "click_home_functional_list",
                            label: "",
                            params: i
                        }), t.mini_jump_url && (0, r.launchScheme)(t.mini_jump_url);
                    }
                    setTimeout(function() {
                        n.tips = !0;
                    }, 3e3);
                },
                scroll: function(t) {
                    if (this.newList.length <= 4) return !1;
                    var e = t.detail, n = e.scrollLeft, i = e.scrollWidth;
                    this.smallLineRight = "", this.smallLineLeft = "".concat(n / i * 120, "%");
                },
                toupper: function(t) {
                    this.smallLineLeft = "0";
                },
                tolower: function(t) {
                    var e = this;
                    setTimeout(function() {
                        e.smallLineLeft = "", e.smallLineRight = "0";
                    }, 0);
                },
                getSmallLineWith: function() {
                    this.newList.length > 4 ? this.showScrollLine = !0 : this.showScrollLine = !1;
                    var t = this.newList;
                    t.length > 4 && (this.smallLineWidth = 4 / t.length * 36, u.log("this.smallLineWidth:", this.smallLineWidth));
                }
            }
        };
        e.default = f;
    },
    9104: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    b0e5: function(t, e, n) {},
    e75b: function(t, e, n) {
        n.r(e);
        var i = n("2a9e"), o = n.n(i);
        for (var l in i) "default" !== l && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(l);
        e.default = o.a;
    },
    ef2c: function(t, e, n) {
        n.r(e);
        var i = n("9104"), o = n("e75b");
        for (var l in o) "default" !== l && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(l);
        n("f589");
        var r = n("f0c5"), c = Object(r.a)(o.default, i.b, i.c, !1, null, "20ca58d6", null, !1, i.a, void 0);
        e.default = c.exports;
    },
    f589: function(t, e, n) {
        var i = n("b0e5");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/scroll-tab/scroll-tab-create-component", {
    "components/scroll-tab/scroll-tab-create-component": function(t, e, n) {
        n("543d").createComponent(n("ef2c"));
    }
}, [ [ "components/scroll-tab/scroll-tab-create-component" ] ] ]);