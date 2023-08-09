(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/home-swiper" ], {
    "1ffc": function(t, e, n) {
        var i = n("c982");
        n.n(i).a;
    },
    "5c83": function(t, e, n) {
        n.r(e);
        var i = n("de91"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    "74a4": function(t, e, n) {
        n.r(e);
        var i = n("e476"), a = n("5c83");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("1ffc");
        var s = n("f0c5"), r = Object(s.a)(a.default, i.b, i.c, !1, null, "c5d44fa2", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    c982: function(t, e, n) {},
    de91: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = r(n("4738")), a = r(n("823b")), o = n("86ea"), s = n("e40b");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var u = a.default.useLogger("home-swiper"), l = {
                components: {
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    listData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    netWork: {
                        type: Boolean,
                        default: !1
                    },
                    initAnimationBlur: {
                        type: Boolean,
                        default: !1
                    },
                    useAnimationBlur: {
                        type: Boolean,
                        default: !1
                    },
                    pause: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        indicatorDots: !1,
                        interval: 3e3,
                        duration: 500,
                        circular: !0,
                        currentInd: 0,
                        delayCurrentIndex: 0,
                        frontImageStyle: "",
                        mainTitle: "",
                        showAnimationClass: !1,
                        doubleLine: !1,
                        text: "",
                        item: {}
                    };
                },
                computed: {
                    isShowNet: function() {
                        return this.netWork;
                    },
                    bannerCount: function() {
                        return this.listData.length;
                    },
                    autoplay: function() {
                        return ("fade-in" === this.swiperImageFadeClass || "" === this.swiperImageFadeClass) && !this.pause;
                    },
                    swiperImageFadeClass: function() {
                        return this.initAnimationBlur ? (u.tag("swiperImageFadeClass", this.useAnimationBlur ? "fade-out" : "fade-in"), 
                        this.useAnimationBlur ? "fade-out" : "fade-in") : "";
                    },
                    frontFadeClass: function() {
                        return "fade-in" === this.swiperImageFadeClass ? "fade-out" : "fade-out" === this.swiperImageFadeClass ? "fade-in" : "";
                    },
                    isShowIndicator: function() {
                        return this.bannerCount > 1 && "fade-out" !== this.swiperImageFadeClass;
                    },
                    isShowTitle: function() {
                        return this.bannerCount > 0 && "fade-out" !== this.swiperImageFadeClass ? "visibility" : "hidden";
                    },
                    titleClass: function() {
                        return this.showAnimationClass ? "animationText" : "";
                    }
                },
                watch: {
                    listData: function(t, e) {
                        this.mainTitle = t[0].title;
                    }
                },
                mounted: function() {
                    this.setFrontImageHeightStyle();
                },
                onHide: function() {},
                onShow: function() {},
                methods: {
                    currentChange: function(t) {
                        var e = t.detail.current;
                        this.currentInd = e, this.showAnimationClass = !0, this.mainTitle = this.listData[e].title, 
                        this.$emit("change", e), i.default.Event.event({
                            id: "show_home_banner",
                            label: "",
                            params: {
                                material_type: "图片",
                                material_id: this.listData[e].back_img,
                                index: e,
                                title: this.listData[e].title,
                                link: this.listData[e].mini_jump_url
                            }
                        });
                    },
                    setFrontImageHeightStyle: function() {
                        try {
                            var e = t.$globalData.systemInfo, n = (e.statusBarHeight, e.menuButton), i = e.ratio, a = (n.bottom + 10) / i;
                            this.frontImageStyle = "height: ".concat(a, "rpx");
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            u.tag("setFrontImageHeightStyle").log(t);
                        }
                    },
                    testani: function(t) {
                        this.showAnimationClass = !1, this.delayCurrentIndex = this.currentInd;
                    },
                    clickSwper: function(t, e) {
                        var n = this;
                        this.item = t, this.listData.forEach(function(t, a) {
                            0 === e && e === a ? n.text = "轮播图-1" : 1 === e && e === a ? n.text = "轮播图-2" : 2 === e && e === a && (n.text = "轮播图-3"), 
                            e === a && i.default.Event.event({
                                id: "click_home_banner",
                                label: "",
                                params: {
                                    material_type: "图片",
                                    material_id: n.listData[e].back_img,
                                    title: n.listData[e].title,
                                    index: e,
                                    link: n.listData[e].mini_jump_url
                                }
                            });
                        }), this.listData[e] && this.listData[e].mini_jump_url && (0, o.launchScheme)(this.listData[e].mini_jump_url);
                    },
                    onLoadImage: function(t) {
                        0 === t && (0, s.report)(s.PerfIndicator.FirstPageBackgroundImg);
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    e476: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/home-swiper-create-component", {
    "pages/home/home-swiper-create-component": function(t, e, n) {
        n("543d").createComponent(n("74a4"));
    }
}, [ [ "pages/home/home-swiper-create-component" ] ] ]);