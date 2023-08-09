(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/article-text/ticket-card-one" ], {
    "2a0f": function(e, t, n) {
        n.r(t);
        var o = n("fd5a"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    },
    "7de0": function(e, t, n) {
        n.r(t);
        var o = n("8511"), c = n("2a0f");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("ae64");
        var r = n("f0c5"), i = Object(r.a)(c.default, o.b, o.c, !1, null, "db98f240", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    8511: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.content.theme_color.join(","));
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, c = [];
    },
    "897c": function(e, t, n) {},
    ae64: function(e, t, n) {
        var o = n("897c");
        n.n(o).a;
    },
    fd5a: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n("aa3e"), c = {
            components: {
                OmImage: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/om-image/index") ]).then(function() {
                        return resolve(n("2f8a"));
                    }.bind(null, n)).catch(n.oe);
                },
                filterText: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                        return resolve(n("6af9"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                type: {
                    type: Number,
                    default: 0
                },
                content: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    assetsImage: o.assetsImage.expressticket
                };
            },
            methods: {
                goDetail: function(e) {
                    this.$emit("turnResult", e);
                },
                checkNotice: function(e) {
                    this.$emit("checkNotice", e);
                }
            }
        };
        t.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/article-text/ticket-card-one-create-component", {
    "components/rtmap/article-text/ticket-card-one-create-component": function(e, t, n) {
        n("543d").createComponent(n("7de0"));
    }
}, [ [ "components/rtmap/article-text/ticket-card-one-create-component" ] ] ]);