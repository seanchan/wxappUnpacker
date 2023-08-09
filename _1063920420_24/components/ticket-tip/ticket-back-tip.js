(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ticket-tip/ticket-back-tip", "components/om-image/index" ], {
    "0bfc": function(e, t, n) {
        n.r(t);
        var i = n("5ed5"), r = n("5016");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("1e7b");
        var o = n("f0c5"), u = Object(o.a)(r.default, i.b, i.c, !1, null, "13d32d56", null, !1, i.a, void 0);
        t.default = u.exports;
    },
    1323: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("5ca6"));
        var r = {
            props: {
                width: {
                    type: Number,
                    default: 0
                },
                height: {
                    type: Number,
                    default: 0
                },
                url: {
                    type: String,
                    default: ""
                },
                end: {
                    type: String,
                    default: ""
                },
                mode: {
                    type: String,
                    default: ""
                },
                alt: {
                    type: String,
                    default: ""
                },
                radius: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    showMore: !0
                };
            },
            computed: {
                BaseImage: function() {
                    return (0, i.default)(this.width, this.height);
                },
                imgClass: function() {
                    var e = this.width, t = this.height;
                    switch (e) {
                      case 375:
                        return 200 === t ? "size375200" : 320 === t ? "size375320" : "size375280";

                      case 345:
                        return 124 === t ? "size345124" : 214 === t ? "size345214" : "size345194";

                      case 335:
                        return 120 === t ? "size335120" : 130 === t ? "size335130" : 140 === t ? "size335140" : 190 === t || 191 === t ? "size335190" : 180 === t ? "size335180" : 200 === t ? "size335200" : 386 === t ? "size335386" : "size335208";

                      case 325:
                        return 175 === t ? "size325175" : "size325157";

                      case 300:
                        return 130 === t ? "size300130" : 98 === t ? "size30098" : "size300170";

                      case 285:
                        return "size285170";

                      case 275:
                        return "size275100";

                      case 185:
                        return "size185185";

                      case 162:
                        return "size162162";

                      case 160:
                        return 214 === t ? "size160214" : "size160120";

                      case 156:
                        return "size156102";

                      case 150:
                        return "size15091";

                      case 148:
                        return "size14898";

                      case 140:
                        return "size140140";

                      case 120:
                        return "size120120";

                      case 80:
                        return "size8080";

                      case 70:
                        return "size7070";

                      case 40:
                        return "size4040";

                      case 41:
                        return "size4141";

                      default:
                        return "size335190";
                    }
                }
            },
            methods: {
                load: function() {
                    this.showMore = !1;
                }
            }
        };
        t.default = r;
    },
    1816: function(e, t, n) {
        var i = n("3925");
        n.n(i).a;
    },
    "1e7b": function(e, t, n) {
        var i = n("ba7d");
        n.n(i).a;
    },
    "2f8a": function(e, t, n) {
        n.r(t);
        var i = n("fcd5"), r = n("aed3");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("1816");
        var o = n("f0c5"), u = Object(o.a)(r.default, i.b, i.c, !1, null, "5ce59bba", null, !1, i.a, void 0);
        t.default = u.exports;
    },
    3925: function(e, t, n) {},
    5016: function(e, t, n) {
        n.r(t);
        var i = n("9822"), r = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = r.a;
    },
    "5ed5": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__get_style([ e.calendarStyle ], {
                padding: "0 40rpx",
                "box-sizing": "border-box"
            })), n = e.isNew ? e.__map(e.content, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    l0: "title3" != t.type && "text" == t.type ? e.__map(t.array, function(t, n) {
                        return {
                            $orig: e.__get_orig(t),
                            f0: "url" === t.type ? e._f("globalTitleFilter")(t.content) : null
                        };
                    }) : null,
                    f1: "url" === t.type ? e._f("globalTitleFilter")(t.content) : null
                };
            }) : null, i = !e.isNew && e.isNewRefund ? e.__map(e.content, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f2: "url" === t.type ? e._f("globalTitleFilter")(t.content) : null
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    l1: n,
                    l2: i
                }
            });
        }, r = [];
    },
    9822: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n("c4ab"), r = u(n("d9f0")), a = n("7abd"), o = n("2d48");
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            u(n("2f8a"));
            var c = {
                components: {
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    isNew: {
                        type: Boolean,
                        default: !1
                    },
                    isNewRefund: {
                        type: Boolean,
                        default: !1
                    },
                    title: {
                        type: String,
                        default: "退改规则"
                    },
                    ruleShow: {
                        type: Boolean,
                        default: !1
                    },
                    content: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    isCoupon: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isiPhoneX: "",
                        nodes: [],
                        replaceObj: {
                            1: "™",
                            2: "®",
                            3: "©",
                            4: [ "<span class='phone-num' style='color: #0368d9'>", "</span>" ],
                            5: [ "<span class='phone-num' style='color: #0368d9'>", "</span>" ],
                            6: [ "<span class='phone-num' style='color: #0368d9'>", "</span>" ]
                        }
                    };
                },
                computed: {
                    calendarStyle: function() {
                        return {
                            maxHeight: "".concat((0, i.getMaxHeight)() - (0, i.getBottomHeight)() - 55 - 26, "px")
                        };
                    }
                },
                watch: {
                    content: {
                        handler: function(e) {},
                        deep: !0
                    }
                },
                created: function() {
                    var t = this;
                    if (this.isCoupon) {
                        var n = "";
                        this.content.forEach(function(e, i) {
                            "text" === e.type && (n += t.findContent(e.content));
                        }), this.nodes = (0, r.default)(n);
                    }
                    var i = e.$globalData.systemInfo;
                    this.isiPhoneX = i.isiPhoneX;
                },
                mounted: function() {},
                methods: {
                    clean: function() {},
                    strTransformArray: function(e) {
                        return (0, a.strTransformArray)(e);
                    },
                    callUrl: function(e) {
                        this.closeRule();
                        var t = e.currentTarget.dataset.value;
                        (0, o.routeTo)({
                            name: "h5-webview",
                            params: {
                                url: encodeURIComponent(t)
                            }
                        });
                    },
                    copyEmail: function(t) {
                        var n = t.currentTarget.dataset.value, i = this;
                        e.setClipboardData({
                            data: n,
                            success: function() {
                                e.hideToast(), i.$loading("复制成功");
                            },
                            fail: function() {
                                e.hideToast(), i.$loading("复制失败");
                            }
                        });
                    },
                    callPhone: function(e) {
                        this.closeRule();
                    },
                    moveHandle: function() {
                        return !1;
                    },
                    closeRule: function() {
                        this.$emit("closeRule");
                    },
                    findContent: function(e) {
                        var t = this;
                        return (e = e.replace(/\r?\n/g, "<br>")).replace(/\{[1-3]\}/g, function(e) {
                            return t.replaceObj[e.slice(1, 2)];
                        }).replace(/\{[0-9]*\}.*?\{[0-9]*\}/g, function(e) {
                            if (!e) return e;
                            var n, i;
                            return 2 === e.indexOf("}") ? (n = e.slice(1, 2), i = e.slice(3, -3)) : (n = e.slice(1, 3), 
                            i = e.slice(4, -4)), 0 === n ? "" : t.replaceObj[n][0] + i + t.replaceObj[n][1];
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d").default);
    },
    aed3: function(e, t, n) {
        n.r(t);
        var i = n("1323"), r = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = r.a;
    },
    ba7d: function(e, t, n) {},
    fcd5: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ticket-tip/ticket-back-tip-create-component", {
    "components/ticket-tip/ticket-back-tip-create-component": function(e, t, n) {
        n("543d").createComponent(n("0bfc"));
    }
}, [ [ "components/ticket-tip/ticket-back-tip-create-component" ] ] ]);