(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/home-entrance" ], {
    "29ba": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            scrollTab: function() {
                return n.e("components/scroll-tab/scroll-tab").then(n.bind(null, "ef2c"));
            }
        }, o = function() {
            var t = this, e = (t.$createElement, t._self._c, Object.keys(t.myStrokeList)), n = e.length > 0 ? t.formatDate(t.myStrokeList.start_date) : null, a = e.length > 0 ? t._f("globalTitleFilter")(t.myStrokeList.title) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e,
                    m0: n,
                    f0: a
                }
            });
        }, i = [];
    },
    "416f": function(t, e, n) {
        n.r(e);
        var a = n("29ba"), o = n("6fb0");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("901b");
        var r = n("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, "6c148ecb", null, !1, a.a, void 0);
        e.default = c.exports;
    },
    "6fb0": function(t, e, n) {
        n.r(e);
        var a = n("a853"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    "901b": function(t, e, n) {
        var a = n("be83");
        n.n(a).a;
    },
    a853: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("2d48"), o = n("86ea"), i = n("aa3e"), r = u(n("4738")), c = u(n("823b")), s = n("e40b");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var l = c.default.useLogger("home-entrance"), f = 0, m = {
                components: {
                    ScrollTab: function() {
                        n.e("components/scroll-tab/scroll-tab").then(function() {
                            return resolve(n("ef2c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    wechatcore: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    functionListData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    storyListData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    myPlanList: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    pause: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        assetsImage: i.assetsImage.personal,
                        inited: !1,
                        changeCount: 0,
                        fadeInIndex: 0,
                        fadeOutIndex: -1,
                        intervalStory: 3e3,
                        title: "",
                        isRelease1: t.getStorageSync("nowRelease"),
                        myStrokeList: {}
                    };
                },
                computed: {},
                watch: {
                    storyListData: {
                        handler: function(t) {
                            this.title = t.title;
                        },
                        immediate: !0
                    },
                    pause: function(t, e) {
                        t ? this.clearStoryAnimation() : this.initStoryAnimation();
                    },
                    changeCount: function(t, e) {
                        this.fadeOutIndex = e % this.storyListData.back_img.length, this.fadeInIndex = t % this.storyListData.back_img.length, 
                        r.default.Event.event({
                            id: "show_home_land_story",
                            label: "",
                            params: {
                                cover_url: this.storyListData.back_img[this.fadeInIndex]
                            }
                        });
                    },
                    myPlanList: {
                        handler: function(t) {
                            if (t && Object.keys(t).length > 0) for (var e = 0; e < Object.keys(t).length; e++) {
                                this.myStrokeList = {};
                                var n = t[e], a = this.getDateGap(this.getToday(), this.formatDate(n.start_date, 2));
                                if (a >= 0 && a <= 2) {
                                    this.myStrokeList = n;
                                    break;
                                }
                            } else this.myStrokeList = {};
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                mounted: function() {
                    this.initStoryAnimation();
                },
                beforeDestroy: function() {
                    this.clearStoryAnimation();
                },
                onReady: function() {
                    var t = this;
                    setTimeout(function() {
                        t.addAnimationBlurObserver();
                    }, 0);
                },
                methods: {
                    goLineList: function(t) {
                        r.default.Event.event({
                            id: "click_home_itinerary_remind",
                            label: "",
                            params: {}
                        }), (0, a.routeTo)({
                            name: "planning-my-detail",
                            params: {
                                id: t
                            }
                        });
                    },
                    getToday: function() {
                        var t = new Date();
                        return "".concat(t.getFullYear(), "-").concat(this.dataLeftCompleting(t.getMonth() + 1), "-").concat(this.dataLeftCompleting(t.getDate()));
                    },
                    dataLeftCompleting: function(t) {
                        return parseInt(t, 10) < 10 ? "0".concat(t) : t;
                    },
                    formatDate: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        if (t = t.toString(), 1 === e) {
                            var n = t.substr(4, 2), a = t.substr(6, 2), o = "".concat(n, "月").concat(a, "日");
                            return o;
                        }
                        return "".concat(t.substr(0, 4), "-").concat(t.substr(4, 2), "-").concat(t.substr(6, 2));
                    },
                    getDateGap: function(t, e) {
                        var n = new Date(t);
                        return (new Date(e) - n) / 864e5;
                    },
                    turnToStory: function(t) {
                        r.default.Event.event({
                            id: "click_home_land_story",
                            label: "",
                            params: {
                                cover_url: t
                            }
                        }), (0, a.routeTo)({
                            name: "story-list",
                            params: {}
                        });
                    },
                    goTicket: function() {
                        r.default.Event.event({
                            id: "click_home_buy_tickets",
                            label: "",
                            params: {}
                        }), this.wechatcore && this.wechatcore.mini_jump_url ? (0, o.launchScheme)(this.wechatcore.mini_jump_url) : t.showToast({
                            title: "此功能暂时无法使用",
                            icon: "none",
                            duration: 1500
                        });
                    },
                    initStoryAnimation: function() {
                        var t = this;
                        f = setTimeout(function() {
                            t.changeCount += 1, t.initStoryAnimation();
                        }, this.intervalStory);
                    },
                    clearStoryAnimation: function() {
                        clearTimeout(f), f = 0;
                    },
                    addAnimationBlurObserver: function() {
                        var e = this;
                        t.createSelectorQuery().in(this).select(".ob-dom").boundingClientRect(function(n) {
                            var a = e.createIntersectionObserver();
                            t.$globalData.systemInfo, a.relativeToViewport({
                                top: -1 * (n.top + n.height - 100)
                            }).observe(".ob-dom", function(t) {
                                0 === t.intersectionRatio ? (e.$emit("blurIn"), l.tag("blurIn").log("intersectionRatio:", t.intersectionRatio)) : (e.$emit("blurOut"), 
                                l.tag("blurOut").log("intersectionRatio:", t.intersectionRatio));
                            });
                        }).exec();
                    },
                    onLoadImage: function(t) {
                        0 === t && (0, s.report)(s.PerfIndicator.FirstPageThemeImg);
                    }
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    be83: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/home-entrance-create-component", {
    "pages/home/home-entrance-create-component": function(t, e, n) {
        n("543d").createComponent(n("416f"));
    }
}, [ [ "pages/home/home-entrance-create-component" ] ] ]);