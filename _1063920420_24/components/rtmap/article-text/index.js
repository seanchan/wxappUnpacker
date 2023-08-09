(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/rtmap/article-text/index" ], {
    "17c9": function(e, t, a) {
        a.r(t);
        var i = a("6af0"), n = a("5ca1");
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        var r = a("f0c5"), l = Object(r.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = l.exports;
    },
    "2fc6": function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a("2d48"), n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(a("4738"));
            var o = {
                components: {
                    SwiperImgs: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/rtmap/article-text/swiper-imgs") ]).then(function() {
                            return resolve(a("f65a"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    ImgsComponent: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/rtmap/article-text/imgs-component") ]).then(function() {
                            return resolve(a("3d19"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    ThemeCard: function() {
                        a.e("components/rtmap/article-text/theme-card").then(function() {
                            return resolve(a("9b7b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CopuonCard: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/rtmap/article-text/copuon-card") ]).then(function() {
                            return resolve(a("0e4b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    OmImage: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/om-image/index") ]).then(function() {
                            return resolve(a("2f8a"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    filterText: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/ui/filterText") ]).then(function() {
                            return resolve(a("6af9"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CardOne: function() {
                        a.e("components/rtmap/article-text/card-one").then(function() {
                            return resolve(a("227e"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CardTwo: function() {
                        a.e("components/rtmap/article-text/card-two").then(function() {
                            return resolve(a("bb0c"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CardThr: function() {
                        a.e("components/rtmap/article-text/card-thr").then(function() {
                            return resolve(a("4f1b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    DetailTitle: function() {
                        a.e("components/rtmap/article-text/detail-title").then(function() {
                            return resolve(a("ddcf"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    ReservationNotice: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/ticket/reservation-notice") ]).then(function() {
                            return resolve(a("d18e"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    articleId: [ String, Number ],
                    storeTitle: [ String ],
                    articleTypeName: [ String ],
                    detailData: {
                        type: Object,
                        default: function() {}
                    }
                },
                data: function() {
                    return {
                        showNoticeModel: !1,
                        booking_notice: []
                    };
                },
                computed: {
                    content: function() {
                        return (this.list || []).map(function(e) {
                            return 1 == e.meeting_type && (e.page_type = "text1", e.type = "text"), 2 == e.meeting_type && (e.page_type = "text0", 
                            e.type = "text"), 3 == e.meeting_type && (e.page_type = "image", e.type = "image"), 
                            4 == e.meeting_type && (e.page_type = "image_banner", e.type = "image"), 5 == e.meeting_type && (e.page_type = "video", 
                            e.type = "video"), e;
                        });
                    },
                    content_list: function() {
                        return this.content.map(function(e, t, a) {
                            return e.pt = "20rpx", e.pb = "20rpx", "text" == e.type && "text0" == e.page_type && (e.pt = "0rpx"), 
                            "text" == e.type && "text1" == e.page_type && (e.pt = "0rpx"), "text" == e.type && "text2" == e.page_type && (e.pt = "0rpx"), 
                            "text" == e.type && "text3" == e.page_type && (e.pt = "0rpx"), "material" == e.type && "coupon_theme" == e.page_type && (e.pb = "40rpx"), 
                            e;
                        });
                    }
                },
                methods: {
                    clickimgs: function(e, t) {
                        var a = {
                            media_type: e.media_type,
                            media_title: e.title,
                            index: t
                        };
                        n.default.Event.event({
                            id: "click_strategy_detail_slides",
                            label: "",
                            params: a
                        });
                    },
                    onThemeCardClick: function(t) {
                        e.TencentAdReport.send("LANDING_PAGE_CLICK-Voucher");
                    },
                    onCouponClaim: function() {
                        e.TencentAdReport.send("CLAIM_OFFER");
                    },
                    turnResult: function(t) {
                        "annual_ticket" === t.material_type && e.TencentAdReport.send("LANDING_PAGE_CLICK-AP");
                        var a = {
                            title: t.title,
                            material_id: t.material_id,
                            type: this.articleTypeName,
                            article_id: this.detailData.material_id || "",
                            article_title: this.detailData.title || ""
                        };
                        if (n.default.Event.event({
                            id: "click_strategy_detail_link",
                            label: "",
                            params: a
                        }), "story" === t.material_type) {
                            var o = t.story_type;
                            (0, i.routeTo)({
                                name: "story-detail",
                                params: {
                                    id: t.material_id,
                                    storyType: o
                                }
                            });
                        } else if ("shop" === t.material_type) (0, i.routeTo)({
                            name: "store-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("perform" === t.material_type) (0, i.routeTo)({
                            name: "show-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("scenic" === t.material_type) (0, i.routeTo)({
                            name: "scenic-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("article" === t.material_type) (0, i.routeTo)({
                            name: "article-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("vip" === t.material_type) (0, i.routeTo)({
                            name: "vip-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("restroom" === t.material_type) (0, i.routeTo)({
                            name: "washroom-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("activity" === t.material_type) (0, i.routeTo)({
                            name: "activity-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if (t.material_type.includes("service")) (0, i.routeTo)({
                            name: "service-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("route" === t.material_type) (0, i.routeTo)({
                            name: "planning-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("ticket" === t.material_type) (0, i.routeTo)({
                            name: "entranceticketdetail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("seasonal_ticket" === t.material_type) {
                            (0, i.routeTo)({
                                name: "seasoncarddetail",
                                params: {
                                    id: t.material_id,
                                    isMultiplePark: 0
                                }
                            });
                        } else if ("MultiplePark" === t.material_type) (0, i.routeTo)({
                            name: "multiple-ticket-detail",
                            params: {
                                id: t.material_id,
                                type: t.ticket_type
                            }
                        }); else if ("annual_ticket" === t.material_type) (0, i.routeTo)({
                            name: "seasoncarddetail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("vip_ticket" === t.material_type) (0, i.routeTo)({
                            name: "vipmodule-detail",
                            params: {
                                id: t.material_id
                            }
                        }); else if ("quick_ticket" === t.material_type) {
                            if ("SingleExpress" === t.type) return void (0, i.routeTo)({
                                name: "express-singleticketdetail",
                                params: {
                                    id: t.material_id
                                }
                            });
                            (0, i.routeTo)({
                                name: "expressticketdetail",
                                params: {
                                    id: t.material_id
                                }
                            });
                        } else "single_express" === t.material_type ? (0, i.routeTo)({
                            name: "express-singleticketdetail",
                            params: {
                                id: t.material_id
                            }
                        }) : "hotel" === t.material_type ? (0, i.routeTo)({
                            name: "hotel-detail",
                            params: {
                                id: t.material_id
                            }
                        }) : "coupon" === t.material_type ? (0, i.routeTo)({
                            name: "CouponDetail",
                            params: {
                                id: t.material_id
                            }
                        }) : "restaurant" === t.material_type ? (0, i.routeTo)({
                            name: "restaurant-detail",
                            params: {
                                id: t.material_id
                            }
                        }) : "package" === t.material_type ? (0, i.routeTo)({
                            name: "package-detail",
                            params: {
                                id: t.material_id,
                                type: t.type
                            }
                        }) : "combination" === t.material_type && (0, i.routeTo)({
                            name: "combination-detail",
                            params: {
                                id: t.material_id
                            }
                        });
                    },
                    storyCollect: function(e, t, a, i) {
                        this.$emit("story-collect", {
                            type: e,
                            id: t,
                            status: !a.favourited,
                            index: i
                        });
                    },
                    onCollect: function(e, t, a, i, n) {
                        this.$emit("collect", {
                            type: t,
                            id: a,
                            status: !i.favourited,
                            index: e,
                            child_index: n
                        });
                    },
                    goPackageDetail: function(t, a) {
                        e.TencentAdReport.send("LANDING_PAGE_CLICK-Package"), (0, i.routeTo)({
                            name: "package-detail",
                            params: {
                                id: t,
                                type: a
                            }
                        });
                    },
                    checkNotice: function(e) {
                        this.showNoticeModel = !0, this.booking_notice = e.booking_notice_array;
                    },
                    clickCancel: function() {
                        this.showNoticeModel = !1;
                    },
                    clickSure: function() {
                        this.showNoticeModel = !1;
                    },
                    handleVideoPlay: function(e) {
                        this.$emit("video-play", e);
                    }
                }
            };
            t.default = o;
        }).call(this, a("543d").default);
    },
    "5ca1": function(e, t, a) {
        a.r(t);
        var i = a("2fc6"), n = a.n(i);
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = n.a;
    },
    "6af0": function(e, t, a) {
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                return e.handleVideoPlay(t);
            });
        }, n = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/rtmap/article-text/index-create-component", {
    "components/rtmap/article-text/index-create-component": function(e, t, a) {
        a("543d").createComponent(a("17c9"));
    }
}, [ [ "components/rtmap/article-text/index-create-component" ] ] ]);