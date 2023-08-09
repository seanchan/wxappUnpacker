(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/page/error-page" ], {
    "077c": function(e, n, o) {},
    "14ba": function(e, n, o) {
        o.r(n);
        var r = o("c23e"), t = o.n(r);
        for (var a in r) "default" !== a && function(e) {
            o.d(n, e, function() {
                return r[e];
            });
        }(a);
        n.default = t.a;
    },
    "5cd0": function(e, n, o) {
        var r = o("077c");
        o.n(r).a;
    },
    "6b99": function(e, n, o) {
        o.d(n, "b", function() {
            return r;
        }), o.d(n, "c", function() {
            return t;
        }), o.d(n, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, t = [];
    },
    c23e: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = o("2a6a"), t = {
            components: {
                OmImage: function() {
                    Promise.all([ o.e("common/vendor"), o.e("components/om-image/index") ]).then(function() {
                        return resolve(o("2f8a"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            props: {
                error: {
                    type: Object,
                    default: null
                },
                isGlobal: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {};
            },
            computed: {
                errorData: function() {
                    return this.error && this.error.errorType ? r.ErrorPage[this.error.errorType] : null;
                }
            },
            methods: {
                handleTapBtn: function() {
                    this.$emit(this.errorData.action);
                }
            }
        };
        n.default = t;
    },
    e95a: function(e, n, o) {
        o.r(n);
        var r = o("6b99"), t = o("14ba");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(a);
        o("5cd0");
        var c = o("f0c5"), u = Object(c.a)(t.default, r.b, r.c, !1, null, "4ef37f04", null, !1, r.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/page/error-page-create-component", {
    "components/page/error-page-create-component": function(e, n, o) {
        o("543d").createComponent(o("e95a"));
    }
}, [ [ "components/page/error-page-create-component" ] ] ]);