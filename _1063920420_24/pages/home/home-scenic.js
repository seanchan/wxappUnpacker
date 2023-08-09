(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/home-scenic" ], {
    "0b7da": function(e, t, n) {
        n.r(t);
        var o = n("7f8e"), c = n("d4fc");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("b49a");
        var l = n("f0c5"), r = Object(l.a)(c.default, o.b, o.c, !1, null, "23e21c0c", null, !1, o.a, void 0);
        t.default = r.exports;
    },
    "7f8e": function(e, t, n) {
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            scrollList: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/scroll-list/scroll-list") ]).then(n.bind(null, "901d"));
            }
        }, c = function() {
            var e = this, t = (e.$createElement, e._self._c, e._f("globalTitleFilter")(e.title));
            e.$mp.data = Object.assign({}, {
                $root: {
                    f0: t
                }
            });
        }, a = [];
    },
    "96b7": function(e, t, n) {},
    b49a: function(e, t, n) {
        var o = n("96b7");
        n.n(o).a;
    },
    c250: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = l(n("823b")), c = l(n("4738")), a = n("2d48");
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o.default.useLogger("home-scenic");
        var r = {
            components: {},
            props: {
                listData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                title: {
                    type: String,
                    default: ""
                },
                showMore: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {};
            },
            computed: {},
            mounted: function() {},
            methods: {
                goScenicDetail: function() {
                    this.allreport(), (0, a.routeTo)({
                        name: "scenic-list",
                        params: {
                            navtitle: this.title
                        }
                    });
                },
                allreport: function() {
                    c.default.Event.event({
                        id: "click_home_recommend_list_all",
                        label: "",
                        params: {
                            title: this.title,
                            block_type: "scenic"
                        }
                    });
                }
            }
        };
        t.default = r;
    },
    d4fc: function(e, t, n) {
        n.r(t);
        var o = n("c250"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/home-scenic-create-component", {
    "pages/home/home-scenic-create-component": function(e, t, n) {
        n("543d").createComponent(n("0b7da"));
    }
}, [ [ "pages/home/home-scenic-create-component" ] ] ]);