(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/home-like" ], {
    "05c6": function(e, t, a) {},
    "0dbb": function(e, t, a) {
        a.r(t);
        var i = a("af7e"), l = a("5e5b");
        for (var r in l) "default" !== r && function(e) {
            a.d(t, e, function() {
                return l[e];
            });
        }(r);
        a("f431b");
        var n = a("f0c5"), o = Object(n.a)(l.default, i.b, i.c, !1, null, "31aa1ac2", null, !1, i.a, void 0);
        t.default = o.exports;
    },
    "5e5b": function(e, t, a) {
        a.r(t);
        var i = a("dc83"), l = a.n(i);
        for (var r in i) "default" !== r && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = l.a;
    },
    af7e: function(e, t, a) {
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return l;
        }), a.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.title ? e._f("globalTitleFilter")(e.title) : null), a = e.__map(e.listData, function(t, a) {
                var i = e.__get_orig(t), l = "article" == t.material_type ? e.getBg(t) : null, r = "article" != t.material_type && "hotel" == t.material_type && t.label && t.label[0] ? e._f("globalTitleFilter")(t.label[0]) : null, n = "article" != t.material_type && "hotel" == t.material_type && t.label && t.label[1] ? e._f("globalTitleFilter")(t.label[1]) : null, o = "article" == t.material_type || "hotel" != t.material_type || !e.isUbrOutdoorPolygon || t.distance < 1e3 ? null : parseInt(t.distance / 100), c = "article" != t.material_type && "hotel" != t.material_type && "scenic" == t.material_type && t.subtitle ? e._f("globalTitleFilter")(t.subtitle) : null, m = "article" != t.material_type && "hotel" != t.material_type && "scenic" == t.material_type && t.custom_label ? e._f("globalTitleFilter")(t.custom_label) : null, p = "article" == t.material_type || "hotel" == t.material_type || "scenic" != t.material_type || !e.isUbrOutdoorPolygon || t.distance < 1e3 ? null : parseInt(t.distance / 100), u = "article" != t.material_type && "hotel" != t.material_type && "scenic" != t.material_type && "restaurant" == t.material_type ? Object.prototype.toString.call(t.cuisine) : null;
                return {
                    $orig: i,
                    m0: l,
                    f1: r,
                    f2: n,
                    m1: o,
                    f3: c,
                    f4: m,
                    m2: p,
                    g0: u,
                    f5: "article" != t.material_type && "hotel" != t.material_type && "scenic" != t.material_type && "restaurant" == t.material_type && t.cuisine && "[object String]" === u ? e._f("globalTitleFilter")(t.cuisine) : null,
                    f6: "article" != t.material_type && "hotel" != t.material_type && "scenic" != t.material_type && "restaurant" == t.material_type && t.cuisine && t.label && t.label[0] ? e._f("globalTitleFilter")(t.label[0]) : null,
                    f7: "article" == t.material_type || "hotel" == t.material_type || "scenic" == t.material_type || "restaurant" != t.material_type || t.cuisine ? null : e._f("globalTitleFilter")(t.label[0]),
                    m3: "article" == t.material_type || "hotel" == t.material_type || "scenic" == t.material_type || "restaurant" != t.material_type || !e.isUbrOutdoorPolygon || t.distance < 1e3 ? null : parseInt(t.distance / 100),
                    m4: "article" == t.material_type || "hotel" == t.material_type || "scenic" == t.material_type || "restaurant" == t.material_type || "activity" != t.material_type || !e.isUbrOutdoorPolygon || t.distance < 1e3 ? null : parseInt(t.distance / 100),
                    f8: "article" != t.material_type && "hotel" != t.material_type && "scenic" != t.material_type && "restaurant" != t.material_type && "activity" != t.material_type && "shop" == t.material_type && t.label[0] ? e._f("globalTitleFilter")(t.label[0]) : null,
                    f9: "article" != t.material_type && "hotel" != t.material_type && "scenic" != t.material_type && "restaurant" != t.material_type && "activity" != t.material_type && "shop" == t.material_type && t.label[1] ? e._f("globalTitleFilter")(t.label[1]) : null,
                    m5: "article" == t.material_type || "hotel" == t.material_type || "scenic" == t.material_type || "restaurant" == t.material_type || "activity" == t.material_type || "shop" != t.material_type || !e.isUbrOutdoorPolygon || t.distance < 1e3 ? null : parseInt(t.distance / 100),
                    m6: "article" == t.material_type || "hotel" == t.material_type || "scenic" == t.material_type || "restaurant" == t.material_type || "activity" == t.material_type || "shop" == t.material_type || "perform" != t.material_type || !e.isUbrOutdoorPolygon || t.distance < 1e3 ? null : parseInt(t.distance / 100),
                    f10: "article" != t.material_type && "hotel" != t.material_type && "scenic" != t.material_type && "restaurant" != t.material_type && "activity" != t.material_type && "shop" != t.material_type && "perform" != t.material_type && "package" != t.material_type && "combination" == t.material_type ? e._f("globalTitleFilter")(t.sub_title) : null,
                    g1: "seasonal_ticket" != t.material_type && "annual_ticket" != t.material_type && "MultiplePark" != t.material_type || "seasonal_ticket" != t.material_type && "annual_ticket" != t.material_type && "MultiplePark" != t.material_type ? null : t.theme_color.join(","),
                    m7: "vip_ticket" == t.material_type ? e.reduceSize(t.ticket_name) : null
                };
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    f0: t,
                    l0: a
                }
            });
        }, l = [];
    },
    dc83: function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a("2f62"), l = m(a("823b")), r = m(a("b775")), n = a("2d48"), o = a("aa3e"), c = m(a("4738"));
            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function p(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), a.push.apply(a, i);
                }
                return a;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(a), !0).forEach(function(t) {
                        _(e, t, a[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return e;
            }
            function _(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            var s = (l.default.useLogger("home-scenic"), {
                components: {
                    OmImage: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/om-image/index") ]).then(function() {
                            return resolve(a("2f8a"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CircleBox: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/circle-box/index") ]).then(function() {
                            return resolve(a("a65e"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    GiftCard: function() {
                        a.e("components/ui/gift-card").then(function() {
                            return resolve(a("8255"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    filterText: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/ui/filterText") ]).then(function() {
                            return resolve(a("6af9"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {
                    listData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    showMore: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isRelease1: e.getStorageSync("nowRelease"),
                        showNoticeModel: !1,
                        booking_notice: [],
                        routeName: "",
                        routeId: "",
                        hotelCollect: !1,
                        scenicCollect: !1,
                        restaurantCollect: !1,
                        performCollect: !1,
                        favourited: 0,
                        assetsImage: o.assetsImage.index
                    };
                },
                computed: u({}, (0, i.mapState)({
                    token: function(e) {
                        return e.bindPhone.token;
                    },
                    isUbrOutdoorPolygon: function(e) {
                        return e.location.isUbrOutdoorPolygon;
                    }
                })),
                mounted: function() {
                    var e = this;
                    setTimeout(function() {
                        e.listData.length > 0 && e.listData.forEach(function(e, t) {
                            c.default.Event.event({
                                id: "show_home_cdp_recommend_list",
                                label: "",
                                params: {
                                    title: e.title,
                                    material_type: e.material_type,
                                    material_id: e.material_id,
                                    index: t,
                                    land: e.area
                                }
                            });
                        });
                    }, 500);
                },
                methods: u({}, (0, i.mapActions)([ "updateFavourited" ]), {
                    getBg: function(e) {
                        return e.cover_image_theme_color && e.cover_image_theme_color.length > 0 ? "linear-gradient(180deg, rgba(".concat(e.cover_image_theme_color[0], ", ").concat(e.cover_image_theme_color[1], ", ").concat(e.cover_image_theme_color[2], ", 0) 0%, rgba(").concat(e.cover_image_theme_color[0], ", ").concat(e.cover_image_theme_color[1], ", ").concat(e.cover_image_theme_color[2], ", 0.8) 100%);") : "linear-gradient(180deg, rgba(2, 7, 9, 0) 0%, rgba(6, 9, 16, 0.8) 100%);";
                    },
                    goDetail: function() {
                        (0, n.routeTo)({
                            name: "gift-list",
                            params: {}
                        });
                    },
                    onCollect: function(e, t, a) {
                        var i = this, l = {
                            type: e,
                            id: t,
                            status: !a.favourited
                        };
                        r.default.$get("/user/collect", l, {
                            header: {
                                MINIAPPTOKEN: this.token
                            }
                        }).then(function(e) {
                            e.errorcode && 20001 === e.errorcode ? (0, n.routeTo)({
                                name: "loginNew",
                                params: {}
                            }) : (i.updateFavourited({
                                id: t,
                                favourited: !a.favourited
                            }), i.$loading(e.data), a.favourited = !a.favourited, 0 === i.favourited && (i.$emit("putCollect"), 
                            i.favourited = 1));
                        });
                    },
                    goToDetail: function(e, t) {
                        var a = "", i = "", l = e.material_id;
                        "ticket" !== e.material_type && (this.homeLike(t), "hotel" === e.material_type ? i = "hotel-detail" : "restaurant" === e.material_type ? i = "restaurant-detail" : "perform" === e.material_type ? i = "show-detail" : "scenic" === e.material_type ? i = "scenic-detail" : "seasonal_ticket" === e.material_type || "annual_ticket" === e.material_type ? i = "seasoncarddetail" : "MultiplePark" === e.material_type ? (i = "multiple-ticket-detail", 
                        a = e.ticket_type) : "article" === e.material_type ? (i = "article-detail", c.default.Event.event({
                            id: "custom_ariticle_or_news",
                            label: "",
                            params: {
                                title: e.title,
                                source: "home_cdp_recommend"
                            }
                        })) : "vip_ticket" === e.material_type ? i = "vipmodule-detail" : "coupon" === e.material_type ? i = "CouponDetail" : "activity" === e.material_type ? i = "activity-detail" : "shop" === e.material_type ? i = "store-detail" : "combination" === e.material_type && (i = "combination-detail"), 
                        a ? (0, n.routeTo)({
                            name: i,
                            params: {
                                id: l,
                                isMultiplePark: 0,
                                type: a
                            }
                        }) : (0, n.routeTo)({
                            name: i,
                            params: {
                                id: l,
                                isMultiplePark: 0
                            }
                        }));
                    },
                    goPackageDetail: function(e, t) {
                        (0, n.routeTo)({
                            name: "package-detail",
                            params: {
                                id: e,
                                type: t
                            }
                        });
                    },
                    goBuyTicket: function(e, t, a) {
                        var i = "", l = e.material_id;
                        "ticket" === e.material_type ? i = "entranceticketdetail" : "quick_ticket" === e.material_type ? i = "expressticketdetail" : "single_express" === e.material_type && (i = "express-singleticketdetail"), 
                        c.default.Event.event({
                            id: "click_home_cdp_recommend_list",
                            label: "",
                            params: {
                                title: e.title,
                                material_type: e.cdp_type_name,
                                material_id: e.material_id,
                                index: a,
                                land: e.area
                            }
                        }), c.default.Event.event({
                            id: "show_home_cdp_recommend_list",
                            label: "",
                            params: {
                                title: e.title,
                                material_type: e.cdp_type_name,
                                material_id: e.material_id,
                                index: a,
                                land: e.area
                            }
                        }), (0, n.routeTo)({
                            name: i,
                            params: {
                                id: l
                            }
                        });
                    },
                    homeLike: function(e) {
                        c.default.Event.event({
                            id: "click_home_cdp_recommend_list",
                            label: "",
                            params: {
                                title: this.listData[e].title,
                                material_type: this.listData[e].cdp_type_name,
                                material_id: this.listData[e].material_id,
                                index: e,
                                land: this.listData[e].area,
                                is_birthday_coupon: 1 === this.listData[e].is_birthday_coupon ? "是" : "否"
                            }
                        });
                    },
                    checkNotice: function(e) {
                        this.$emit("checkNotice", e);
                    },
                    reduceSize: function(e) {
                        return e.length <= 10 ? "" : 11 === e.length ? "title1" : 12 === e.length ? "title2" : "title3";
                    }
                })
            });
            t.default = s;
        }).call(this, a("543d").default);
    },
    f431b: function(e, t, a) {
        var i = a("05c6");
        a.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/home-like-create-component", {
    "pages/home/home-like-create-component": function(e, t, a) {
        a("543d").createComponent(a("0dbb"));
    }
}, [ [ "pages/home/home-like-create-component" ] ] ]);