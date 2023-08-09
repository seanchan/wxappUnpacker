(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/home" ], {
    1368: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.recommendList, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f0: e.showHotel && "hotel" === t && 0 !== e.hotelList.length ? e._f("globalTitleFilter")(e.hotelListTitle) : null,
                    f1: e.showRestaurant && "restaurant" === t && 0 !== e.restaurantList.length ? e._f("globalTitleFilter")(e.restaurantListTitle) : null,
                    f2: e.showShop && "shop" === t && 0 !== e.shopList.length ? e._f("globalTitleFilter")(e.shopListTitle) : null
                };
            })), n = e.__map(e.agreement, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f3: e._f("globalTitleFilter")(t.title)
                };
            }), i = e.__map(e.agreement, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f4: e._f("globalTitleFilter")(t.title)
                };
            }), o = e.__map(e.agreement, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f5: e._f("globalTitleFilter")(t.title)
                };
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    l1: n,
                    l2: i,
                    l3: o
                }
            });
        }, o = [];
    },
    "1c8b": function(e, t, n) {
        n.r(t);
        var i = n("67c9"), o = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = o.a;
    },
    "22cd": function(e, t, n) {
        n.r(t);
        var i = n("1368"), o = n("1c8b");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("8676");
        var s = n("f0c5"), r = Object(s.a)(o.default, i.b, i.c, !1, null, "3f35cccc", null, !1, i.a, void 0);
        t.default = r.exports;
    },
    "67c9": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = m(n("a34a")), o = n("2f62"), a = m(n("b775")), s = m(n("823b")), r = n("2d48"), c = m(n("4738")), l = n("aa3e"), u = n("e40b"), h = m(n("e397"));
            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function d(e, t, n, i, o, a, s) {
                try {
                    var r = e[a](s), c = r.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                r.done ? t(c) : Promise.resolve(c).then(i, o);
            }
            function f(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(i, o) {
                        var a = e.apply(t, n);
                        function s(e) {
                            d(a, i, o, s, r, "next", e);
                        }
                        function r(e) {
                            d(a, i, o, s, r, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach(function(t) {
                        b(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var _ = s.default.useLogger("home page"), w = {
                components: {
                    FontWeight: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/font-weight") ]).then(function() {
                            return resolve(n("269f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeAction: function() {
                        n.e("pages/home/home-action").then(function() {
                            return resolve(n("fb3e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeEntrance: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/home/home-entrance") ]).then(function() {
                            return resolve(n("416f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeScenic: function() {
                        n.e("pages/home/home-scenic").then(function() {
                            return resolve(n("0b7da"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeShow: function() {
                        n.e("pages/home/home-show").then(function() {
                            return resolve(n("2999"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeSwiper: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/home/home-swiper") ]).then(function() {
                            return resolve(n("74a4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeLike: function() {
                        n.e("pages/home/home-like").then(function() {
                            return resolve(n("0dbb"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ScrollList: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/scroll-list/scroll-list") ]).then(function() {
                            return resolve(n("901d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Indicator: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/indicator/indicator") ]).then(function() {
                            return resolve(n("e361"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Popups: function() {
                        n.e("components/Popups/index").then(function() {
                            return resolve(n("718e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CameraToast: function() {
                        n.e("pages/home/camera-toast").then(function() {
                            return resolve(n("2dbe"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ReservationNotice: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ticket/reservation-notice") ]).then(function() {
                            return resolve(n("d18e"));
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
                        showLoading: !1,
                        isSuccess: !1,
                        isAddHack: !1,
                        network: !1,
                        initAnimationBlur: !1,
                        useAnimationBlur: !1,
                        swiperPause: !1,
                        currentIndex: 0,
                        scenicList: [],
                        likeList: [],
                        scenicListTitle: "",
                        showList: [],
                        assetsImage: l.assetsImage.index,
                        showListTitle: "",
                        touchStartTime: 0,
                        tourMarkList: [ {
                            back: "/static/images/index/back-cover-test.png",
                            title: "演出全纪录，如何一天打卡所有演出",
                            content: "UBR官方游记",
                            tag: "最热门",
                            type: "video",
                            markBack: "/static/images/index/label-express.png"
                        }, {
                            back: "/static/images/index/back-cover-test.png",
                            title: "演出全纪录，如何一天打卡所有演出",
                            content: "UBR官方游记",
                            tag: "",
                            type: "image",
                            markBack: "/static/images/index/label-express.png"
                        }, {
                            back: "/static/images/index/back-cover-test.png",
                            title: "演出全纪录，如何一天打卡所有演出",
                            content: "UBR官方游记",
                            tag: "",
                            type: "image",
                            markBack: "/static/images/index/label-express.png"
                        } ],
                        homeData: "",
                        bannerList: [ {
                            material_id: "",
                            title: "关于北京环球度假区",
                            material_type: "h5",
                            is_show: !0,
                            back_img: "../../static/images/index/banner-default.png",
                            theme_color: [ 3, 104, 217 ],
                            url: "",
                            is_default: !0
                        } ],
                        functionList: [ {
                            title: "今日活动",
                            type: "activity",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        }, {
                            title: "运营时间",
                            type: "ticket",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        }, {
                            title: "推荐行程",
                            type: "route",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        }, {
                            title: "直播",
                            type: "live",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        }, {
                            title: "游戏",
                            type: "game",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        }, {
                            title: "AI识别",
                            type: "ai",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        }, {
                            title: "游客服务",
                            type: "service",
                            is_show: !0,
                            icon_img: l.assetsImage.index.defaultIcon
                        } ],
                        storyList: {
                            block_type: "theme_story",
                            title: "七大主题区域",
                            subtitle: "关于北京环球度假区",
                            back_img: [ "#162B75" ]
                        },
                        showPerform: !1,
                        showListMore: !1,
                        showScenic: !1,
                        scenicListMore: !1,
                        scenicTop: !0,
                        showHotel: !1,
                        hotelList: [ {
                            back_img: "https://universal-test-1301203089.file.myqcloud.com/content/8636499705d72c1c15d8eca8eff7717a/1035_3728.png",
                            custom_label: "补充点副标题",
                            is_closed: 1,
                            label: "酒店",
                            material_id: "5f7fdb257bc3db2a405ec44e",
                            material_type: "hotle",
                            queuing_time: "30↵分钟",
                            subtitle: "大床房",
                            time: "30",
                            title: "大酒店",
                            price: "2300"
                        }, {
                            back_img: "https://universal-test-1301203089.file.myqcloud.com/content/8636499705d72c1c15d8eca8eff7717a/1035_3728.png",
                            custom_label: "补充点副标题",
                            is_closed: 1,
                            label: "酒店",
                            material_id: "5f7fdb257bc3db2a405ec44e",
                            material_type: "hotle",
                            queuing_time: "30↵分钟",
                            subtitle: "大床房",
                            time: "30",
                            title: "大酒店",
                            price: "2300"
                        } ],
                        hotelListTitle: "酒店",
                        hotelListMore: !0,
                        showShop: !1,
                        shopList: [ {
                            back_img: "https://universal-test-1301203089.file.myqcloud.com/content/8636499705d72c1c15d8eca8eff7717a/1035_3728.png",
                            custom_label: "补充点副标题",
                            is_closed: 1,
                            label: "酒店",
                            material_id: "5f7fdb257bc3db2a405ec44e",
                            material_type: "hotle",
                            queuing_time: "30↵分钟",
                            subtitle: "大床房",
                            time: "30",
                            title: "大酒店",
                            price: "2300"
                        }, {
                            back_img: "https://universal-test-1301203089.file.myqcloud.com/content/8636499705d72c1c15d8eca8eff7717a/1035_3728.png",
                            custom_label: "补充点副标题",
                            is_closed: 1,
                            label: "酒店",
                            material_id: "5f7fdb257bc3db2a405ec44e",
                            material_type: "hotle",
                            queuing_time: "30↵分钟",
                            subtitle: "大床房",
                            time: "30",
                            title: "大酒店",
                            price: "2300"
                        } ],
                        shopListTitle: "商店",
                        shopListMore: !0,
                        showRestaurant: !1,
                        restaurantList: [],
                        restaurantListTitle: "餐厅",
                        restaurantListMore: !0,
                        isCollect: !1,
                        myPlanList: {},
                        indicatorStatus: "INDICATOR_SUCCESS",
                        initSuccess: !1,
                        recommendList: [],
                        agreementUpdate: null,
                        isShowAgreement: !1,
                        isPageShow: !1,
                        showNoticeModel: !1,
                        booking_notice: [],
                        default_ids: [],
                        showGamesModel: !1,
                        gamesUrl: ""
                    };
                },
                computed: p({}, (0, o.mapState)({
                    token: function(e) {
                        return e.bindPhone.token;
                    },
                    isInUbrPolygon: function(e) {
                        return e.location.isInUbrPolygon;
                    },
                    isUbrOutdoorPolygon: function(e) {
                        return e.location.isUbrOutdoorPolygon;
                    }
                }), {
                    agreement: function() {
                        return this.agreementUpdate && this.agreementUpdate.list || [];
                    }
                }),
                watch: {
                    token: {
                        handler: function(e) {
                            e && h.default.getFirstRunIsLogin() && this.agreementUpdateInit();
                        },
                        immediate: !0
                    },
                    isPageShow: function(e) {
                        this.isShowTabbar(e, this.isShowAgreement);
                    },
                    isShowAgreement: function(e) {
                        this.isShowTabbar(e, this.isPageShow);
                    }
                },
                created: function() {
                    var t = this;
                    e.getNetworkType({
                        success: function(e) {
                            "none" === e.networkType && (t.indicatorStatus = "INDICATOR_ERROR");
                        },
                        fail: function() {
                            t.indicatorStatus = "INDICATOR_ERROR";
                        }
                    }), wx.loadFontFace({
                        family: "ubrxblack",
                        source: 'url("https://cdn.app.universalbeijingresort.com/mini-program/fonts/MXiangHeHeiSCW05-XBlack.woff")',
                        success: function() {
                            (0, u.report)(u.PerfIndicator.LoadFont);
                        }
                    });
                },
                mounted: function() {
                    var e = this;
                    setTimeout(function() {
                        e.isAddHack = !0;
                    }, 2e3);
                },
                onShareAppMessage: function() {
                    return {
                        title: "",
                        path: "",
                        imageUrl: this.homeData.share_image || this.assetsImage.noSharePic
                    };
                },
                onShow: function() {
                    var t = f(i.default.mark(function t() {
                        var n;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.isPageShow = !0, t.next = 3, this.getLocation(!0);

                              case 3:
                                return t.next = 5, this.getHomeData();

                              case 5:
                                return this.getOperationTime(), this.getPriceControl(), t.next = 9, this.getMyPlan();

                              case 9:
                                (n = e.$globalData.outdoorPlugin).resetFilterData && n.resetFilterData(), this.swiperPause = !1, 
                                this.reportNetwork(), c.default.Page.onShow(), c.default.Event.event({
                                    id: "arrive_home",
                                    label: "",
                                    params: {
                                        type: "",
                                        id: ""
                                    }
                                }), e.TencentAdReport.send("PAGE_VIEW-Homepage"), wx.showTabBar({
                                    complete: function(e) {}
                                });

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onHide: function() {
                    this.isPageShow = !1, c.default.Page.onHide(), this.swiperPause = !0, this.showNoticeModel && (this.showNoticeModel = !1, 
                    e.showTabBar({
                        animation: !0
                    }));
                },
                onUnload: function() {
                    c.default.Page.onUnload();
                },
                onTabItemTap: function() {
                    var t = e.getStorageSync("bindPhoneUser").ciam_id || "";
                    c.default.Event.event({
                        id: "click_home",
                        label: "",
                        params: {
                            ciam_uuid: t
                        }
                    });
                },
                methods: p({}, (0, o.mapActions)([ "getLocation", "getubrPolygon" ]), {
                    toGames: function() {
                        var t = e.getStorageSync("bindPhoneUser").ciam_id || "";
                        e.navigateToMiniProgram({
                            appId: "wx38d18c2ea986ed5e",
                            page: "",
                            extraData: {
                                uid: t,
                                qrCode: encodeURIComponent(this.gamesUrl)
                            },
                            envVersion: "trial"
                        });
                    },
                    reportNetwork: function() {
                        var t = f(i.default.mark(function t() {
                            var n, o, a, s = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, new Promise(function(t, i) {
                                        e.getNetworkType({
                                            success: function(e) {
                                                "none" === e.networkType ? s.network = !0 : s.network = !1, n = "wifi" === e.isConnected ? "WIFI" : "none" === e.isConnected ? "无" : "移动网络", 
                                                t();
                                            },
                                            fail: function() {
                                                i();
                                            }
                                        });
                                    });

                                  case 2:
                                    return a = this, t.next = 5, new Promise(function(t, n) {
                                        e.getSetting({
                                            success: function(e) {
                                                o = e.authSetting["scope.userLocation"] ? a.isInUbrPolygon ? a.isUbrOutdoorPolygon ? "园区内（室内）" : "园区内（室外）" : "园区外" : "无权限", 
                                                t();
                                            },
                                            fail: function() {
                                                n();
                                            }
                                        });
                                    });

                                  case 5:
                                    c.default.Event.event({
                                        id: "user_location_and_net",
                                        label: "",
                                        params: {
                                            position: o,
                                            network_type: n
                                        }
                                    }), e.onNetworkStatusChange(function(e) {
                                        s.network = !e.isConnected;
                                    });

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    doubleClick: function(t) {
                        var n = t.timeStamp, i = t.currentTarget.dataset.time;
                        n - i > 0 && n - i < 400 && e.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        }), this.touchStartTime = n;
                    },
                    blurInHandler: function() {
                        this.initAnimationBlur = !0, this.useAnimationBlur = !0;
                    },
                    blurOutHandler: function() {
                        this.useAnimationBlur = !1;
                    },
                    bannerChangeHandler: function(e) {
                        this.currentIndex = e;
                    },
                    getHomeData: function() {
                        var e = this;
                        a.default.$get("/v2/common/new_home", {}, {}).then(function(t) {
                            e.initSuccess || (0, u.report)(u.PerfIndicator.FirstPageRequest), e.initSuccess = !0, 
                            e.homeData = t, e.homeData.wechatcore = t.wechatcore || {
                                title: "",
                                mini_jump_url: ""
                            }, t.mini_banner ? (e.bannerList = t.mini_banner, t.mini_banner && t.mini_banner.length > 1 && e.bannerList.forEach(function(e) {
                                e && !e.back_img && (e.back_img = "@/static/images/index/banner-default.png", e.theme_color = [ 3, 104, 217 ]);
                            }), e.totalSwiper = t.mini_banner.length) : (e.bannerList = t.banner, t.banner && t.banner.length > 1 && e.bannerList.forEach(function(e) {
                                e && !e.back_img && (e.back_img = "../../static/images/index/banner-default.png", 
                                e.theme_color = [ 3, 104, 217 ]);
                            }), e.totalSwiper = t.banner.length), e.functionList = (t.function_list_r6 || []).filter(function(e) {
                                return "照片服务" != e.title && "翻译" != e.title;
                            }), e.storyList = t.theme_story, _.tag("homeData").log("", e.homeData), e.setDIYlist(t.recommend_list), 
                            e.getLikeData();
                        }).catch(function(t) {
                            e.indicatorStatus = "INDICATOR_ERROR";
                        });
                    },
                    getMyPlan: function() {
                        var e = this, t = this.token;
                        this.isInUbrPolygon && a.default.$get("/stroke/list", {}, {
                            header: {
                                MINIAPPTOKEN: t,
                                notRouteLogin: !0
                            }
                        }).then(function(t) {
                            var n = "errorcode" in t;
                            e.myPlanList = t && !n ? t : {};
                        });
                    },
                    setDIYlist: function(e) {
                        if (e.length > 0) {
                            for (var t = 0; t < e.length; t++) {
                                if ("perform" === e[t].block_type) {
                                    this.showPerform = !0, this.showList = e[t].list, this.showListTitle = e[t].title, 
                                    this.showListMore = e[t].is_show_list;
                                    for (var n = 0; n < e[t].list.length; n++) {
                                        for (var i = new Date(), o = "".concat(i.getFullYear(), "-").concat(i.getMonth(), "-").concat(i.getDate(), " "), a = "".concat(o).concat(i.getHours(), ":").concat(i.getMinutes()), s = 0; s < e[t].list[n].next_time.length; s++) if (Date.parse(a) <= Date.parse(o + e[t].list[n].next_time[s])) {
                                            this.showList[n].time = e[t].list[n].next_time[s], this.showList[n].content = "下一场";
                                            break;
                                        }
                                        this.showList[n].show_time = e[t].list[n].show_time.replace(/\|/g, " | ");
                                    }
                                    -1 === this.recommendList.indexOf("perform") && this.recommendList.push("perform");
                                }
                                if ("scenic" === e[t].block_type) {
                                    this.showScenic = !0, this.scenicList = e[t].list, this.scenicListTitle = e[t].title, 
                                    this.scenicListMore = e[t].is_show_list;
                                    for (var r = 0; r < e[t].list.length; r++) {
                                        var c;
                                        c = e[t].list[r].queuing_time.split("\n"), this.scenicList[r].time = c[0], this.scenicList[r].content = c[1];
                                    }
                                    -1 === this.recommendList.indexOf("scenic") && this.recommendList.push("scenic");
                                } else "hotel" === e[t].block_type ? (this.showHotel = !0, this.hotelList = e[t].list, 
                                this.hotelListTitle = e[t].title, this.hotelListMore = e[t].is_show_list, -1 === this.recommendList.indexOf("hotel") && this.recommendList.push("hotel")) : "shop" === e[t].block_type ? (this.showShop = !0, 
                                this.shopList = e[t].list, this.shopListTitle = e[t].title, this.shopListMore = e[t].is_show_list, 
                                -1 === this.recommendList.indexOf("shop") && this.recommendList.push("shop")) : "restaurant" === e[t].block_type && (this.showRestaurant = !0, 
                                this.restaurantList = e[t].list, this.restaurantListTitle = e[t].title, this.restaurantListMore = e[t].is_show_list, 
                                -1 === this.recommendList.indexOf("restaurant") && this.recommendList.push("restaurant"));
                            }
                            "perform" === e[0].block_type && (this.scenicTop = !1), _.log("showList:", this.showList), 
                            _.log("scenicList:", this.scenicList);
                        } else this.showPerform = !1, this.showScenic = !1;
                    },
                    putCollect: function() {
                        this.getLikeData();
                    },
                    getLikeData: function() {
                        var t = this, n = this, i = (e.getStorageSync("bindPhoneUser").token, "/recommend/home"), o = {};
                        this.default_ids && this.default_ids.length > 0 && (o = {
                            default_ids: this.default_ids
                        }), a.default.$get(i, o, {
                            header: {}
                        }).then(function(e) {
                            t.likeList = e, Array.isArray(t.likeList) && (t.default_ids = [], t.likeList.forEach(function(e) {
                                e.titles = e.title || e.ticket_name;
                                var t = {};
                                "ticket" === e.material_type ? e.list.forEach(function(e) {
                                    t = {
                                        material_id: e.material_id,
                                        material_type: e.material_type
                                    }, n.default_ids.push(t);
                                }) : (t = {
                                    material_id: e.material_id,
                                    material_type: e.material_type
                                }, n.default_ids.push(t)), e.titles && (-1 !== e.titles.indexOf("{1}") && (e.titles = e.titles.split("{1}").join("1")), 
                                -1 !== e.titles.indexOf("{2}") && (e.titles = e.titles.split("{2}").join("1")), 
                                -1 !== e.titles.indexOf("{3}") && (e.titles = e.titles.split("{3}").join("1"))), 
                                "seasonal_ticket" !== e.material_type && "annual_ticket" !== e.material_type && "MultiplePark" !== e.material_type || e.ticket_label && e.ticket_label[0].length > 12 && (e.ticket_label = e.ticket_label.slice(0, 1));
                            }));
                        });
                    },
                    cancelGames: function() {
                        this.showGamesModel = !1;
                    },
                    scancodeGames: function(e) {
                        this.showGamesModel = !0, this.gamesUrl = e;
                    },
                    scancode: function() {
                        var e = this;
                        e.showLoading = !0, setTimeout(function() {
                            e.showLoading = !1;
                        }, 1500);
                    },
                    search: function() {
                        (0, r.routeTo)({
                            name: "search",
                            params: {
                                from: "home"
                            }
                        }), c.default.Event.event({
                            id: "click_home_search",
                            label: "",
                            params: {}
                        });
                    },
                    double: function(e) {
                        e.timeStamp, e.currentTarget.dataset.time;
                    },
                    goDetail: function(e) {
                        switch (e) {
                          case "hotel":
                            (0, r.routeTo)({
                                name: "hotelReservation-list",
                                params: {
                                    navtitle: this.hotelListTitle
                                }
                            });
                            break;

                          case "store":
                            (0, r.routeTo)({
                                name: "store-recommend-list",
                                params: {
                                    navtitle: this.shopListTitle
                                }
                            });
                            break;

                          case "restaurant":
                            (0, r.routeTo)({
                                name: "restaurant-recommend-list",
                                params: {
                                    navtitle: this.restaurantListTitle
                                }
                            });
                        }
                    },
                    reLaunchMP: function() {
                        wx.reLaunch({
                            url: "/pages/home/home"
                        });
                    },
                    getPriceControl: function() {
                        a.default.$get("/product/price_control").then(function(t) {
                            e.setStorageSync("is_work", t.is_work), e.setStorageSync("day", t.day), e.setStorageSync("month", t.month), 
                            e.setStorageSync("year", t.year);
                        });
                    },
                    getOperationTime: function() {
                        var t = new Date(), n = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : "0".concat(t.getMonth() + 1), i = t.getDate() > 9 ? t.getDate() : "0".concat(t.getDate()), o = "".concat(t.getFullYear(), "-").concat(n), s = "".concat(t.getFullYear(), "-").concat(n, "-").concat(i);
                        a.default.$get("/event/calendar", {
                            date: o
                        }, {
                            header: {
                                MINIAPPTOKEN: this.token
                            }
                        }).then(function(t) {
                            var n = t.default_date.substring(0, 7) || o, i = t.default_date || s;
                            e.setStorageSync("default_date", i), e.setStorageSync("default_month", n);
                        });
                    },
                    agreementUpdateInit: function() {
                        var e = f(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return "/check/login", t = "", e.next = 4, a.default.$get("/check/login", {}, {
                                        header: {
                                            MINIAPPTOKEN: this.token,
                                            notRouteLogin: !0
                                        }
                                    }).then(function(e) {
                                        e && (t = e.data);
                                    });

                                  case 4:
                                    if (1 === t) {
                                        e.next = 6;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 6:
                                    return e.next = 8, h.default.init();

                                  case 8:
                                    this.agreementUpdate = e.sent, this.isShowAgreement = !h.default.checkVersion();

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    onPopupsClick: function(t) {
                        "同意" === t.text ? h.default.setVersion(this.agreementUpdate.version) : "暂不使用" === t.text && (a.default.$get("/user/logout", {}, {
                            header: {
                                "Content-Type": "application/json",
                                MINIAPPTOKEN: this.token
                            }
                        }).then(function(e) {}).catch(function(e) {}), e.removeStorageSync("loginUser"), 
                        e.removeStorageSync("bindPhoneUser"), this.bindPhoneLogout()), this.isShowAgreement = !1;
                    },
                    onTap: function(e) {
                        var t = e.target;
                        t.dataset.url && (0, r.routeTo)({
                            name: "open-webview",
                            params: {
                                url: encodeURIComponent(t.dataset.url)
                            }
                        });
                    },
                    isShowTabbar: function(e, t) {},
                    checkNotice: function(t) {
                        var n = this;
                        e.hideTabBar({
                            animation: !0,
                            success: function() {
                                n.booking_notice = t, n.showNoticeModel = !0;
                            }
                        });
                    },
                    clickCancel: function() {
                        this.showNoticeModel = !1, e.showTabBar({
                            animation: !0
                        });
                    },
                    clickSure: function() {
                        this.showNoticeModel = !1, e.showTabBar({
                            animation: !0
                        });
                    }
                })
            };
            t.default = w;
        }).call(this, n("543d").default);
    },
    "72d1": function(e, t, n) {},
    8676: function(e, t, n) {
        var i = n("72d1");
        n.n(i).a;
    },
    cee4: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("22cd")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "cee4", "common/runtime", "common/vendor" ] ] ]);