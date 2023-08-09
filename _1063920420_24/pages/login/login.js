require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/login" ], {
    "0036": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("a86a")).default);
        }).call(this, n("543d").createPage);
    },
    "2d04": function(e, t, n) {},
    3285: function(e, t, n) {
        n.r(t);
        var i = n("8edd"), o = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = o.a;
    },
    "5c68": function(e, t, n) {
        var i = n("2d04");
        n.n(i).a;
    },
    "8edd": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n("2f62"), o = n("2d48"), a = d(n("b775")), r = n("aa3e"), s = d(n("4738")), c = d(n("e397")), u = d(n("4360")), l = d(n("4f16"));
            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
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
            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var p = (requirePlugin("universal-map"), n("69ec").default), m = {
                components: {
                    HomeAction: function() {
                        n.e("components/back-white/back-white").then(function() {
                            return resolve(n("3899"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Indicator: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/indicator/indicator") ]).then(function() {
                            return resolve(n("e361"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        backcolor: "#ffffff",
                        leftIcon: "/static/images/index/ic-top-back.png",
                        actionType: "",
                        loading: !1,
                        checkedTips: !1,
                        checkedMarketing: !1,
                        assetsImage: r.assetsImage.newlogo,
                        code: "",
                        titleList: [],
                        marketingList: [],
                        indicatorStatus: "INDICATOR_NONE",
                        isNewUser: !1
                    };
                },
                computed: {},
                watch: {},
                mounted: function() {
                    wx.setNavigationBarColor({
                        frontColor: "#000000",
                        backgroundColor: "#ff0000"
                    });
                },
                methods: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(n), !0).forEach(function(t) {
                            f(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }({}, (0, i.mapActions)([ "initBindLogin" ]), {
                    setPreviousPageLoginStatus: function() {
                        this.setMarketing();
                        var e = getCurrentPages();
                        if (e.length > 1) {
                            var t = e[e.length - 2];
                            t && t.route && [ "subPackage1/planning/planning-my-detail", "sprint8Package/appointment/pass", "sprint8Package/coupon/tickets" ].includes(t.route) && (t.$vm.isBackLogin = !0);
                        }
                        (0, o.routeBack)({
                            params: {}
                        });
                    },
                    setMarketing: function() {
                        var e = {};
                        this.checkedMarketing ? e.is_accept_message = 1 : e.is_accept_message = 0, a.default.$post("/user/user_setting", e, {}).then(function(e) {});
                    },
                    getAgreement: function() {
                        var e = this;
                        a.default.$get("/register/agreement", {}, {}, this).then(function(t) {
                            e.titleList = t;
                        });
                    },
                    getAgreementMarketing: function() {
                        var e = this;
                        a.default.$get("/push/agreement", {}, {}).then(function(t) {
                            Array.isArray(t) && t.length > 0 && (e.marketingList = t);
                        });
                    },
                    agreement: function(e, t) {
                        s.default.Event.event({
                            id: "custom_ariticle_or_news",
                            label: "",
                            params: {
                                title: t,
                                source: "login"
                            }
                        }), (0, o.routeTo)({
                            name: "h5-h5agreement",
                            params: {
                                src: encodeURIComponent(e)
                            }
                        });
                    },
                    userInfoGet: function(t) {
                        var n = this;
                        e.TencentAdReport.send("LOGIN"), t.detail && t.detail.encryptedData && e.login({
                            provider: "weixin",
                            success: function(e) {
                                n.code = e.code, n.getToken(n.code, t.detail), s.default.Event.event({
                                    id: "click_miniprogram_login_WeChatlogin_button",
                                    label: "",
                                    params: {}
                                });
                            }
                        });
                    },
                    getToken: function(t, n) {
                        var i = this, o = new Date(), r = o.getFullYear(), d = o.getMonth() + 1 > 9 ? o.getMonth() + 1 : "0".concat(o.getMonth() + 1), g = o.getDate() > 9 ? o.getDate() : "0".concat(o.getDate()), f = o.toTimeString().substr(0, 8), m = "".concat(r, "-").concat(d, "-").concat(g, " ").concat(f);
                        this.loading = !0;
                        a.default.$post("/v2/user/login_social", {
                            code: t,
                            src_type: "miniapp",
                            social_type: "wxminiapp"
                        }, {}).then(function(t) {
                            if (1 !== t.ret) {
                                if (i.isNewUser = t.is_new, e.TencentAdReport.setOpenId(t.openid), t.need_phone_bind) {
                                    a.default.$post("/user/wxapp_bind_mobile", {
                                        encrypt: n.encryptedData,
                                        iv: n.iv,
                                        fid: t.fid
                                    }, {}).then(function(n) {
                                        1 === n.ret ? e.showToast({
                                            title: t.msg,
                                            icon: "none",
                                            duration: 1500
                                        }) : (c.default.setFirstRunIsLogin(!1), u.default.commit("token_update", {
                                            token: n.token
                                        }), e.getStorage({
                                            key: "bindPhoneUser",
                                            success: function(e) {
                                                n.is_new && s.default.Event.setOpenid(n.openid);
                                            },
                                            fail: function(e) {
                                                s.default.Event.setOpenid(n.openid);
                                            }
                                        }), e.setStorage({
                                            key: "bindPhoneUser",
                                            data: n,
                                            success: function() {
                                                i.initBindLogin(), i.loading = !1, p("setUserId", n.ciam_id);
                                                var t = e.getSystemInfoSync(), o = {
                                                    systemModel_ppl: t.brand,
                                                    systemVersion_ppl: t.system,
                                                    mingromEdition_ppl: l.default.version,
                                                    accessTerminal_ppl: t.model
                                                };
                                                p("setUserAttributes", o), s.default.Event.event({
                                                    id: "ciam_uuid",
                                                    label: "",
                                                    params: {
                                                        uuid: n.ciam_id
                                                    }
                                                }), wx.showToast({
                                                    title: "登录成功",
                                                    icon: "none",
                                                    duration: 1e3
                                                }), setTimeout(function() {
                                                    i.setPreviousPageLoginStatus();
                                                }, 1e3);
                                            }
                                        }), s.default.Event.event({
                                            id: "login_success",
                                            label: "",
                                            params: {
                                                ciam_uuid: n.ciam_id
                                            }
                                        }), s.default.Event.event({
                                            id: "registration_success",
                                            label: "",
                                            params: {
                                                ciam_uuid: n.ciam_id
                                            }
                                        }));
                                    });
                                }
                                i.isNewUser ? s.default.Event.event({
                                    id: "register_miniprogram_Login_or_Register_authorization_c",
                                    label: "",
                                    params: {
                                        authorization_status: "允许",
                                        login_or_register_status: "注册成功",
                                        register_time: m,
                                        is_vip: "否"
                                    }
                                }) : (e.getStorage({
                                    key: "bindPhoneUser",
                                    success: function(e) {
                                        t.is_new && s.default.Event.setOpenid(t.openid);
                                    },
                                    fail: function(e) {
                                        s.default.Event.setOpenid(t.openid);
                                    }
                                }), c.default.setFirstRunIsLogin(!1), u.default.commit("token_update", {
                                    token: t.token
                                }), e.setStorage({
                                    key: "bindPhoneUser",
                                    data: t,
                                    success: function() {
                                        i.initBindLogin(), p("setUserId", t.ciam_id);
                                        var n = e.getSystemInfoSync(), o = {
                                            systemModel_ppl: n.brand,
                                            systemVersion_ppl: n.system,
                                            mingromEdition_ppl: l.default.version,
                                            accessTerminal_ppl: n.model
                                        };
                                        p("setUserAttributes", o), s.default.Event.event({
                                            id: "ciam_uuid",
                                            label: "",
                                            params: {
                                                uuid: t.ciam_id
                                            }
                                        }), i.loading = !1, wx.showToast({
                                            title: "登录成功",
                                            icon: "none",
                                            duration: 1e3
                                        }), setTimeout(function() {
                                            setTimeout(function() {
                                                i.setPreviousPageLoginStatus();
                                            }, 1e3);
                                        });
                                    }
                                }), s.default.Event.event({
                                    id: "register_miniprogram_Login_or_Register_authorization_c",
                                    label: "",
                                    params: {
                                        authorization_status: "允许",
                                        login_or_register_status: "登录成功",
                                        is_vip: "否"
                                    }
                                }), s.default.Event.event({
                                    id: "login_success",
                                    label: "",
                                    params: {
                                        ciam_uuid: t.ciam_id
                                    }
                                }));
                            } else e.showToast({
                                title: t.msg,
                                icon: "none",
                                duration: 1500
                            });
                        }).catch(function(t) {
                            e.showToast({
                                title: t.errorMessage,
                                icon: "none",
                                duration: 1500
                            });
                        });
                    },
                    turnChecked: function() {
                        this.checkedTips || (s.default.Event.event({
                            id: "register_miniprogram_Login_or_Register_agree_agreement_b",
                            label: "",
                            params: {}
                        }), s.default.Event.event({
                            id: "click_miniprogram_login_agree_button",
                            label: "",
                            params: {}
                        })), this.checkedTips = !this.checkedTips;
                    },
                    turnCheckedMarketing: function() {
                        this.checkedMarketing = !this.checkedMarketing;
                    }
                }),
                onShow: function() {
                    s.default.Page.onShow(), s.default.Event.event({
                        id: "arrive_miniprogram_login",
                        label: "",
                        params: {}
                    }), s.default.Event.event({
                        id: "register_miniprogram_Login_or_Register_a",
                        label: "",
                        params: {}
                    });
                },
                onHide: function() {
                    s.default.Page.onHide();
                },
                onUnload: function() {
                    s.default.Page.onUnload();
                },
                onLoad: function(t) {
                    t.type && (this.actionType = t.type), this.getAgreementMarketing(), this.getAgreement();
                    var n = this;
                    e.login({
                        provider: "weixin",
                        success: function(e) {
                            n.code = e.code;
                        }
                    });
                },
                onReady: function() {}
            };
            t.default = m;
        }).call(this, n("543d").default);
    },
    a86a: function(e, t, n) {
        n.r(t);
        var i = n("e100"), o = n("3285");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("5c68");
        var r = n("f0c5"), s = Object(r.a)(o.default, i.b, i.c, !1, null, "597ab9e8", null, !1, i.a, void 0);
        t.default = s.exports;
    },
    e100: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.titleList, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f0: e._f("globalTitleFilter")(t.title)
                };
            })), n = e.marketingList && e.marketingList.length > 0 ? e.__map(e.marketingList, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f1: e._f("globalTitleFilter")(t.title)
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    l1: n
                }
            });
        }, o = [];
    }
}, [ [ "0036", "common/runtime", "common/vendor" ] ] ]);