(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/navigation/nav-inner" ], {
    "15c7": function(t, n, e) {
        e.r(n);
        var a = e("fcde"), o = e.n(a);
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        n.default = o.a;
    },
    "1e60": function(t, n, e) {
        var a = e("e998");
        e.n(a).a;
    },
    b215: function(t, n, e) {
        e.r(n);
        var a = e("d885"), o = e("15c7");
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        e("1e60");
        var c = e("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, "62427aba", null, !1, a.a, void 0);
        n.default = u.exports;
    },
    d885: function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    e998: function(t, n, e) {},
    fcde: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            props: {
                navType: {
                    type: String,
                    default: "default"
                },
                colorBlack: {
                    type: Boolean,
                    default: !0
                },
                navBarBgOpacity: {
                    type: Number,
                    default: 0
                },
                navHeight: {
                    type: String,
                    default: "128px"
                },
                menuTop: {
                    type: String,
                    default: "26px"
                },
                menuHeight: {
                    type: String,
                    default: "32px"
                },
                cityName: {
                    type: String,
                    default: "伦敦"
                },
                alwaysShowHome: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: ""
                },
                titleMargin: {
                    type: String,
                    default: "97px"
                },
                titleWidth: {
                    type: String,
                    default: "181px"
                }
            },
            data: function() {
                return {
                    showBack: !1,
                    showHome: !1
                };
            },
            computed: {},
            mounted: function() {
                var t = getCurrentPages();
                this.showBack = t.length > 1, this.showHome = 1 === t.length || this.alwaysShowHome;
            },
            methods: {
                goBack: function() {
                    this.$emit("goBack");
                },
                goHome: function() {
                    this.$emit("goHome");
                },
                switchCity: function() {}
            }
        };
        n.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/navigation/nav-inner-create-component", {
    "components/navigation/nav-inner-create-component": function(t, n, e) {
        e("543d").createComponent(e("b215"));
    }
}, [ [ "components/navigation/nav-inner-create-component" ] ] ]);