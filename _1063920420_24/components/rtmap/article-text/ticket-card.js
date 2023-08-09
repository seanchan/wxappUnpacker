(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/article-text/ticket-card" ], {
    5981: function(t, e, n) {},
    "59f8": function(t, e, n) {
        n.r(e);
        var c = n("e30c"), o = n.n(c);
        for (var a in c) "default" !== a && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(a);
        e.default = o.a;
    },
    "88c4": function(t, e, n) {
        n.d(e, "b", function() {
            return c;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var c = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    c7bc: function(t, e, n) {
        var c = n("5981");
        n.n(c).a;
    },
    e30c: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = n("aa3e"), o = {
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
                    assetsImage: c.assetsImage.expressticket
                };
            },
            methods: {
                turnResult: function(t) {
                    this.$emit("turnResult", t);
                },
                checkNotice: function(t) {
                    this.$emit("checkNotice", t);
                }
            }
        };
        e.default = o;
    },
    f46f: function(t, e, n) {
        n.r(e);
        var c = n("88c4"), o = n("59f8");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("c7bc");
        var r = n("f0c5"), i = Object(r.a)(o.default, c.b, c.c, !1, null, "12ca06d8", null, !1, c.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/article-text/ticket-card-create-component", {
    "components/rtmap/article-text/ticket-card-create-component": function(t, e, n) {
        n("543d").createComponent(n("f46f"));
    }
}, [ [ "components/rtmap/article-text/ticket-card-create-component" ] ] ]);