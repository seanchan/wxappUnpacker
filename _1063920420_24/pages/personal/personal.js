(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal/personal" ], {
    2795: function(e, t, n) {
        n.r(t);
        var a = n("2ab5"), o = n("717f");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("e83c");
        var r = n("f0c5"), s = Object(r.a)(o.default, a.b, a.c, !1, null, "2a7384c6", null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "2ab5": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this, t = (e.$createElement, e._self._c, Object.keys(e.myStrokeList)), n = t.length > 0 && e.isInUbrPolygon ? e.formatDate(e.myStrokeList.start_date) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    m0: n
                }
            });
        }, o = [];
    },
    "3c70": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("2795")).default);
        }).call(this, n("543d").createPage);
    },
    "3c8f": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = c(n("b775")), o = n("2f62"), i = n("2d48"), r = n("aa3e"), s = c(n("4738"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        m(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var f = {
                components: {
                    Indicator: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/indicator/indicator") ]).then(function() {
                            return resolve(n("e361"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeAction: function() {
                        n.e("components/back-white/back-white").then(function() {
                            return resolve(n("3899"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        isClick: !0,
                        isShowDev: !1,
                        isShowDevTime: 0,
                        isShowDevTimer: 0,
                        isShowDevCounter: 0,
                        backcolor: "#ffffff",
                        actionType: "personal",
                        showTestButton: !1,
                        leftIcon: r.assetsImage.staticfile.ictopmsg,
                        collectionData: {
                            name: "我的收藏",
                            url: "/pages/about/my-order",
                            id: "collection"
                        },
                        list: [],
                        isiPhoneX: !1,
                        fixBottom: "",
                        assetsImage: r.assetsImage.personal,
                        assetsImage1: r.assetsImage.staticfile,
                        members: r.assetsImage.member,
                        myNum: "",
                        isRelease1: e.getStorageSync("nowRelease"),
                        avatar: r.assetsImage.staticfile.defaultphoto,
                        defaultphoto: r.assetsImage.staticfile.defaultphoto,
                        nickName: "登录/注册",
                        user: null,
                        myStrokeList: {},
                        indicatorStatus: "INDICATOR_NONE",
                        hasStroke: !1,
                        tourText: "",
                        cansetup: !0,
                        isLogin: !1,
                        memdetail: {},
                        inLength: 0
                    };
                },
                computed: u({}, (0, o.mapState)({
                    nickName1: function(e) {
                        return e.bindPhone.nickname;
                    },
                    avatar1: function(e) {
                        return e.bindPhone.avatar;
                    },
                    token: function(e) {
                        return e.bindPhone.token;
                    },
                    isInUbrPolygon: function(e) {
                        return e.location.isInUbrPolygon;
                    }
                }), {
                    loginDesc: function() {
                        return this.token ? "北京环球度假区欢迎您" : "登录查看更多";
                    },
                    loginName: function() {
                        return this.token ? this.nickName1 : "登录/注册";
                    },
                    loginAvatar: function() {
                        return this.token ? this.avatar1.url : "https://universal-test-1301203089.cos.ap-beijing.myqcloud.com/mock/avatar.jpg";
                    },
                    fmtMobile: function() {
                        var e = this.mobile;
                        return e ? "".concat(e.substr(0, 3), " **** ").concat(e.substr(6, 10)) : "";
                    },
                    getiphonestyle: function() {
                        return e.$globalData.systemInfo.frontImageHeight + 4;
                    }
                }),
                watch: {},
                methods: u({}, (0, o.mapActions)([ "bindMobile", "unbindMobile" ]), {}, (0, o.mapMutations)({
                    saveUser: "SAVE_USER"
                }), {
                    getMyPlan: function() {
                        var e = this, t = this.token;
                        this.myStrokeList = {}, a.default.$get("/stroke/list", {}, {
                            header: {
                                MINIAPPTOKEN: t
                            }
                        }).then(function(t) {
                            if (t && !("errorcode" in t)) {
                                if (Object.keys(t).length > 0) {
                                    e.hasStroke = !0;
                                    for (var n = 0; n < Object.keys(t).length; n++) {
                                        var a = t[n], o = e.getDateGap(e.getToday(), e.formatDate(a.start_date, 2));
                                        if (o >= 0 && o <= 3) {
                                            e.myStrokeList = a;
                                            break;
                                        }
                                    }
                                }
                            } else e.myStrokeList = {};
                            e.hasStroke ? (e.isInUbrPolygon && (Object.keys(e.myStrokeList).length > 0 ? e.tourText = e.myStrokeList.title : e.tourText = "更新于".concat(e.getToday(2))), 
                            e.isInUbrPolygon || (e.tourText = "更新于".concat(e.getToday(2)))) : e.tourText = "一键生成游玩行程";
                        });
                    },
                    getToday: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = new Date();
                        return 1 === e ? "".concat(t.getFullYear(), "-").concat(this.dataLeftCompleting(t.getMonth() + 1), "-").concat(this.dataLeftCompleting(t.getDate())) : 2 === e ? "".concat(t.getFullYear(), "年").concat(this.dataLeftCompleting(t.getMonth() + 1), "月").concat(t.getDate(), "日") : void 0;
                    },
                    dataLeftCompleting: function(e) {
                        return parseInt(e, 10) < 10 ? "0".concat(e) : e;
                    },
                    formatDate: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        if (e = e.toString(), 1 === t) {
                            var n = e.substr(4, 2), a = e.substr(6, 2), o = "".concat(n, "月").concat(a, "日");
                            return o;
                        }
                        return "".concat(e.substr(0, 4), "-").concat(e.substr(4, 2), "-").concat(e.substr(6, 2));
                    },
                    getDateGap: function(e, t) {
                        var n = new Date(e);
                        return (new Date(t) - n) / 864e5;
                    },
                    orderList: function(e) {
                        var t = this;
                        this.isClick && this.cansetup && (this.isClick = !1, setTimeout(function() {
                            t.isClick = !0;
                        }, 2500), null === this.user ? (0, i.routeTo)({
                            name: "loginNew",
                            params: {}
                        }) : (0, i.routeTo)({
                            name: "ordercenter",
                            params: {
                                num: e
                            }
                        }));
                    },
                    getMyData: function() {
                        var t = this;
                        this.cansetup = !1;
                        a.default.$get("/v2/user/my", {}, {
                            header: {}
                        }, this).then(function(n) {
                            if (n.user) {
                                t.isLogin = !0, e.setStorage({
                                    key: "userPic",
                                    data: n.user
                                });
                                var a = n.user.nick || "登录/注册";
                                a.length > 8 && (a = "".concat(a.substring(0, 8), "...")), t.nickName = a, t.user = n.user, 
                                t.avatar = n.user.avatar.url, t.myNum = n.my_hq, e.setStorageSync("loginUser", n.user), 
                                t.list = [], t.list.push({
                                    back: r.assetsImage.personal.ticket,
                                    type: "ticket",
                                    topContent: "门票"
                                }, {
                                    back: r.assetsImage.personal.coupon,
                                    type: "coupon",
                                    topContent: "卡券"
                                }, {
                                    back: r.assetsImage.personal.gift,
                                    type: "coupon-gift",
                                    topContent: "礼品券"
                                }), n.my_hq && n.my_hq.ticket && "".concat(n.my_hq.ticket, "张待使用"), n.my_hq && n.my_hq.coupon && "".concat(n.my_hq.coupon, "张待使用"), 
                                t.getMyPlan();
                            } else t.isLogin = !1, t.list = [], t.tourText = "注册或登录后去规划吧~", t.nickName = "登录/注册", 
                            t.avatar = t.defaultphoto, e.removeStorageSync("loginUser"), e.removeStorageSync("bindPhoneUser");
                            t.memdetail = n, t.memdetail.interests && t.memdetail.interests.length > 4 && (t.memdetail.interests = t.memdetail.interests.slice(0, 4)), 
                            t.memdetail.interests && t.memdetail.interests.length && (t.inLength = t.memdetail.interests.length);
                        }).finally(function() {
                            t.cansetup = !0;
                        });
                    },
                    goTicket: function(t) {
                        var n = this;
                        if (this.isClick && this.cansetup) {
                            this.isClick = !1, setTimeout(function() {
                                n.isClick = !0;
                            }, 2500);
                            var a = "";
                            if ("门票" === t.topContent ? a = "click_my_tickets" : "现金劵" === t.topContent ? a = "click_my_coupon" : "照片" === t.topContent ? a = "click_my_photo" : "权益" === t.topContent && (a = "click_my_rights"), 
                            s.default.Event.event({
                                id: a,
                                label: "",
                                params: {}
                            }), "coupon" === t.type) (0, i.routeTo)({
                                name: "coupon-list",
                                params: {}
                            }); else if ("ticket" === t.type) (0, i.routeTo)({
                                name: "my-ticket",
                                params: {}
                            }); else if ("coupon-gift" === t.type) {
                                var o = e.getStorageSync("bindPhoneUser").ciam_id || "";
                                s.default.Event.event({
                                    id: "click_my_gift_card_entrance",
                                    label: "",
                                    params: {
                                        ciam_uuid: o
                                    }
                                }), (0, i.routeTo)({
                                    name: "coupon-gift-list",
                                    params: {}
                                });
                            } else "权益" === t.type && this.$loading("敬请期待");
                        }
                    },
                    mylove: function() {
                        s.default.Event.event({
                            id: "click_my_my_collection",
                            label: "",
                            params: {}
                        });
                    },
                    myfeedback: function() {
                        s.default.Event.event({
                            id: "click_my_my_feedback",
                            label: "",
                            params: {}
                        });
                    },
                    myhistorty: function() {
                        s.default.Event.event({
                            id: "click_my_browsing_hisroty",
                            label: "",
                            params: {}
                        });
                    },
                    myset: function() {
                        s.default.Event.event({
                            id: "click_my_user_setting",
                            label: "",
                            params: {}
                        });
                    },
                    showTips: function() {
                        this.$loading("敬请期待");
                    },
                    tapAbout: function(t) {
                        e.navigateTo({
                            url: "/pages/about"
                        });
                    },
                    bindMobileOk: function(t) {
                        t && t.id && e.navigateTo({
                            url: "/pages/index/personal/".concat(t.id)
                        });
                    },
                    bindUserOk: function(e) {},
                    tapUnbindMobile: function() {
                        var t = this;
                        e.showModal({
                            title: "确认解绑？"
                        }).then(function(e) {
                            e && t.unbindMobile().then(function() {
                                t.$loading("已解绑，请刷新");
                            });
                        });
                    },
                    getNickName: function() {
                        var t = this;
                        this.token ? e.getStorage({
                            key: "bindPhoneUser",
                            success: function(e) {
                                var n = e.data.nickname;
                                t.nickName = n;
                            },
                            fail: function(e) {}
                        }) : this.nickName = "登录/注册";
                    },
                    goLineList: function(e) {
                        null !== this.user ? (0, i.routeTo)({
                            name: "plan-list",
                            params: {}
                        }) : (0, i.routeTo)({
                            name: "loginNew",
                            params: {}
                        });
                    },
                    goDebugPage: function() {
                        (0, i.routeTo)({
                            name: "debug",
                            params: {}
                        });
                    },
                    goGetCodePage: function() {
                        (0, i.routeTo)({
                            name: "getcode",
                            params: {}
                        });
                    },
                    goKefuTest: function() {
                        (0, i.routeTo)({
                            name: "customer",
                            params: {}
                        });
                    },
                    goDetailTest: function() {
                        (0, i.routeTo)({
                            name: "testd",
                            params: {}
                        });
                    },
                    loginHandler: function(e) {
                        this.cansetup && (null === this.user ? (0, i.routeTo)({
                            name: "loginNew",
                            params: {}
                        }) : (0, i.routeTo)({
                            name: "setup",
                            params: {}
                        }), s.default.Event.event({
                            id: "click_my_avatar_and_account",
                            label: "",
                            params: {}
                        }));
                    },
                    goHistory: function() {
                        this.myhistorty(), (0, i.routeTo)({
                            name: "history",
                            params: {}
                        });
                    },
                    goFeedback: function() {
                        this.myfeedback(), (0, i.routeTo)({
                            name: "helpandfeedback-list",
                            params: {}
                        });
                    },
                    goCollect: function() {
                        null === this.user ? (0, i.routeTo)({
                            name: "loginNew",
                            params: {}
                        }) : (this.mylove(), (0, i.routeTo)({
                            name: "collect-list",
                            params: {}
                        }));
                    },
                    goToSetUp: function() {
                        this.myset(), (0, i.routeTo)({
                            name: "personSet",
                            params: {}
                        });
                    },
                    enableDev: function() {
                        new Date();
                    },
                    gomemInfo: function() {
                        if (this.cansetup) {
                            var t = e.getStorageSync("bindPhoneUser").ciam_id || "";
                            null === this.user ? (0, i.routeTo)({
                                name: "loginNew",
                                params: {}
                            }) : ((0, i.routeTo)({
                                name: "member-explain",
                                params: {
                                    isExplain: 2,
                                    articleId: this.memdetail.article.id,
                                    title: this.memdetail.article.title
                                }
                            }), s.default.Event.event({
                                id: "click_me_top_passholder_news",
                                label: "",
                                params: {
                                    ciam_uuid: t,
                                    news_id: this.memdetail.article.id,
                                    news_title: this.memdetail.article.title,
                                    article_id: this.memdetail.article.articleId
                                }
                            }));
                        }
                    },
                    gomemCenter: function() {
                        if (this.cansetup) if (null !== this.user) {
                            var t = e.getStorageSync("bindPhoneUser").ciam_id || "";
                            this.memdetail.isMember ? ((0, i.routeTo)({
                                name: "member-center",
                                params: {}
                            }), s.default.Event.event({
                                id: "click_me_enter_pssholder_center",
                                label: "",
                                params: {
                                    ciam_uuid: t
                                }
                            })) : this.memdetail.isExplain ? ((0, i.routeTo)({
                                name: "member-explain",
                                params: {
                                    isExplain: 1
                                }
                            }), s.default.Event.event({
                                id: "click_me_certify_as_a_passholder",
                                label: "",
                                params: {
                                    ciam_uuid: t
                                }
                            })) : ((0, i.routeTo)({
                                name: "member-authentication",
                                params: {}
                            }), s.default.Event.event({
                                id: "click_me_certify_as_a_passholder",
                                label: "",
                                params: {
                                    ciam_uuid: t
                                }
                            }));
                        } else (0, i.routeTo)({
                            name: "loginNew",
                            params: {}
                        });
                    }
                }),
                onHide: function() {
                    s.default.Page.onHide();
                },
                onUnload: function() {
                    s.default.Page.onUnload();
                },
                onShow: function() {
                    var t = e.$globalData.outdoorPlugin;
                    t && t.resetFilterData && t.resetFilterData(), this.user = null, s.default.Page.onShow(), 
                    s.default.Event.event({
                        id: "arrive_my",
                        label: "",
                        params: {}
                    }), this.getMyData();
                },
                onTabItemTap: function() {
                    var t = e.getStorageSync("bindPhoneUser").ciam_id || "";
                    s.default.Event.event({
                        id: "click_my",
                        label: "",
                        params: {
                            ciam_uuid: t
                        }
                    });
                },
                onLoad: function() {
                    this.showTestButton = "development" === e.$env, wx.setNavigationBarColor({
                        frontColor: "#000000",
                        backgroundColor: "#ffffff",
                        animation: {
                            duration: 400,
                            timingFunc: "easeIn"
                        }
                    });
                }
            };
            t.default = f;
        }).call(this, n("543d").default);
    },
    "630d": function(e, t, n) {},
    "717f": function(e, t, n) {
        n.r(t);
        var a = n("3c8f"), o = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    e83c: function(e, t, n) {
        var a = n("630d");
        n.n(a).a;
    }
}, [ [ "3c70", "common/runtime", "common/vendor" ] ] ]);