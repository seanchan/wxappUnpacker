(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/t-captcha" ], {
    5053: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "5f18": function(t, e, a) {
        a.r(e);
        var n = a("5053"), r = a("68d9");
        for (var c in r) "default" !== c && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(c);
        var o = a("f0c5"), i = Object(o.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = i.exports;
    },
    6429: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(a("a34a")), r = a("2d48");
            function c(t, e, a, n, r, c, o) {
                try {
                    var i = t[c](o), u = i.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void a(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(n, r);
            }
            function o(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, r) {
                        var o = t.apply(e, a);
                        function i(t) {
                            c(o, n, r, i, u, "next", t);
                        }
                        function u(t) {
                            c(o, n, r, i, u, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        name: "rtmap/t-captcha",
                        verify_callback: null,
                        resolve: null
                    };
                },
                methods: {
                    verify: function() {
                        var t = o(n.default.mark(function t(e) {
                            var a = this;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.verify_callback = null, t.next = 3, new Promise(function() {
                                        var t = o(n.default.mark(function t(c) {
                                            var o, i, u, s, l, p, f, d, h;
                                            return n.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return a.resolve = c, t.next = 3, a.check_if_need_verify(e.ticket_id);

                                                  case 3:
                                                    o = t.sent, i = o.res, u = e.to || "sprint4Package/order/orderwrite", s = a.baseUrl + "/api/captcharesult", 
                                                    l = e.ext_id, p = e.ext_is_search, f = e.ext_ticket_type, d = e.ext_single_express_type, 
                                                    i ? (h = "https://universal-test-1301203089.file.myqcloud.com/h5/h5riskcontrol/t-captcha.html?token=".concat(a.token, "&app_id=").concat(e.appId, "&to=").concat(u, "&api=").concat(s, "&ext_id=").concat(l, "&ext_is_search=").concat(p, "&ext_ticket_type=").concat(f, "&ext_single_express_type=").concat(d), 
                                                    (0, r.routeTo)({
                                                        name: "h5-webview",
                                                        params: {
                                                            url: encodeURIComponent(h)
                                                        }
                                                    })) : wx.navigateTo({
                                                        url: "/".concat(u, "?id=").concat(l, "&isSearch=").concat(p, "&ticketType=").concat(f, "&single_express_type=").concat(d, "&goods_type=").replace(/^\/+/, "/")
                                                    });

                                                  case 12:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }());

                                  case 3:
                                    return t.abrupt("return", t.sent);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    check_if_need_verify: function() {
                        var e = o(n.default.mark(function e(a) {
                            var r, c;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (a) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return", {
                                        err: "没有ticket_id"
                                    });

                                  case 2:
                                    if (t.$globalData.tCaptcha || (t.$globalData.tCaptcha = {}), !t.$globalData.tCaptcha[a]) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.abrupt("return", {
                                        res: !0
                                    });

                                  case 5:
                                    return e.next = 7, this.api.$get("/api/isopencaptcha", {
                                        ticket_id: a
                                    });

                                  case 7:
                                    if (r = e.sent, !(c = r.res) || !(1 == c.data || c.data && 1 == c.data.data)) {
                                        e.next = 12;
                                        break;
                                    }
                                    return t.$globalData.tCaptcha[a] = !0, e.abrupt("return", {
                                        res: !0
                                    });

                                  case 12:
                                    return e.abrupt("return", {
                                        err: "当前ticket_id不需要验证"
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    handleVerify: function(t) {
                        this.verify_callback && this.verify_callback(t);
                    },
                    handleError: function(t) {
                        this.resolve ? this.resolve({
                            err: "t-captcha插件配置出错"
                        }) : this.api.$toast(t.detail.errMsg);
                    },
                    handleClose: function(t) {
                        t && t.detail.ret && 2 == t.detail.ret && this.verify_callback && this.resolve && this.resolve({
                            err: "用户已取消验证"
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, a("543d").default);
    },
    "68d9": function(t, e, a) {
        a.r(e);
        var n = a("6429"), r = a.n(n);
        for (var c in n) "default" !== c && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/t-captcha-create-component", {
    "components/rtmap/t-captcha-create-component": function(t, e, a) {
        a("543d").createComponent(a("5f18"));
    }
}, [ [ "components/rtmap/t-captcha-create-component" ] ] ]);