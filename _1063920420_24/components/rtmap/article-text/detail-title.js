(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/article-text/detail-title" ], {
    "52a7": function(t, e, n) {
        n.r(e);
        var o = n("7c5a"), c = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = c.a;
    },
    "57be": function(t, e, n) {},
    "74a8": function(t, e, n) {
        var o = n("57be");
        n.n(o).a;
    },
    "7c5a": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                FontWeight: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/ui/font-weight") ]).then(function() {
                        return resolve(n("269f"));
                    }.bind(null, n)).catch(n.oe);
                },
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
                pageType: {
                    type: String,
                    default: ""
                },
                content: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                beforType: {
                    type: String,
                    default: ""
                },
                styleColor: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                styleObj: function() {
                    var t = this.content.content && this.content.content.text_color;
                    return t ? "color: ".concat(t) : {};
                }
            },
            methods: {
                preview: function(t) {
                    wx.previewImage({
                        current: t,
                        urls: [ t ]
                    });
                },
                openVideo: function() {
                    this.$emit("video-play", this.content.content.video_info.url);
                }
            }
        };
        e.default = o;
    },
    b663: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    ddcf: function(t, e, n) {
        n.r(e);
        var o = n("b663"), c = n("52a7");
        for (var i in c) "default" !== i && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(i);
        n("74a8");
        var r = n("f0c5"), a = Object(r.a)(c.default, o.b, o.c, !1, null, "4364fed6", null, !1, o.a, void 0);
        e.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/article-text/detail-title-create-component", {
    "components/rtmap/article-text/detail-title-create-component": function(t, e, n) {
        n("543d").createComponent(n("ddcf"));
    }
}, [ [ "components/rtmap/article-text/detail-title-create-component" ] ] ]);