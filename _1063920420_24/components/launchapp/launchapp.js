(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/launchapp/launchapp" ], {
    1222: function(e, t, a) {
        var n = a("30e9");
        a.n(n).a;
    },
    "30e9": function(e, t, a) {},
    "4e1a": function(e, t, a) {
        a.r(t);
        var n = a("5e51"), c = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = c.a;
    },
    "5e51": function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(a("599d"));
            var c = {
                data: function() {
                    return {
                        isLaunch: !1,
                        launchTitle: "",
                        frontImageStyle: "",
                        appName: null
                    };
                },
                computed: {
                    icon: function() {
                        return {
                            baidu: n.default
                        }[this.appName] || null;
                    }
                },
                created: function() {
                    this.updateStyle();
                },
                mounted: function(e) {
                    this.updateTitle(), this.updateStyle();
                },
                methods: {
                    updateStyle: function() {
                        var t = e.$globalData.systemInfo, a = (getCurrentPages().slice(-1)[0] || {}).route;
                        if (a && [ "pages/home/home", "pages/map/map", "pages/mall/mall", "pages/personal/personal" ].indexOf(a) >= 0) t.screenHeight <= 667 ? this.frontImageStyle = "bottom: 228rpx" : this.frontImageStyle = "bottom: 280rpx"; else switch (!0) {
                          case t.screenHeight <= 667:
                            this.frontImageStyle = "bottom: 280rpx";
                            break;

                          case t.isiPhoneX:
                            this.frontImageStyle = "bottom: 468rpx";
                            break;

                          default:
                            this.frontImageStyle = "bottom: 400rpx";
                        }
                        this.frontImageStyle = "bottom: 400rpx";
                    },
                    updateTitle: function() {
                        var e = wx.getLaunchOptionsSync(), t = (getCurrentPages().slice(-1)[0] || {}).route;
                        if (t && [ "pages/home/home", "pages/mall/mall", "sprint4Package/ticket/list", "sprint4Package/vip/vip-list", "sprint8Package/article/detail" ].indexOf(t) >= 0 && 1069 === e.scene) switch (e.referrerInfo.appId) {
                          case "wxca942bbff22e0e51":
                            this.launchTitle = "腾讯视频", this.isLaunch = !0, this.appName = "tencent-video";
                            break;

                          case "wx2fab8a9063c8c6d0":
                            this.launchTitle = "爱奇艺", this.isLaunch = !0, this.appName = "aiqiyi";
                            break;

                          case "wx27a43222a6bf2931":
                            [ "pages/home/home", "pages/mall/mall", "sprint8Package/article/detail" ].indexOf(t) >= 0 && (this.launchTitle = "百度APP", 
                            this.isLaunch = !0, this.appName = "baidu");
                        }
                    },
                    launchAppError: function(e) {},
                    launchAppSuccess: function(e) {}
                }
            };
            t.default = c;
        }).call(this, a("543d").default);
    },
    "9fdb": function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return c;
        }), a.d(t, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    ba2b: function(e, t, a) {
        a.r(t);
        var n = a("9fdb"), c = a("4e1a");
        for (var i in c) "default" !== i && function(e) {
            a.d(t, e, function() {
                return c[e];
            });
        }(i);
        a("1222");
        var o = a("f0c5"), l = Object(o.a)(c.default, n.b, n.c, !1, null, "614af1f6", null, !1, n.a, void 0);
        t.default = l.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/launchapp/launchapp-create-component", {
    "components/launchapp/launchapp-create-component": function(e, t, a) {
        a("543d").createComponent(a("ba2b"));
    }
}, [ [ "components/launchapp/launchapp-create-component" ] ] ]);