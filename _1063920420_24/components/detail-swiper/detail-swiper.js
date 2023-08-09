(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/detail-swiper/detail-swiper" ], {
    "1ae3": function(e, t, n) {
        n.r(t);
        var i = n("d4bb"), o = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = o.a;
    },
    "55e9": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    7735: function(e, t, n) {
        n.r(t);
        var i = n("55e9"), o = n("1ae3");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("e936");
        var r = n("f0c5"), s = Object(r.a)(o.default, i.b, i.c, !1, null, "4ee1df42", null, !1, i.a, void 0);
        t.default = s.exports;
    },
    b3ce: function(e, t, n) {},
    d4bb: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = (function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("823b")).default.useLogger("detail-swiper"), {
                components: {
                    OmImage: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/om-image/index") ]).then(function() {
                            return resolve(n("2f8a"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    bannerList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    height: {
                        type: String,
                        default: ""
                    },
                    color: {
                        type: String,
                        default: "#ffffff"
                    },
                    showSwiper: {
                        type: Boolean,
                        default: !1
                    },
                    videoKeepPlay: {
                        type: Boolean,
                        default: !1
                    },
                    auto: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        currentIndex: 0,
                        swiperAutoPlay: !0,
                        indicatorDots: !1,
                        circular: !0,
                        videoAutoplay: !1,
                        interval: 3e3,
                        duration: 500,
                        mdc_video: "https://cloud.video.taobao.com/play/u/576446681/p/1/e/6/t/1/50140370746.mp4",
                        mdc_videofenmian: "https://cdn.app.universalbeijingresort.com/mini-program/static/images/planning/banner-mi.jpg",
                        xiaoshi: !1,
                        mdc_show: !0,
                        videoContext: "",
                        objectFit: "cover",
                        swiperShow: !1,
                        showNotice: !1
                    };
                },
                watch: {
                    showSwiper: {
                        handler: function(e, t) {
                            this.swiperShow = e;
                        }
                    },
                    videoKeepPlay: {
                        handler: function(e, t) {
                            this.keepPlay();
                        }
                    },
                    auto: {
                        handler: function(e, t) {
                            this.swiperAutoPlay = e;
                        }
                    },
                    bannerList: {
                        handler: function() {
                            this.autoPlay();
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                mounted: function() {},
                methods: {
                    autoPlay: function() {
                        if (!(this.bannerList.length < 1) && (e.getStorageSync("networkEnv") && this.bannerList[0] && "video" === this.bannerList[0].media_type)) {
                            var t = this;
                            t.swiperAutoPlay = !1, wx.getNetworkType({
                                success: function(e) {
                                    "wifi" === e.networkType && (t.swiperShow = !0, t.videoAutoplay = !0, t.$emit("showClose"));
                                }
                            });
                        }
                    },
                    clickimg: function(e, t) {
                        this.$emit("clickimgs", e, t);
                    },
                    currentChange: function(e, t) {
                        var n = e.detail.current;
                        this.currentIndex = n, this.$emit("change", n, t);
                    },
                    play: function(t) {
                        var n = this;
                        n.swiperAutoPlay = !1;
                        var i = "";
                        e.getStorage({
                            key: "firstPlayVideo",
                            success: function(e) {
                                i = e.data;
                            }
                        }), wx.getNetworkType({
                            success: function(e) {
                                "wifi" === e.networkType || !1 === i ? (n.swiperShow = !0, n.videoAutoplay = !0, 
                                n.$emit("showClose", n.bannerList[n.currentIndex].video_url)) : (n.showNotice = !0, 
                                n.$emit("showNoticeTip"));
                            }
                        });
                    },
                    keepPlay: function() {
                        e.setStorage({
                            key: "firstPlayVideo",
                            data: !1
                        }), this.swiperShow = !0, this.videoAutoplay = !0, this.$emit("showClose", this.bannerList[this.currentIndex].video_url);
                    },
                    testEnd: function() {
                        this.swiperAutoPlay = !0, this.$emit("showOpen");
                    },
                    preview: function(e) {
                        if ("video" === this.bannerList[this.currentIndex].media_type) this.play(); else {
                            for (var t = this.bannerList[this.currentIndex].image_url, n = [], i = 0; i < this.bannerList.length; i++) n.push(this.bannerList[i].image_url);
                            wx.previewImage({
                                current: t,
                                urls: n
                            });
                        }
                    }
                }
            });
            t.default = i;
        }).call(this, n("543d").default);
    },
    e936: function(e, t, n) {
        var i = n("b3ce");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/detail-swiper/detail-swiper-create-component", {
    "components/detail-swiper/detail-swiper-create-component": function(e, t, n) {
        n("543d").createComponent(n("7735"));
    }
}, [ [ "components/detail-swiper/detail-swiper-create-component" ] ] ]);