(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ui/reserve-btn" ], {
    1398: function(e, t, n) {
        var r = n("4107");
        n.n(r).a;
    },
    4107: function(e, t, n) {},
    "46f0": function(e, t, n) {
        n.r(t);
        var r = n("855b"), i = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = i.a;
    },
    "855b": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = a(n("a34a")), i = a(n("b775")), o = n("2d48");
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, t, n, r, i, o, a) {
            try {
                var u = e[o](a), s = u.value;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return void n(e);
            }
            u.done ? t(s) : Promise.resolve(s).then(r, i);
        }
        var s = {
            components: {
                Indicator: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/indicator/indicator") ]).then(function() {
                        return resolve(n("e361"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                list: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                info: {
                    type: String,
                    default: ""
                },
                originType: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    indicatorStatus: "INDICATOR_NONE",
                    isClick: !0
                };
            },
            computed: {
                btnName: function() {
                    return 0 === this.list.is_reservation || 1 === this.list.is_reservation ? "预约" : "查看预约";
                }
            },
            methods: {
                goReserve: function() {
                    var e = function(e) {
                        return function() {
                            var t = this, n = arguments;
                            return new Promise(function(r, i) {
                                var o = e.apply(t, n);
                                function a(e) {
                                    u(o, r, i, a, s, "next", e);
                                }
                                function s(e) {
                                    u(o, r, i, a, s, "throw", e);
                                }
                                a(void 0);
                            });
                        };
                    }(r.default.mark(function e() {
                        var t, n, i = this;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.isClick) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return this.isClick = !1, setTimeout(function() {
                                    i.isClick = !0;
                                }, 2e3), e.next = 6, this.getReserveStatus();

                              case 6:
                                if (t = e.sent, !(n = t.errorMessage)) {
                                    e.next = 11;
                                    break;
                                }
                                return this.$loading(n), e.abrupt("return");

                              case 11:
                                0 === this.list.is_reservation || 1 === this.list.is_reservation ? (0, o.routeTo)({
                                    name: "park-reserve-list",
                                    params: {
                                        page_type: 1,
                                        reservation_type: 1
                                    }
                                }) : (0, o.routeTo)({
                                    name: "park-reserve-history",
                                    params: {
                                        order_id: this.list.order_id
                                    }
                                });

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                getReserveStatus: function() {
                    var e = this, t = setTimeout(function() {
                        e.indicatorStatus = "INDICATOR_LOADING";
                    }, 300);
                    return new Promise(function(n, r) {
                        i.default.$get("/v2/land/user_order", {
                            order_id: e.list.order_id
                        }, {}).then(function(e) {
                            n(e);
                        }).catch(function(e) {
                            n(e);
                        }).finally(function() {
                            clearTimeout(t), e.indicatorStatus = "INDICATOR_SUCCESS";
                        });
                    });
                }
            }
        };
        t.default = s;
    },
    e154: function(e, t, n) {
        n.r(t);
        var r = n("eae4"), i = n("46f0");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("1398");
        var a = n("f0c5"), u = Object(a.a)(i.default, r.b, r.c, !1, null, "f4bc8994", null, !1, r.a, void 0);
        t.default = u.exports;
    },
    eae4: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ui/reserve-btn-create-component", {
    "components/ui/reserve-btn-create-component": function(e, t, n) {
        n("543d").createComponent(n("e154"));
    }
}, [ [ "components/ui/reserve-btn-create-component" ] ] ]);