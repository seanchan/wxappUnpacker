(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ui/gift-card" ], {
    "37ba": function(t, n, e) {
        var o = e("d973");
        e.n(o).a;
    },
    "46ce": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {});
        var o = function() {
            var t = this, n = (t.$createElement, t._self._c, t.getThemeBg(t.content.theme_color || t.content.image.theme_color));
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: n
                }
            });
        }, c = [];
    },
    8255: function(t, n, e) {
        e.r(n);
        var o = e("46ce"), c = e("c007");
        for (var a in c) "default" !== a && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(a);
        e("37ba");
        var r = e("f0c5"), i = Object(r.a)(c.default, o.b, o.c, !1, null, "51f48c48", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    c007: function(t, n, e) {
        e.r(n);
        var o = e("c87b"), c = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = c.a;
    },
    c87b: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, e("2d48");
        var o = {
            components: {
                OmImage: function() {
                    Promise.all([ e.e("common/vendor"), e.e("components/om-image/index") ]).then(function() {
                        return resolve(e("2f8a"));
                    }.bind(null, e)).catch(e.oe);
                },
                filterText: function() {
                    Promise.all([ e.e("common/vendor"), e.e("components/ui/filterText") ]).then(function() {
                        return resolve(e("6af9"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                content: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    width1: 610,
                    width2: 422
                };
            },
            computed: {
                titleClass: function() {
                    return this.getTextClass(this.content.title);
                }
            },
            methods: {
                goDetail: function(t) {
                    this.$emit("goDetail"), this.$emit("turnResult", this.content);
                },
                getTextClass: function(t) {
                    var n;
                    n = this.content.sub_title ? this.width1 : this.width2;
                    var e = this.$options.filters.globalTitleFilter(t), o = this.getStrLength(e);
                    return 40.4 * o < Math.floor(3 * n - 40.4) ? "font20" : 36.4 * o < Math.floor(3 * n - 36.4) ? "font18" : 32.4 * o < Math.floor(3 * n - 32.4) ? "font16" : 28.4 * o < Math.floor(3 * n - 28.4) ? "font14" : "font12";
                },
                getStrLength: function(t) {
                    for (var n = 0, e = 0, o = t.length; e < o; ++e) {
                        n += t[e].charCodeAt() > 128 ? 1 : .5;
                    }
                    return Math.ceil(n);
                },
                getThemeBg: function(t) {
                    return t && t.length > 0 ? "linear-gradient(180deg, rgba(".concat(t[0], ",").concat(t[1], ",").concat(t[2], ",0.00) 0%, rgba(").concat(t[0], ",").concat(t[1], ",").concat(t[2], ",1.00) 100%);") : "linear-gradient(180deg, rgba(000,000,000,0.00) 0%, rgba(000,000,000,1.00) 100%)";
                }
            }
        };
        n.default = o;
    },
    d973: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ui/gift-card-create-component", {
    "components/ui/gift-card-create-component": function(t, n, e) {
        e("543d").createComponent(e("8255"));
    }
}, [ [ "components/ui/gift-card-create-component" ] ] ]);