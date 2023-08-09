(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/article-text/theme-card" ], {
    "0a8e": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.getThemeBg(t.content.image.theme_color));
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, a = [];
    },
    "16bf": function(t, e, n) {
        var o = n("8127");
        n.n(o).a;
    },
    8127: function(t, e, n) {},
    "8a05": function(t, e, n) {
        n.r(e);
        var o = n("9942"), a = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = a.a;
    },
    9942: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("2d48"), a = {
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
                goDetail: function() {
                    this.$emit("nav"), (0, o.routeTo)({
                        name: "gift-list",
                        params: {}
                    });
                },
                getTextClass: function(t) {
                    var e;
                    e = this.content.sub_title ? this.width1 : this.width2;
                    var n = this.$options.filters.globalTitleFilter(t), o = this.getStrLength(n);
                    return 40.4 * o < Math.floor(3 * e - 40.4) ? "font20" : 36.4 * o < Math.floor(3 * e - 36.4) ? "font18" : 32.4 * o < Math.floor(3 * e - 32.4) ? "font16" : 28.4 * o < Math.floor(3 * e - 28.4) ? "font14" : "font12";
                },
                getStrLength: function(t) {
                    for (var e = 0, n = 0, o = t.length; n < o; ++n) {
                        e += t[n].charCodeAt() > 128 ? 1 : .5;
                    }
                    return Math.ceil(e);
                },
                getThemeBg: function(t) {
                    return t && t.length > 0 ? "linear-gradient(180deg, rgba(".concat(t[0], ",").concat(t[1], ",").concat(t[2], ",0.00) 0%, rgba(").concat(t[0], ",").concat(t[1], ",").concat(t[2], ",1.00) 100%);") : "linear-gradient(180deg, rgba(000,000,000,0.00) 0%, rgba(000,000,000,1.00) 100%)";
                }
            }
        };
        e.default = a;
    },
    "9b7b": function(t, e, n) {
        n.r(e);
        var o = n("0a8e"), a = n("8a05");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("16bf");
        var c = n("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, "3b450d60", null, !1, o.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/article-text/theme-card-create-component", {
    "components/rtmap/article-text/theme-card-create-component": function(t, e, n) {
        n("543d").createComponent(n("9b7b"));
    }
}, [ [ "components/rtmap/article-text/theme-card-create-component" ] ] ]);