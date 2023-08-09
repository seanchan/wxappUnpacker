(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/article-text/video-play" ], {
    "00c2": function(t, n, e) {
        e.r(n);
        var a = e("7b4d"), o = e("bf44");
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        e("a08f");
        var i = e("f0c5"), l = Object(i.a)(o.default, a.b, a.c, !1, null, "fcf6e6f6", null, !1, a.a, void 0);
        n.default = l.exports;
    },
    4573: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        n.default = {
            data: function() {
                return {
                    name: "rtmap/video",
                    autoplay: !1,
                    url: ""
                };
            },
            methods: {
                play: function(t) {
                    this.autoplay = !0, this.url = t;
                },
                handleVideoEnded: function() {
                    this.$emit("end"), this.handleVideoClosed();
                },
                handleVideoClosed: function() {
                    this.autoplay = !1, this.url = "", this.$emit("close");
                }
            }
        };
    },
    "7ad9": function(t, n, e) {},
    "7b4d": function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var a = function() {
            var t = this, n = (t.$createElement, t._self._c, t.url && t.autoplay ? e("1015") : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: n
                }
            });
        }, o = [];
    },
    a08f: function(t, n, e) {
        var a = e("7ad9");
        e.n(a).a;
    },
    bf44: function(t, n, e) {
        e.r(n);
        var a = e("4573"), o = e.n(a);
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/article-text/video-play-create-component", {
    "components/rtmap/article-text/video-play-create-component": function(t, n, e) {
        e("543d").createComponent(e("00c2"));
    }
}, [ [ "components/rtmap/article-text/video-play-create-component" ] ] ]);