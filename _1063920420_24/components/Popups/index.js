(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Popups/index" ], {
    "09ac": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "Popups",
            components: {
                Mask: function() {
                    e.e("components/Popups/Mask").then(function() {
                        return resolve(e("003c"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                isTapClose: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: "协议更新通知"
                },
                btns: {
                    type: Array,
                    default: function() {
                        return [ {
                            text: "暂不使用",
                            style: {
                                fontSize: "32rpx",
                                fontFamily: "PingFangSC-Medium, PingFang SC",
                                fontWeight: 500,
                                color: "#333333"
                            }
                        }, {
                            text: "同意",
                            style: {
                                fontSize: "32rpx",
                                fontFamily: "PingFangSC-Medium, PingFang SC",
                                fontWeight: 500,
                                color: "#0368D9"
                            }
                        } ];
                    }
                }
            },
            data: function() {
                return {
                    isShow: !0
                };
            },
            watch: {
                show: function(n) {
                    this.isShow = n;
                },
                isShow: function(n) {
                    n || this.close();
                }
            },
            methods: {
                clean: function() {
                    return !1;
                },
                close: function() {
                    this.$emit("update:show", !1);
                },
                onTap: function(n) {
                    var t = n.target.dataset.index;
                    this.$emit("onClick", {
                        index: t,
                        text: this.btns[t].text
                    });
                }
            }
        };
        t.default = o;
    },
    6885: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this, t = (n.$createElement, n._self._c, n.show ? n.__map(n.btns, function(t, e) {
                return {
                    $orig: n.__get_orig(t),
                    s0: n.__get_style([ t.style ])
                };
            }) : null);
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, a = [];
    },
    "718e": function(n, t, e) {
        e.r(t);
        var o = e("6885"), a = e("f585");
        for (var i in a) "default" !== i && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(i);
        e("d964");
        var c = e("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, "c96c8580", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    afd5: function(n, t, e) {},
    d964: function(n, t, e) {
        var o = e("afd5");
        e.n(o).a;
    },
    f585: function(n, t, e) {
        e.r(t);
        var o = e("09ac"), a = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Popups/index-create-component", {
    "components/Popups/index-create-component": function(n, t, e) {
        e("543d").createComponent(e("718e"));
    }
}, [ [ "components/Popups/index-create-component" ] ] ]);