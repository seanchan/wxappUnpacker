(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SubscribeMessage/index" ], {
    "0886": function(t, e, s) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s("2f62");
            function n(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, s = new Array(t.length); e < t.length; e++) s[e] = t[e];
                        return s;
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            function c(t, e) {
                var s = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), s.push.apply(s, i);
                }
                return s;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(s), !0).forEach(function(e) {
                        r(t, e, s[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : c(Object(s)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
                    });
                }
                return t;
            }
            function r(t, e, s) {
                return e in t ? Object.defineProperty(t, e, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = s, t;
            }
            var o = "success", u = "error", h = {
                name: "SubscribeMessage",
                components: {},
                props: {
                    showSubscribe: {
                        type: Boolean,
                        default: !1
                    },
                    moreType: {
                        type: String,
                        default: ""
                    },
                    isFalg: {
                        type: Boolean,
                        default: !0
                    },
                    type: {
                        type: String,
                        default: ""
                    },
                    params: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        showSubscribeMessage: !1,
                        mainSwitch: !1,
                        itemSettings: [],
                        tmplIds: [],
                        title: "",
                        content: "",
                        always: null
                    };
                },
                computed: a({}, (0, i.mapState)("subscribeMessage", [ "subscribeMessageIDList", "blackList", "typeList", "enumTypeList" ])),
                watch: {
                    showSubscribe: {
                        handler: function(t) {
                            if (t) {
                                if (this.moreType && !this.checkType(this.type, this.moreType) || !this.moreType && !this.checkType(this.type)) return void this.callBack(u);
                                if (!this.isShowSubscribe()) return;
                                this.isFalg || this.onClickSure(), this.showSubscribeMessage = !0;
                            } else this.showSubscribeMessage = !1;
                        },
                        immediate: !0
                    }
                },
                mounted: function() {},
                created: function() {
                    this.initTypeList(), this.getUserConfig(), this.getSubscribeMessageID();
                },
                methods: a({}, (0, i.mapMutations)("subscribeMessage", [ "addBlackList", "initTypeList" ]), {}, (0, 
                i.mapActions)("subscribeMessage", [ "getSubscribeMessageID", "subscribe" ]), {
                    checkBlackType: function(t) {
                        return !this.blackList.includes(t);
                    },
                    checkSubscriptionsItemSettings: function(t) {
                        var e = this, s = [], i = [], n = 0;
                        return t.forEach(function(t) {
                            "accept" === e.itemSettings[t] && s.push(t), "reject" === e.itemSettings[t] && i.push(t), 
                            e.itemSettings[t] && (n += 1);
                        }), {
                            alwaysAccept: s.length === t.length,
                            alwaysReject: i.length === t.length,
                            always: t.length === n
                        };
                    },
                    getUserConfig: function() {
                        var e = this;
                        t.getSetting({
                            withSubscriptions: !0,
                            success: function(t) {
                                e.mainSwitch = t.subscriptionsSetting.mainSwitch, t.subscriptionsSetting.itemSettings && (e.itemSettings = t.subscriptionsSetting.itemSettings);
                            }
                        });
                    },
                    openSetting: function() {
                        t.openSetting({
                            success: function() {}
                        });
                    },
                    close: function() {
                        this.$emit("update:showSubscribe", !1);
                    },
                    onClickSure: function() {
                        this.close(), this.getUserConfig(), this.always = this.checkSubscriptionsItemSettings(this.tmplIds), 
                        !this.always.alwaysAccept || this.mainSwitch ? this.requestSub() : this.openSetting();
                    },
                    requestSub: function() {
                        var e = this;
                        t.requestSubscribeMessage({
                            tmplIds: e.tmplIds,
                            success: function(t) {
                                e.checkRequestSubCallBack(t);
                            },
                            fail: function(t) {
                                20004 === t.errCode && e.openSetting();
                            }
                        });
                    },
                    onCancelSubscrib: function() {
                        this.addBlackList(this.type), this.callBack(o);
                    },
                    callBack: function(t) {
                        this.close(), this.$emit("callBack", t);
                    },
                    checkRequestSubCallBack: function(t) {
                        var e = [];
                        Object.keys(t).forEach(function(s) {
                            "accept" === t[s] && e.push(s);
                        }), e.length ? (this.sendSubscribe(e), this.callBack(o)) : this.onCancelSubscrib();
                    },
                    sendSubscribe: function(t) {
                        var e = a({}, this.params);
                        e.type = this.type, e.giftType = this.moreType || "", e.template_ids = t, this.params.start_time && (e.start_time = this.formatLengthDate(this.params.start_time)), 
                        this.params.end_time && (e.end_time = this.formatLengthDate(this.params.end_time)), 
                        this.subscribe(e);
                    },
                    isShowSubscribe: function() {
                        return this.tmplIds.length && this.checkBlackType(this.type) ? (this.always = this.checkSubscriptionsItemSettings(this.tmplIds), 
                        this.always.alwaysReject ? (this.callBack(u), !1) : !(this.always.alwaysAccept && this.mainSwitch || this.always.always) || (this.showSubscribeMessage = !0, 
                        !1)) : (this.callBack(u), !1);
                    },
                    checkType: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (this.typeList) {
                            if (!this.typeList.has(t)) return !1;
                            if (!this.enumTypeList.has(t) || !this.subscribeMessageIDList) return !1;
                            this.tmplIds = e ? [].concat(n(this.subscribeMessageIDList[this.enumTypeList.get(t)]), n(this.subscribeMessageIDList[e])) || [] : this.subscribeMessageIDList[this.enumTypeList.get(t)] || [];
                            var s = this.typeList.get(t), i = s.title, c = s.content;
                            return this.title = i, this.content = c, !0;
                        }
                    },
                    formatLengthDate: function(t) {
                        var e = t.split("-"), s = e[0], i = e[1], n = e[2];
                        return i = i.length < 2 ? "0".concat(i) : i, n = n.length < 2 ? "0".concat(n) : n, 
                        "".concat(s, "-").concat(i, "-").concat(n);
                    }
                })
            };
            e.default = h;
        }).call(this, s("543d").default);
    },
    "4bc2": function(t, e, s) {
        s.d(e, "b", function() {
            return i;
        }), s.d(e, "c", function() {
            return n;
        }), s.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    "53a5": function(t, e, s) {},
    "93a7": function(t, e, s) {
        s.r(e);
        var i = s("0886"), n = s.n(i);
        for (var c in i) "default" !== c && function(t) {
            s.d(e, t, function() {
                return i[t];
            });
        }(c);
        e.default = n.a;
    },
    a336: function(t, e, s) {
        s.r(e);
        var i = s("4bc2"), n = s("93a7");
        for (var c in n) "default" !== c && function(t) {
            s.d(e, t, function() {
                return n[t];
            });
        }(c);
        s("ef78");
        var a = s("f0c5"), r = Object(a.a)(n.default, i.b, i.c, !1, null, "28973cf2", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    ef78: function(t, e, s) {
        var i = s("53a5");
        s.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SubscribeMessage/index-create-component", {
    "components/SubscribeMessage/index-create-component": function(t, e, s) {
        s("543d").createComponent(s("a336"));
    }
}, [ [ "components/SubscribeMessage/index-create-component" ] ] ]);