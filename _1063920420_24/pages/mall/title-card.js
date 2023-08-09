(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/title-card" ], {
    "1eb3": function(e, t, a) {},
    "369a": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = a("2d48"), l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("4738"));
        var o = {
            components: {},
            props: {
                title: {
                    type: String,
                    default: ""
                },
                isShowMore: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            computed: {},
            mounted: function() {},
            methods: {
                showTips: function() {
                    switch (this.type) {
                      case "article":
                        l.default.Event.event({
                            id: "click_mall_combined_goods_all",
                            label: "",
                            params: {}
                        }), (0, n.routeTo)({
                            name: "combination",
                            params: {}
                        });
                        break;

                      case "ticket":
                        l.default.Event.event({
                            id: "click_mall_ticket_all",
                            label: "",
                            params: {}
                        }), (0, n.routeTo)({
                            name: "recommended-tickets-list",
                            params: {}
                        });
                        break;

                      case "hotel":
                        l.default.Event.event({
                            id: "click_mall_hotel_all",
                            label: "",
                            params: {}
                        }), (0, n.routeTo)({
                            name: "hotelReservation-list",
                            params: {}
                        });
                    }
                }
            }
        };
        t.default = o;
    },
    "3fbf": function(e, t, a) {
        var n = a("1eb3");
        a.n(n).a;
    },
    b5d8: function(e, t, a) {
        a.r(t);
        var n = a("369a"), l = a.n(n);
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = l.a;
    },
    eb61: function(e, t, a) {
        a.r(t);
        var n = a("fb12"), l = a("b5d8");
        for (var o in l) "default" !== o && function(e) {
            a.d(t, e, function() {
                return l[e];
            });
        }(o);
        a("3fbf");
        var c = a("f0c5"), r = Object(c.a)(l.default, n.b, n.c, !1, null, "e7fe37a8", null, !1, n.a, void 0);
        t.default = r.exports;
    },
    fb12: function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return l;
        }), a.d(t, "a", function() {});
        var n = function() {
            var e = this, t = (e.$createElement, e._self._c, e._f("globalTitleFilter")(e.title));
            e.$mp.data = Object.assign({}, {
                $root: {
                    f0: t
                }
            });
        }, l = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/mall/title-card-create-component", {
    "pages/mall/title-card-create-component": function(e, t, a) {
        a("543d").createComponent(a("eb61"));
    }
}, [ [ "pages/mall/title-card-create-component" ] ] ]);