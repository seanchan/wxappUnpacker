require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/like/index" ], {
    "0443": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("2d48"), i = n("aa3e"), o = s(n("b775")), r = s(n("4738")), c = n("2f62");
            function s(e) {
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
                        p(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var m = {
                components: {
                    OmImage: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/om-image/index") ]).then(function() {
                            return resolve(n("2f8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    buyType: {
                        type: String,
                        default: ""
                    },
                    orderId: {
                        type: String,
                        default: ""
                    },
                    productid: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        list: [],
                        colorStyle: {
                            scenic: "#F08400",
                            perform: "#F08400",
                            hotel: "#03A678",
                            activity: "#FF3AA5",
                            restaurant: "#F08400"
                        },
                        key: "",
                        assetsImage: i.assetsImage.coupon
                    };
                },
                computed: u({}, (0, c.mapState)({
                    token: function(e) {
                        return e.bindPhone.token;
                    }
                }), {
                    titleClass: function() {
                        return this.list && this.list[0] && "coupon_theme" === this.list[0].material_type ? this.getTextClass(this.list[0].title) : "";
                    }
                }),
                mounted: function() {
                    this.getRecommend();
                },
                methods: {
                    getRecommend: function() {
                        var e = this;
                        o.default.$get("/recommend/pay", {
                            td_id: "",
                            type: this.buyType,
                            exclusion_id: this.productid
                        }, {
                            header: {
                                MINIAPPTOKEN: this.token
                            }
                        }).then(function(t) {
                            e.list = t;
                        }).catch(function(e) {}).finally(function() {
                            e.getReport();
                        });
                    },
                    getReport: function() {
                        var t = e.getStorageSync("bindPhoneUser").ciam_id || "";
                        r.default.Event.event({
                            id: {
                                coupon: "show_coupon_payment_result_recommend",
                                hotel: "show_hotel_pay_success_recommend",
                                ticket: "show_tickets_pay_success_recommend",
                                quick_ticket: "show_expresspasses_pay_success_recommend",
                                single_express: "show_single_express_payment_result_recommend",
                                vip_ticket: "show_viptickets_pay_success_recommend",
                                seasonal_ticket: "show_seasoncard_pay_success_recommend",
                                annual_ticket: "show_annualcard_pay_success_recommend",
                                package: "show_package_pay_success_recommend",
                                MultiplePark: "show_multiple_tickets_pay_success_recommend",
                                gift_coupon: "show_coupon_payment_result_recommend",
                                order_meals_online: "show_pay_sucess_recommend"
                            }[this.buyType],
                            label: "",
                            params: {
                                order_id: this.orderId,
                                order_type: this.list[0].cdp_order_type_name,
                                material_id: this.list[0].material_id,
                                title: this.list[0].ticket_name || this.list[0].title,
                                material_type: this.list[0].cdp_type_name,
                                ciam_uuid: t
                            }
                        });
                    },
                    goPackageDetail: function(e) {
                        var t = {}, n = "";
                        "package" === e.material_type ? (n = "package-detail", t = {
                            id: e.id,
                            type: e.type
                        }) : (n = "combination-detail", t = {
                            id: e.id
                        }), (0, a.routeTo)({
                            name: n,
                            params: t
                        });
                    },
                    formatType: function(e) {
                        return this.list[0].cdp_type_name;
                    },
                    formatTitle: function(e) {
                        return [ "hotel", "coupon_theme", "coupon" ].includes(e.material_type) ? e.title : e.ticket_name;
                    },
                    formatData: function(e) {
                        var t = u({}, e);
                        return t.material_type_ch = this.formatType(e.material_type), t.material_title_ch = this.formatTitle(e), 
                        t;
                    },
                    goToDetail: function(e) {
                        this.$emit("goLikeDetail", this.formatData(e));
                        var t = "", n = e.material_id, i = "";
                        "activity" !== e.material_type && "article" !== e.material_type && ("ticket" === e.material_type ? t = "entranceticketdetail" : "quick_ticket" === e.material_type ? t = "expressticketdetail" : "single_express" === e.material_type ? t = "express-singleticketdetail" : "hotel" === e.material_type ? t = "hotel-detail" : "restaurant" === e.material_type ? t = "restaurant-detail" : "perform" === e.material_type ? t = "show-detail" : "scenic" === e.material_type ? t = "scenic-detail" : "seasonal_ticket" === e.material_type || "annual_ticket" === e.material_type ? t = "seasoncarddetail" : "MultiplePark" === e.material_type ? (t = "multiple-ticket-detail", 
                        i = e.ticket_type) : "coupon" === e.material_type ? t = "CouponDetail" : "coupon_theme" === e.material_type ? t = "gift-list" : "vip_ticket" === e.material_type && (t = "vipmodule-detail"), 
                        i ? (0, a.routeTo)({
                            name: t,
                            params: {
                                id: n,
                                type: i
                            }
                        }) : (0, a.routeTo)({
                            name: t,
                            params: {
                                id: n,
                                isMultiplePark: 0
                            }
                        }));
                    },
                    getThemeBg: function(e) {
                        return e && e.length > 0 ? "linear-gradient(180deg, rgba(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ",0.00) 0%, rgba(").concat(e[0], ",").concat(e[1], ",").concat(e[2], ",1.00) 100%);") : "linear-gradient(180deg, rgba(000,000,000,0.00) 0%, rgba(000,000,000,1.00) 100%)";
                    },
                    coupnBgImage: function(e) {
                        switch (e.type) {
                          case "cash_coupon":
                            return this.assetsImage.couponBack_yellow;

                          case "onsite_voucher":
                            return this.assetsImage.couponBack_orange;

                          case "online_voucher":
                            return this.assetsImage.couponBack_red;

                          default:
                            return this.assetsImage.couponBack_green;
                        }
                    },
                    getTextClass: function(e) {
                        var t = 600;
                        this.list[0].sub_title || (t = 410);
                        var n = this.$options.filters.globalTitleFilter(e), a = this.getStrLength(n);
                        return 32.4 * a < Math.floor(2 * t - 32.4) ? "" : 28.4 * a < Math.floor(2 * t - 28.4) ? "font14" : "font12";
                    },
                    getStrLength: function(e) {
                        for (var t = 0, n = 0, a = e.length; n < a; ++n) {
                            t += e[n].charCodeAt() > 128 ? 1 : .5;
                        }
                        return Math.ceil(t);
                    }
                }
            };
            t.default = m;
        }).call(this, n("543d").default);
    },
    "3f20": function(e, t, n) {
        n.r(t);
        var a = n("0443"), i = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    },
    9085: function(e, t, n) {},
    caa6: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.list, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    m0: 0 === n && "coupon_theme" == t.material_type ? e.getThemeBg(t.recommend_image_theme_color) : null,
                    m1: 0 === n && "coupon" == t.material_type ? e.coupnBgImage(t) : null
                };
            })), a = n("90cc"), i = n("fba4"), o = n("90cc");
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    m2: a,
                    m3: i,
                    m4: o
                }
            });
        }, i = [];
    },
    d241: function(e, t, n) {
        var a = n("9085");
        n.n(a).a;
    },
    e810: function(e, t, n) {
        n.r(t);
        var a = n("caa6"), i = n("3f20");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("d241");
        var r = n("f0c5"), c = Object(r.a)(i.default, a.b, a.c, !1, null, "867efc7a", null, !1, a.a, void 0);
        t.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/like/index-create-component", {
    "components/like/index-create-component": function(e, t, n) {
        n("543d").createComponent(n("e810"));
    }
}, [ [ "components/like/index-create-component" ] ] ]);