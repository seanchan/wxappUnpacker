(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/mall" ], {
    "392d": function(t, e, n) {},
    "738d": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("bd12")).default);
        }).call(this, n("543d").createPage);
    },
    9536: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("aa3e"), i = c(n("b775")), o = c(n("823b")), r = c(n("4738")), l = n("2d48"), u = n("86ea");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n;
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            var d = o.default.useLogger("mall page"), m = {
                components: {
                    ArticalCard: function() {
                        n.e("pages/mall/artical-card").then(function() {
                            return resolve(n("31b9"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FunctionTab: function() {
                        n.e("pages/mall/function-tab").then(function() {
                            return resolve(n("b76e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TicketCard: function() {
                        n.e("pages/mall/ticket-card").then(function() {
                            return resolve(n("f1e0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HotelCard: function() {
                        n.e("pages/mall/hotel-card").then(function() {
                            return resolve(n("c540"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    VipCard: function() {
                        n.e("pages/mall/vip-card").then(function() {
                            return resolve(n("9f5b"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TitleCard: function() {
                        n.e("pages/mall/title-card").then(function() {
                            return resolve(n("eb61"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TopBar: function() {
                        n.e("pages/mall/mall-top").then(function() {
                            return resolve(n("d398"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Indicator: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/indicator/indicator") ]).then(function() {
                            return resolve(n("e361"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OmImage: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/om-image/index") ]).then(function() {
                            return resolve(n("2f8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Launchapp: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/launchapp/launchapp") ]).then(function() {
                            return resolve(n("ba2b"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        advertising: {},
                        mallAdStatus: getApp().globalData.mallAdStatus,
                        showAdStatus: !0,
                        assetsImage: a.assetsImage.mall,
                        network: !1,
                        indicatorDots: !0,
                        currentIndex: 0,
                        mallDetailData: {},
                        fontImageStyle: "",
                        initAnimationFade: !1,
                        useAnimationFade: !1,
                        recommendList: [],
                        pagination: {
                            current_page: 1,
                            page_size: 10,
                            total: 1,
                            total_page: 1
                        },
                        autoplay: !0,
                        interval: 3e3,
                        swiperPause: !1,
                        isLoadOver: !1,
                        headHeight: "",
                        swiperHeadTop: "",
                        wholeHeadHeight: "",
                        indicatorStatus: "INDICATOR_NONE",
                        useWhiteMask: !0,
                        isRequestEnd: !1
                    };
                },
                computed: {
                    width: function() {
                        return this.mallDetailData.banner ? 32 / this.mallDetailData.banner.length : 0;
                    },
                    backfaceMaskFadeClass: function() {
                        return this.initAnimationFade ? this.useAnimationFade ? "fade-in" : "fade-out" : "";
                    },
                    swiperAutoPlay: function() {
                        return this.autoplay && !this.swiperPause;
                    }
                },
                mounted: function() {},
                onShow: function() {
                    var e = this;
                    this.getHomeData(), r.default.Page.onShow(), t.TencentAdReport.send("PAGE_VIEW-Shoppage"), 
                    t.getNetworkType({
                        success: function(t) {
                            "none" === t.networkType ? e.network = !0 : e.network = !1;
                        }
                    }), t.onNetworkStatusChange(function(t) {
                        e.network = !t.isConnected;
                    }), this.swiperPause = !1;
                    var n = t.$globalData.outdoorPlugin;
                    n.resetFilterData && n.resetFilterData();
                },
                onHide: function() {
                    r.default.Page.onHide(), this.swiperPause = !0;
                },
                onUnload: function() {
                    r.default.Page.onUnload();
                },
                onTabItemTap: function() {
                    var e = t.getStorageSync("bindPhoneUser").ciam_id || "";
                    r.default.Event.event({
                        id: "click_shop",
                        label: "",
                        params: {
                            ciam_uuid: e
                        }
                    });
                },
                methods: {
                    reportAdvertising: function() {
                        this.mallAdStatus && this.advertising.is_show && r.default.Event.event({
                            id: "show_mall_ad",
                            label: "",
                            params: {
                                url: this.advertising.jump_url,
                                cover_url: this.advertising.image
                            }
                        });
                    },
                    openAdvertising: function() {
                        this.advertising.jump_url && (0, u.launchScheme)(this.advertising.jump_url), r.default.Event.event({
                            id: "click_mall_ad",
                            label: "",
                            params: {
                                url: this.advertising.jump_url,
                                cover_url: this.advertising.image
                            }
                        });
                    },
                    closeAdvertising: function() {
                        this.mallAdStatus = !1, getApp().globalData.mallAdStatus = !1, r.default.Event.event({
                            id: "click_mall_ad_close",
                            label: "",
                            params: {
                                url: this.advertising.jump_url,
                                cover_url: this.advertising.image
                            }
                        });
                    },
                    delPhoto: function(t) {
                        if (!t || "[]" === JSON.stringify(t)) return t;
                        t.forEach(function(e, n) {
                            "照片服务" === e.title && t.splice(n, 1);
                        });
                    },
                    search: function() {},
                    scan: function() {},
                    turnSearch: function() {
                        r.default.Event.event({
                            id: "click_mall_search",
                            label: "",
                            params: {}
                        }), (0, l.routeTo)({
                            name: "search",
                            params: {
                                from: "mall"
                            }
                        });
                    },
                    toCustomer: function() {
                        (0, l.routeTo)({
                            name: "customer",
                            params: {}
                        });
                    },
                    handleChange: function(t) {
                        var e = {
                            material_id: this.mallDetailData.banner[t.detail.current].material_id,
                            material_title: this.mallDetailData.banner[t.detail.current].title,
                            index: t.detail.current,
                            url: this.mallDetailData.banner[t.detail.current].back_img,
                            link: this.mallDetailData.banner[t.detail.current].mini_jump_url
                        };
                        r.default.Event.event({
                            id: "show_mall_banner",
                            label: "",
                            params: e
                        });
                        var n = t.detail.current;
                        this.currentIndex = n;
                    },
                    getFrontImageHeight: function() {
                        var e = t.$globalData.systemInfo, n = e.statusBarHeight, a = e.menuButton, i = e.ratio, o = a.bottom;
                        return this.headHeight = "".concat(2 * (n + 156), "rpx"), this.swiperHeadTop = "".concat(2 * (n + 76), "rpx"), 
                        this.wholeHeadHeight = "".concat(2 * (n + 226), "rpx"), (o + 10) / i;
                    },
                    setFrontImageHeightStyle: function() {
                        try {
                            var t = this.getFrontImageHeight();
                            this.fontImageStyle = "height: ".concat(t, "rpx");
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            d.tag("setFrontImageHeightStyle").log(t);
                        }
                    },
                    addAnimationFadeObserver: function() {
                        var t = this;
                        this.createIntersectionObserver().relativeToViewport({
                            top: -180
                        }).observe(".ob-dom", function(e) {
                            0 === e.intersectionRatio ? (t.initAnimationFade = !0, t.useAnimationFade = !0, 
                            t.autoplay = !1) : (t.useAnimationFade = !1, t.autoplay = !0);
                        });
                    },
                    goBannerDetail: function(t) {
                        var e = this.mallDetailData.banner[t], n = {
                            material_id: e.material_id,
                            material_title: e.title,
                            index: t,
                            url: e.back_img,
                            link: e.mini_jump_url
                        };
                        r.default.Event.event({
                            id: "click_mall_banner",
                            label: "",
                            params: n
                        }), e.mini_jump_url && (0, u.launchScheme)(e.mini_jump_url);
                    },
                    goHotelDetail: function(t) {
                        (0, l.routeTo)({
                            name: "hotel-detail",
                            params: {
                                id: t
                            }
                        });
                    },
                    showTips: function() {
                        this.$loading("敬请期待");
                    },
                    getHomeData: function() {
                        var t = this;
                        this.useWhiteMask = !0;
                        i.default.$get("/v2/mall/home", {}, {}, this).then(function(e) {
                            t.isLoadOver = !0, t.mallDetailData = e, t.advertising = e.advertising, t.mallDetailData.mini_banner && (t.mallDetailData.banner = t.mallDetailData.mini_banner), 
                            t.recommendList = e.recommend_list, t.delPhoto(t.mallDetailData.function_list_r6), 
                            0 === e.pagination.total_page && (e.pagination.total_page = 1), t.pagination = e.pagination, 
                            setTimeout(function() {
                                t.addAnimationFadeObserver(), t.setFrontImageHeightStyle();
                            }, 0), t.reportAdvertising();
                        }).finally(function() {
                            t.isRequestEnd = !0;
                        });
                    }
                },
                onReachBottom: function() {
                    var t = this;
                    if (this.pagination.current_page < this.pagination.total_page) {
                        this.useWhiteMask = !1, this.indicatorStatus = "INDICATOR_LOADING";
                        i.default.$get("/mall/recommend", {
                            page: this.pagination.current_page + 1
                        }).then(function(e) {
                            t.recommendList = [].concat(s(t.recommendList), s(e.recommend_list)), t.pagination = e.pagination;
                        }).finally(function() {
                            t.indicatorStatus = "INDICATOR_SUCCESS";
                        });
                    }
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    bacc: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    bd12: function(t, e, n) {
        n.r(e);
        var a = n("bacc"), i = n("c86e");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("c8ed");
        var r = n("f0c5"), l = Object(r.a)(i.default, a.b, a.c, !1, null, "37861846", null, !1, a.a, void 0);
        e.default = l.exports;
    },
    c86e: function(t, e, n) {
        n.r(e);
        var a = n("9536"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = i.a;
    },
    c8ed: function(t, e, n) {
        var a = n("392d");
        n.n(a).a;
    }
}, [ [ "738d", "common/runtime", "common/vendor" ] ] ]);