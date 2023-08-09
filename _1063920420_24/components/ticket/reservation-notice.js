(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ticket/reservation-notice" ], {
    2493: function(e, t, n) {},
    a973: function(e, t, n) {
        n.r(t);
        var o = n("ed1f2"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    },
    be82: function(e, t, n) {
        var o = n("2493");
        n.n(o).a;
    },
    d18e: function(e, t, n) {
        n.r(t);
        var o = n("f12a"), a = n("a973");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("be82");
        var i = n("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, "0b245ba6", null, !1, o.a, void 0);
        t.default = r.exports;
    },
    ed1f2: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("823b")), a = n("2d48"), c = n("7abd"), i = (r(n("5ca6")), n("c4ab"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var l = (o.default.useLogger("home-scenic"), {
                components: {
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    noticeTitle: {
                        type: String,
                        default: "预订须知"
                    },
                    showNoticeModel: {
                        type: Boolean,
                        default: !1
                    },
                    noticeNew: {
                        type: Boolean,
                        default: !1
                    },
                    orderNotice: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        isiPhoneX: "",
                        scrollTopHeight: 0
                    };
                },
                computed: {
                    calendarStyle: function() {
                        return {
                            maxHeight: "".concat((0, i.getMaxHeight)() - (0, i.getBottomHeight)() - 45 - 26, "px")
                        };
                    }
                },
                created: function() {
                    var t = e.$globalData.systemInfo;
                    this.isiPhoneX = t.isiPhoneX;
                },
                mounted: function() {},
                methods: {
                    strTransformArray: function(e) {
                        return (0, c.strTransformArray)(e);
                    },
                    callUrl: function(e) {
                        this.onClickCancel();
                        var t = e.currentTarget.dataset.value;
                        (0, a.routeTo)({
                            name: "h5-webview",
                            params: {
                                url: encodeURIComponent(t)
                            }
                        });
                    },
                    copyEmail: function(t) {
                        var n = t.currentTarget.dataset.value, o = this;
                        e.setClipboardData({
                            data: n,
                            success: function() {
                                e.hideToast(), o.$loading("复制成功");
                            },
                            fail: function() {
                                e.hideToast(), o.$loading("复制失败");
                            }
                        });
                    },
                    callPhone: function(e) {
                        this.onClickCancel();
                    },
                    onClickCancel: function() {
                        var e = this;
                        this.$emit("clickCancel"), setTimeout(function() {
                            e.goToBottom();
                        }, 500);
                    },
                    onClickSure: function() {
                        this.$emit("clickSure"), this.goToBottom();
                    },
                    clean: function() {},
                    goToBottom: function() {
                        var e = this, t = wx.createSelectorQuery().in(this);
                        t.select(".l-detail-box").boundingClientRect(), t.exec(function(t) {
                            e.scrollTopHeight = Math.random();
                        });
                    }
                }
            });
            t.default = l;
        }).call(this, n("543d").default);
    },
    f12a: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.noticeNew ? e.__get_style([ e.calendarStyle ]) : null), n = e.noticeNew ? null : e.__get_style([ e.calendarStyle ]);
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    s1: n
                }
            });
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ticket/reservation-notice-create-component", {
    "components/ticket/reservation-notice-create-component": function(e, t, n) {
        n("543d").createComponent(n("d18e"));
    }
}, [ [ "components/ticket/reservation-notice-create-component" ] ] ]);