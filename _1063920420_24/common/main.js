(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "23be": function(t, e, n) {
        n.r(e);
        var r = n("e4a4"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "3dfd": function(t, e, n) {
        n.r(e);
        var r = n("a618"), o = n("23be");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("488a");
        var a = n("f0c5"), u = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    "488a": function(t, e, n) {
        var r = n("73b9");
        n.n(r).a;
    },
    "56d7": function(t, e, n) {
        (function(t, e) {
            var r = v(n("a34a"));
            n("6cdc");
            var o = v(n("66fd")), i = n("2f62"), a = v(n("98b0")), u = v(n("823b")), l = n("b2cb"), c = v(n("9671")), s = v(n("4f16")), d = v(n("3dfd")), f = v(n("4360")), p = n("2d48");
            function v(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function g(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(n), !0).forEach(function(e) {
                        h(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function y(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a), l = u.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                u.done ? e(l) : Promise.resolve(l).then(r, o);
            }
            function b(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);
                        function a(t) {
                            y(i, r, o, a, u, "next", t);
                        }
                        function u(t) {
                            y(i, r, o, a, u, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function w(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                        var n = [], r = !0, o = !1, i = void 0;
                        try {
                            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            o = !0, i = t;
                        } finally {
                            try {
                                r || null == u.return || u.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return n;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }();
            }
            function x(t) {
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
            var O = n("e16a").sm4, P = n("7a62"), _ = n("69ec").default, $ = t.getStorageSync("server_env");
            wx.OpenMidasConfig = {
                webDomain: "billing.app.universalbeijingresort.com/h5",
                sandboxWebDomain: "billing.app.universalbeijingresort.com/h5",
                cgiDomain: {
                    release: "billing.app.universalbeijingresort.com/api",
                    dev: "sbilling.app.universalbeijingresort.com/api",
                    test: "tbilling.abc.wiiqq.com/api",
                    testing: "ebilling.app.universalbeijingresort.com/api"
                },
                apiCommonConf: {
                    version: "juxin_ubr"
                }
            };
            var C = {
                test1: "dev",
                uat1: "testing",
                formal1: "test",
                formal: "release"
            }[$];
            P.init(C);
            _("init", {
                formal: "b3f56aa3b11925bc"
            }[$] || "94bff51b5f5df8db", {
                formal: "a84d28df825a6513"
            }[$] || "8ca329358b0be8ac", "wx3ba512d53df66a75", {
                scheme: "https",
                host: {
                    formal: "data-prod.app.universalbeijingresort.com"
                }[$] || "data-test.app.universalbeijingresort.com",
                version: s.default.version,
                vue: o.default
            }), [ {
                family: "ubrxblack",
                value: "MXiangHeHeiSCW05-XBlack.woff"
            }, {
                family: "ubrheavy",
                value: "MXiangHeHeiSCW05-Heavy.woff"
            }, {
                family: "AvenirNextLTPro-Heavy",
                value: "AvenirNextLTPro-Heavy.ttf"
            }, {
                family: "AvenirNextLTPro-Bold",
                value: "AvenirNextLTPro-Bold.ttf"
            } ].forEach(function(t) {
                var e = t.family, n = t.value;
                wx.loadFontFace({
                    family: e,
                    source: 'url("https://cdn.app.universalbeijingresort.com/mini-program/fonts/'.concat(n, '")'),
                    global: !0,
                    success: void 0
                });
            }), d.default.mpType = "app", o.default.component("toast", function() {
                n.e("components/rtmap/toast").then(function() {
                    return resolve(n("49d4"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("indicator", function() {
                n.e("components/rtmap/indicator").then(function() {
                    return resolve(n("5980"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.filter("globalTitleFilter", function(t) {
                return (t || "").replace(/\{0\}/g, "").replace(/\{1\}/g, "™").replace(/\{2\}/g, "®").replace(/\{3\}/g, "©");
            }), o.default.filter("globalEnterFilter", function(t) {
                return (t || "").replace(/\{0\}/g, "\r\n").replace(/\{1\}/g, "™").replace(/\{2\}/g, "®").replace(/\{3\}/g, "©");
            }), o.default.filter("globalShowTimeFilter", function(t) {
                return t && t.length ? "演出时间 " + [].concat(x(t.slice(0, 3)), x(t.slice(-1))).join(" | ") : "";
            }), o.default.config.productionTip = !1, o.default.prototype.$OpenMidas = P, o.default.prototype.$encryption = O, 
            o.default.prototype.$store = f.default, o.default.prototype.$checkLogin = c.default, 
            o.default.prototype.$loading = function(t) {
                return f.default.commit("toast/switch_loading", t);
            }, t.$platform = a.default, t.setStorage({
                key: "firstPlayVideo",
                data: !0
            }), o.default.mixin({
                data: function() {
                    var e = this;
                    Date.prototype.format = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "yyyy-MM-dd HH:mm:ss", e = new Date(this.getTime() - 6e4 * new Date().getTimezoneOffset()).toISOString().match(/\d+/g), n = w(e, 6), r = n[0], o = n[1], i = n[2], a = n[3], u = n[4], l = n[5];
                        return t.replace(/y{4}|y{2}|M{2}|M|d{2}|d|H{2}|H|h{2}|h|m{2}|m|s{2}|s|A|a/g, function(t) {
                            return {
                                yyyy: r,
                                yy: r % 100,
                                MM: o,
                                M: +o,
                                dd: i,
                                d: +i,
                                HH: a,
                                H: +a,
                                hh: ("0" + a % 12).slice(-2),
                                h: +a % 12,
                                mm: u,
                                m: +u,
                                ss: l,
                                s: +l,
                                A: a < 12 ? "AM" : "PM",
                                a: a < 12 ? "am" : "pm"
                            }[t];
                        });
                    };
                    var i = null;
                    return {
                        ipxClass: "",
                        platform: "",
                        h5Class: "",
                        baseUrl: "",
                        api: {
                            _find_child_by_identifier_: function(t) {
                                return e.$children.find(function(e) {
                                    return e.name == "rtmap/".concat(t);
                                });
                            },
                            $loginNew: function() {
                                return (0, p.routeTo)({
                                    name: "loginNew",
                                    params: {}
                                });
                            },
                            $route: {
                                path: "",
                                fullPath: "",
                                query: {},
                                push: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return (0, p.routeTo)({
                                        name: t,
                                        params: e,
                                        type: "navigate"
                                    });
                                },
                                replace: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return (0, p.routeTo)({
                                        name: t,
                                        params: e,
                                        type: "redirect"
                                    });
                                }
                            },
                            $setInterval: function(t, e) {
                                return o.default.prototype.$mpInterval = o.default.prototype.$mpInterval || [], 
                                o.default.prototype.$mpInterval.push({
                                    path: wx.getCurrentPath(),
                                    id: setInterval(t, e)
                                }), o.default.prototype.$mpInterval[o.default.prototype.$mpInterval.length - 1].id;
                            },
                            $format: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd";
                                return t ? new Date(t).format(e) : "";
                            },
                            $tCaptcha: {
                                verify: function(n) {
                                    return new Promise(function() {
                                        var o = b(r.default.mark(function o(i) {
                                            var a, u, l, c;
                                            return r.default.wrap(function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                  case 0:
                                                    if (!((a = e.api._find_child_by_identifier_("t-captcha")) && n && n.ticket_id)) {
                                                        r.next = 8;
                                                        break;
                                                    }
                                                    return u = "uat1" == t.getStorageSync("server_env") || "formal" == t.getStorageSync("server_env"), 
                                                    l = u ? "196633984" : "195325109", r.next = 6, a.verify(m({}, n, {
                                                        appId: l
                                                    }));

                                                  case 6:
                                                    c = r.sent, i(!!c);

                                                  case 8:
                                                    i(!1);

                                                  case 9:
                                                  case "end":
                                                    return r.stop();
                                                }
                                            }, o);
                                        }));
                                        return function(t) {
                                            return o.apply(this, arguments);
                                        };
                                    }());
                                }
                            },
                            $toast: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.type, o = void 0 === r ? "none" : r, i = n.duration, a = void 0 === i ? 1500 : i;
                                if (!/^(success|error|loading|none)$/.test(o) && o) wx.showToast({
                                    title: t,
                                    image: o,
                                    duration: a,
                                    mask: !0
                                }); else {
                                    var u = o || "none";
                                    if ("none" == u && e.api._find_child_by_identifier_("toast")) return void f.default.commit("toast/switch_loading", t);
                                    wx.showToast({
                                        title: t,
                                        icon: u,
                                        duration: a,
                                        mask: !0
                                    });
                                }
                            },
                            $dialog: {
                                alert: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.title, r = void 0 === n ? "" : n, o = e.confirmText, i = void 0 === o ? "确定" : o, a = e.confirmColor, u = void 0 === a ? "#333" : a;
                                    return new Promise(function(e) {
                                        return wx.showModal({
                                            content: t,
                                            title: r,
                                            confirmText: i,
                                            confirmColor: u,
                                            showCancel: !1,
                                            success: function(t) {
                                                return e(t.confirm);
                                            }
                                        });
                                    });
                                },
                                confirm: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.title, r = void 0 === n ? "" : n, o = e.cancelText, i = void 0 === o ? "取消" : o, a = e.cancelColor, u = void 0 === a ? "#333" : a, l = e.confirmText, c = void 0 === l ? "确定" : l, s = e.confirmColor, d = void 0 === s ? "#576B95" : s;
                                    return new Promise(function(e) {
                                        return wx.showModal({
                                            content: t,
                                            title: r,
                                            cancelText: i,
                                            cancelColor: u,
                                            confirmText: c,
                                            confirmColor: d,
                                            success: function(t) {
                                                return e(t.confirm);
                                            }
                                        });
                                    });
                                }
                            },
                            $playVideo: function(t) {
                                var n = e.api._find_child_by_identifier_("video");
                                n && n.play(t);
                            },
                            $map: {
                                _curr_path_: null,
                                from: function() {
                                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, o = function() {
                                        var o = b(r.default.mark(function o() {
                                            var i, a, u, l, c, s, d = arguments;
                                            return r.default.wrap(function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                  case 0:
                                                    return i = d.length > 0 && void 0 !== d[0] ? d[0] : null, r.next = 3, t.getStorageSync("testLocation");

                                                  case 3:
                                                    if (a = r.sent, u = {
                                                        latitude: (a || {}).latitude || ((a || {}).data || {}).latitude,
                                                        longitude: (a || {}).longitude || ((a || {}).data || {}).longitude
                                                    }, l = null, c = null, s = null, !e.api.$map._curr_path_) {
                                                        r.next = 10;
                                                        break;
                                                    }
                                                    return r.abrupt("return");

                                                  case 10:
                                                    if (e.api.$map._curr_path_ = wx.getCurrentPath(), !(e.isInPolygon > 0)) {
                                                        r.next = 18;
                                                        break;
                                                    }
                                                    if (s = i, (c = n || u || null) && c.latitude && c.longitude) {
                                                        r.next = 16;
                                                        break;
                                                    }
                                                    return r.abrupt("return");

                                                  case 16:
                                                    r.next = 20;
                                                    break;

                                                  case 18:
                                                    c = null, s = {
                                                        latitude: i.latitude || u.latitude || null,
                                                        longitude: i.longitude || u.longitude || null,
                                                        pic: i.pic || "",
                                                        title: i.title || "",
                                                        type: i.type || ""
                                                    };

                                                  case 20:
                                                    if (s && s.latitude && s.longitude) {
                                                        r.next = 22;
                                                        break;
                                                    }
                                                    return r.abrupt("return");

                                                  case 22:
                                                    s.pic, s.title, s.type, (0, p.routeTo)({
                                                        name: "walkline",
                                                        params: {}
                                                    }), l = setInterval(function() {
                                                        var t = wx.getCurrentPage();
                                                        if (t.route.indexOf(e.api.$map._curr_path_) < 0) {
                                                            clearInterval(l), e.api.$map._curr_path_ = null;
                                                            var n = Date.now();
                                                            l = setInterval(function() {
                                                                t.route.indexOf("/walkline/walkline") >= 0 && t.data.pageReady && (clearInterval(l), 
                                                                t.$vm.update(c, s)), Date.now() - n > 3e3 && clearInterval(l);
                                                            }, 10);
                                                        }
                                                    }, 10);

                                                  case 27:
                                                  case "end":
                                                    return r.stop();
                                                }
                                            }, o);
                                        }));
                                        return function() {
                                            return o.apply(this, arguments);
                                        };
                                    }();
                                    return {
                                        to: o
                                    };
                                },
                                to: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                    return e.api.$map.from(null).to(t);
                                }
                            },
                            $indicator: {
                                show: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.status, r = void 0 === n ? "INDICATOR_SUCCESS" : n, o = t.type, i = void 0 === o ? "" : o, a = t.useWhiteMask, u = void 0 === a || a, l = t.useCustomNavigationBar, c = void 0 === l || l, s = t.isHome, d = void 0 !== s && s, f = t.text, p = void 0 === f ? "" : f, v = t.buttonText, g = void 0 === v ? "" : v, m = e.api._find_child_by_identifier_("indicator");
                                    m && m.handleStatusChange({
                                        type: i,
                                        useWhiteMask: u,
                                        useCustomNavigationBar: c,
                                        isHome: d,
                                        status: r,
                                        text: p,
                                        buttonText: g
                                    });
                                },
                                loading: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, r = void 0 === n ? "" : n, o = t.useCustomNavigationBar, i = void 0 === o || o, a = t.isHome, u = void 0 !== a && a, l = t.text, c = void 0 === l ? "" : l;
                                    return e.api.$indicator.show({
                                        type: r,
                                        useWhiteMask: !0,
                                        useCustomNavigationBar: i,
                                        isHome: u,
                                        text: c,
                                        status: "INDICATOR_LOADING"
                                    });
                                },
                                useLoading: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, r = void 0 === n ? "" : n, o = t.useCustomNavigationBar, i = void 0 === o || o, a = t.isHome, u = void 0 !== a && a, l = t.text, c = void 0 === l ? "" : l;
                                    return e.api.$indicator.show({
                                        type: r,
                                        useWhiteMask: !1,
                                        useCustomNavigationBar: i,
                                        isHome: u,
                                        text: c,
                                        status: "INDICATOR_LOADING"
                                    });
                                },
                                error: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, r = void 0 === n ? "" : n, o = t.useCustomNavigationBar, i = void 0 === o || o, a = t.isHome, u = void 0 !== a && a, l = t.text, c = void 0 === l ? "" : l, s = t.buttonText, d = void 0 === s ? "" : s;
                                    return e.api.$indicator.show({
                                        type: r,
                                        useWhiteMask: !0,
                                        useCustomNavigationBar: i,
                                        isHome: u,
                                        text: c,
                                        buttonText: d,
                                        status: "INDICATOR_ERROR"
                                    });
                                },
                                useError: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, r = void 0 === n ? "" : n, o = t.useCustomNavigationBar, i = void 0 === o || o, a = t.isHome, u = void 0 !== a && a, l = t.text, c = void 0 === l ? "" : l, s = t.buttonText, d = void 0 === s ? "" : s;
                                    return e.api.$indicator.show({
                                        type: r,
                                        useWhiteMask: !1,
                                        useCustomNavigationBar: i,
                                        isHome: u,
                                        text: c,
                                        buttonText: d,
                                        status: "INDICATOR_ERROR"
                                    });
                                },
                                preview: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, r = void 0 === n ? "" : n, o = t.useCustomNavigationBar, i = void 0 === o || o, a = t.isHome, u = void 0 !== a && a, l = t.text, c = void 0 === l ? "" : l, s = t.buttonText, d = void 0 === s ? "" : s;
                                    return e.api.$indicator.show({
                                        type: r,
                                        useWhiteMask: !0,
                                        useCustomNavigationBar: i,
                                        isHome: u,
                                        text: c,
                                        buttonText: d,
                                        status: "INDICATOR_ERROR_PREVIEW"
                                    });
                                },
                                usePreview: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, r = void 0 === n ? "" : n, o = t.useCustomNavigationBar, i = void 0 === o || o, a = t.isHome, u = void 0 !== a && a, l = t.text, c = void 0 === l ? "" : l, s = t.buttonText, d = void 0 === s ? "" : s;
                                    return e.api.$indicator.show({
                                        type: r,
                                        useWhiteMask: !1,
                                        useCustomNavigationBar: i,
                                        isHome: u,
                                        text: c,
                                        buttonText: d,
                                        status: "INDICATOR_ERROR_PREVIEW"
                                    });
                                },
                                hide: function() {
                                    return e.api.$indicator.show({
                                        status: "INDICATOR_SUCCESS"
                                    });
                                },
                                close: function() {
                                    return e.api.$indicator.hide();
                                }
                            },
                            $request: function(t) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "get", u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                                return i ? i["$" + a](t, r, o, u).then(function(t) {
                                    return m({}, t, {
                                        res: {
                                            data: t
                                        }
                                    });
                                }).catch(function(t) {
                                    return {
                                        err: t
                                    };
                                }) : Promise.resolve().then(n.t.bind(null, "b775", 7)).then(function(n) {
                                    return i = n.default, e.api.$request(t, r, o, a, u);
                                });
                            },
                            $get: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                return e.api.$request(t, n, r, "get", o);
                            },
                            $post: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                return e.api.$request(t, n, r, "post", o);
                            }
                        }
                    };
                },
                computed: m({}, (0, i.mapState)([ "token" ]), {}, (0, i.mapGetters)([ "isInPolygon", "isInPolygonDesc" ])),
                created: function() {
                    var t = this;
                    if ("page" == this.mpType) {
                        wx.getLoadOptions = wx.getLoadOptionsSync = function() {
                            return t.api.$route.query;
                        }, wx.getCurrentPages = getCurrentPages, wx.getCurrentPage = function() {
                            var t = getCurrentPages();
                            return t[t.length - 1];
                        }, wx.getCurrentPath = wx.getCurrentPathSync = function() {
                            var t = getCurrentPages();
                            return t[t.length - 1].route;
                        }, [ "success", "error", "loading" ].forEach(function(e) {
                            t.api.$toast[e] = function(n) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = r.duration, i = void 0 === o ? 1500 : o;
                                return t.api.$toast(n, {
                                    type: e,
                                    duration: i
                                });
                            };
                        });
                        var e = wx.getCurrentPages().map(function(t) {
                            return t.route;
                        });
                        o.default.prototype.$mpInterval = (o.default.prototype.$mpInterval || []).filter(function(t) {
                            return !!e.find(function(e) {
                                return e == t.path;
                            }) || (clearInterval(t.id), !1);
                        }), this.api.$route.path = wx.getCurrentPath(), this.api.$route.fullPath = ("/" + this.api.$route.path).replace(/^\/+/, "/"), 
                        this.api.$route.query = {};
                    }
                },
                onLoad: function(e) {
                    this.api.$route.query = JSON.parse(JSON.stringify(m({}, e || {})));
                    var n = t.$globalData.systemInfo;
                    this.ipxClass = n.ipxClass, this.platform = n.platform, this.h5Class = "h5" == t.$platform ? "h5Class" : "", 
                    this.baseUrl = (0, l.getBaseUrl)(), f.default.dispatch("initFakeLogin"), f.default.dispatch("initBindLogin"), 
                    u.default.useLogger("main").log("onLoad!!!! options => ", e, this);
                }
            }), e(new o.default(d.default)).$mount();
        }).call(this, n("543d").default, n("543d").createApp);
    },
    "73b9": function(t, e, n) {},
    a618: function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    e4a4: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = d(n("4738")), o = d(n("8352")), i = d(n("b775")), a = n("2f62"), u = n("b2cb"), l = d(n("823b")), c = n("f1b28"), s = d(n("4f16"));
            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function p(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var v = requirePlugin("universal-map"), g = l.default.useLogger("App");
            var m = {
                globalData: {
                    mallAdStatus: !0,
                    listAdStatus: !0,
                    orderDetailAdStatus: !0
                },
                methods: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(n), !0).forEach(function(e) {
                            p(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }({}, (0, a.mapActions)([ "getLocation", "getubrPolygon", "getcityAvenueBorder", "getwaitingBorder" ]), {}, (0, 
                a.mapState)({
                    isInUbrPolygon: function(t) {
                        return t.location.isInUbrPolygon;
                    },
                    isUbrOutdoorPolygon: function(t) {
                        return t.location.isUbrOutdoorPolygon;
                    }
                })),
                onLaunch: function(e) {
                    var n = this;
                    r.default.App.onLaunch(e);
                    var a = t.getSystemInfoSync();
                    a = function() {
                        var e = t.getSystemInfoSync(), n = e.model.toUpperCase(), r = e.system.toLowerCase();
                        return /(IPHONE X|IPHONE XS|IPHONE 1)/.test(n) ? (e.isiPhoneX = !0, e.ipxClass = "page-iphonex") : e.isiPhoneX = !1, 
                        -1 !== r.indexOf("ios") && (e.platform = "ios"), e;
                    }(), (a = (0, c.setMenuButton)(a)).ratio = a.windowWidth / 750;
                    var l = a, d = l.menuButton.bottom, f = l.ratio, p = ("0" + (new Date().getMonth() + 1)).slice(-2), m = ("0" + new Date().getDate()).slice(-2);
                    a.frontImageHeight = (d + 10) / f, a.nowDate = "".concat(p, "-").concat(m), t.$env = "production", 
                    t.$globalData = {
                        systemInfo: a,
                        launchTime: new Date().getTime(),
                        key: {}
                    }, t.TencentAdReport = o.default, g.log("onLaunch", t.$globalData, e), o.default.onLaunch(e), 
                    setTimeout(function() {
                        a.tdweapp = r.default, getApp().TDSDK = r.default;
                    }, 100), t.$globalData.outdoorPlugin = v, v.init({
                        baseUrl: (0, u.getBaseUrl)(),
                        systemInfo: a
                    }), v.setProVersion(s.default.version), v.setLightMapLayerId("61e94cfe8623"), v.setDarkMapLayerId("61e951693464"), 
                    i.default.$get("/common/config", {}, {}).then(function(t) {
                        n.getubrPolygon(t.parkBorder), n.getcityAvenueBorder(t.cityAvenueBorder), n.getwaitingBorder(t.waitingBorder), 
                        n.getLocation(!0), v.setBounds([ t.parkBorder ]);
                    });
                    var h = t.getStorageSync("nowRelease"), y = h && "S5" != h ? "R1" : "";
                    v.setProVersion(y), t.getStorage({
                        key: "testLocation",
                        success: function(t) {
                            t.data.latitude && v.setLocation({
                                latitude: t.data.latitude,
                                longitude: t.data.longitude
                            });
                        }
                    });
                },
                onShow: function(t) {
                    r.default.App.onShow(t), o.default.onShow(t);
                },
                onHide: function() {
                    r.default.App.onHide(), g.log("App Hide");
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    }
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);