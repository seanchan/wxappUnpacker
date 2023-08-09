(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/artical-card" ], {
    "0650": function(t, e, a) {
        a.r(e);
        var n = a("81b7"), o = a.n(n);
        for (var c in n) "default" !== c && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = o.a;
    },
    "31b9": function(t, e, a) {
        a.r(e);
        var n = a("7128"), o = a("0650");
        for (var c in o) "default" !== c && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(c);
        a("c7a5");
        var i = a("f0c5"), r = Object(i.a)(o.default, n.b, n.c, !1, null, "2e19f293", null, !1, n.a, void 0);
        e.default = r.exports;
    },
    7128: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "81b7": function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a("2d48"), o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a("4738"));
        var c = {
            components: {
                OmImage: function() {
                    Promise.all([ a.e("common/vendor"), a.e("components/om-image/index") ]).then(function() {
                        return resolve(a("2f8a"));
                    }.bind(null, a)).catch(a.oe);
                },
                filterText: function() {
                    Promise.all([ a.e("common/vendor"), a.e("components/ui/filterText") ]).then(function() {
                        return resolve(a("6af9"));
                    }.bind(null, a)).catch(a.oe);
                }
            },
            props: {
                listData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {};
            },
            computed: {},
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t.listData.length > 0 && t.listData.forEach(function(t, e) {
                        var a = {
                            material_id: t.material_id,
                            material_title: t.title,
                            index: e
                        };
                        o.default.Event.event({
                            id: "show_mall_combined_goods",
                            label: "",
                            params: a
                        });
                    });
                }, 500);
            },
            methods: {
                colorRgb: function(t) {
                    if (t && /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/.test(t)) {
                        4 === t.length && (t = "#".concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2]).concat(t[3]).concat(t[3]));
                        for (var e = [], a = 1; a < 7; a += 2) e.push(parseInt("0x".concat(t.slice(a, a + 2)), 0));
                        return "rgba(".concat(e.join(","), ",1)");
                    }
                    return t;
                },
                showTips: function(t, e) {
                    var a = {
                        material_id: t.material_id,
                        material_title: t.title,
                        index: e
                    };
                    switch (o.default.Event.event({
                        id: "click_mall_combined_goods",
                        label: "",
                        params: a
                    }), t.material_type) {
                      case "combination":
                        (0, n.routeTo)({
                            name: "combination-detail",
                            params: {
                                id: t.material_id
                            }
                        });
                        break;

                      default:
                        this.$loading("敬请期待");
                    }
                }
            }
        };
        e.default = c;
    },
    c7a5: function(t, e, a) {
        var n = a("eb27");
        a.n(n).a;
    },
    eb27: function(t, e, a) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/mall/artical-card-create-component", {
    "pages/mall/artical-card-create-component": function(t, e, a) {
        a("543d").createComponent(a("31b9"));
    }
}, [ [ "pages/mall/artical-card-create-component" ] ] ]);