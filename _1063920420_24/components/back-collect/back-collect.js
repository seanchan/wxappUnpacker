(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/back-collect/back-collect" ], {
    "43d5": function(t, e, n) {
        n.r(e);
        var o = n("645d"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    "645d": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("823b")), a = n("2d48"), c = n("aa3e");
            var i = o.default.useLogger("home-action"), l = {
                components: {},
                props: {
                    initAnimationBlur: {
                        type: Boolean,
                        default: !1
                    },
                    useAnimationBlur: {
                        type: Boolean,
                        default: !1
                    },
                    isCollect: {
                        type: Boolean,
                        default: !1
                    },
                    showClose: {
                        type: Boolean,
                        default: !1
                    },
                    textColor: {
                        type: String,
                        default: ""
                    },
                    navTitle: {
                        type: String,
                        default: ""
                    },
                    hotelDetailId: {
                        type: String,
                        default: ""
                    },
                    showDistance: {
                        type: Boolean,
                        default: !0
                    },
                    isBlack: {
                        type: Boolean,
                        default: !1
                    },
                    background: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        frontImageStyle: t.$globalData.systemInfo.frontImageHeight,
                        assetsImage: c.assetsImage.index,
                        titleShow: !1
                    };
                },
                computed: {
                    swiperImageFadeClass: function() {
                        return this.initAnimationBlur ? (i.tag("swiperImageFadeClass", this.useAnimationBlur ? "fade-out" : "fade-in"), 
                        this.useAnimationBlur ? "fade-out" : "fade-in") : "";
                    },
                    frontFadeClass: function() {
                        return "fade-in" === this.swiperImageFadeClass ? (this.titleShow = !1, "fade-out") : "fade-out" === this.swiperImageFadeClass ? (this.titleShow = !0, 
                        "fade-in") : "";
                    },
                    rightIcon: function() {
                        return this.showDistance ? this.isBlack ? this.isCollect ? this.assetsImage.likecSelect : this.assetsImage.likec : this.isCollect ? this.assetsImage.icTopLikeSelect : this.assetsImage.icTopNolike : "";
                    }
                },
                created: function() {
                    var e = this;
                    setTimeout(function() {
                        e.frontImageStyle = t.$globalData.systemInfo.frontImageHeight;
                    }, 100);
                },
                mounted: function() {},
                methods: {
                    clickLeft: function() {
                        i.log("click left"), (0, a.routeBack)({
                            params: {}
                        });
                    },
                    clickBlacks: function() {
                        this.$emit("clickBlacks");
                    },
                    clickRight: function() {
                        i.log("click right"), this.$emit("collect", this.isCollect);
                    },
                    hideVideo: function() {
                        this.$emit("hideVideo");
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    c6ad: function(t, e, n) {
        n.r(e);
        var o = n("ccca"), a = n("43d5");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("eb0f");
        var i = n("f0c5"), l = Object(i.a)(a.default, o.b, o.c, !1, null, "6b6d7475", null, !1, o.a, void 0);
        e.default = l.exports;
    },
    caec: function(t, e, n) {},
    ccca: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            topNav: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/top-nav/top-nav") ]).then(n.bind(null, "9cbe"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    eb0f: function(t, e, n) {
        var o = n("caec");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/back-collect/back-collect-create-component", {
    "components/back-collect/back-collect-create-component": function(t, e, n) {
        n("543d").createComponent(n("c6ad"));
    }
}, [ [ "components/back-collect/back-collect-create-component" ] ] ]);