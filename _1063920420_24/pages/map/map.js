(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/map/map" ], {
    "0b7d": function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = u(a("a34a")), i = a("2f62"), o = a("2d48"), r = u(a("4738")), c = u(a("4360"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                        var a = [], n = !0, i = !1, o = void 0;
                        try {
                            for (var r, c = t[Symbol.iterator](); !(n = (r = c.next()).done) && (a.push(r.value), 
                            !e || a.length !== e); n = !0) ;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            i = !0, o = t;
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return a;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }();
            }
            function s(t, e, a, n, i, o, r) {
                try {
                    var c = t[o](r), u = c.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void a(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function d(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, i) {
                        var o = t.apply(e, a);
                        function r(t) {
                            s(o, n, i, r, c, "next", t);
                        }
                        function c(t) {
                            s(o, n, i, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            function p(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), a.push.apply(a, n);
                }
                return a;
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(a), !0).forEach(function(e) {
                        v(t, e, a[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return t;
            }
            function v(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t;
            }
            var h = {
                onShow: function() {
                    r.default.Page.onShow(), t.$globalData.outdoorPlugin.setHeader("USERAREA", this.USERAREA), 
                    this.isMapMode = this.mapIsMapMode, !0 !== this.isMapMode && (this.updatePoi.tabCategory = "", 
                    this.updatePoi.tabCategory = this.mapTabCategory, c.default.commit("map_update", {
                        isMapMode: !0,
                        tabCategory: "attraction"
                    }));
                    var e = t.getStorageSync("hasOpenLocation"), a = t.getStorageSync("hasShowLocationPop");
                    this.locationPageStatus = e && 1 == e, this.locationPopStatus = a && 1 == a;
                },
                onHide: function() {
                    this.isMapMode = !0, this.updatePoi.tabCategory = "", r.default.Page.onHide();
                },
                onUnload: function() {
                    r.default.Page.onUnload();
                },
                onTabItemTap: function() {
                    var e = t.getStorageSync("bindPhoneUser").ciam_id || "";
                    r.default.Event.event({
                        id: "click_map",
                        label: "",
                        params: {
                            ciam_uuid: e
                        }
                    });
                },
                data: function() {
                    return {
                        locationPageStatus: !1,
                        locationPopStatus: !1,
                        navBarData: {
                            ready: !1,
                            navBarHeight: 70,
                            menuTop: 30
                        },
                        curLocation: {
                            ready: !1,
                            longitude: "",
                            latitude: ""
                        },
                        isMapMode: !0,
                        updatePoi: {
                            tabCategory: "",
                            serviceCategory: "",
                            poiId: ""
                        }
                    };
                },
                computed: f({}, (0, i.mapState)({
                    token: function(t) {
                        return t.bindPhone.token;
                    },
                    favourited: function(t) {
                        return t.common.favourited;
                    },
                    USERAREA: function(t) {
                        return t.location.USERAREA;
                    },
                    mapIsMapMode: function(t) {
                        return t.map.mapIsMapMode;
                    },
                    mapTabCategory: function(t) {
                        return t.map.mapTabCategory;
                    },
                    scenicBounds: function(t) {
                        return [ t.location.ubrPolygon ];
                    }
                }), {
                    paramReady: function() {
                        return this.navBarData.ready && this.curLocation.ready;
                    }
                }),
                methods: f({}, (0, i.mapActions)([ "clearLocation", "getLocation" ]), {
                    initLocation: function() {
                        var e = d(n.default.mark(function e() {
                            var a, i, o;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.getStorage({
                                        key: "testLocation"
                                    });

                                  case 2:
                                    a = e.sent, (i = l(a, 2))[0], o = i[1], this.curLocation = f({
                                        longitude: "",
                                        latitude: ""
                                    }, (o || {}).data || {}, {
                                        ready: !0
                                    });

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    initNavigation: function() {
                        var e = d(n.default.mark(function e() {
                            var a, i, o;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    try {
                                        a = t.$globalData.systemInfo.menuButton, i = a.top, o = a.bottom, this.navBarData.menuTop = i, 
                                        this.navBarData.navBarHeight = o + 10;
                                    } catch (t) {}
                                    this.navBarData.ready = !0;

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    evokeLoc: function() {
                        t.setStorageSync("hasShowLocationPop", 1);
                    },
                    navigateHandler: function(e) {
                        var a = e.detail, n = a.type, i = a.id, r = a.materialId, c = a.extData, u = {
                            "location-open": "location-open",
                            navigation: "walkline",
                            attraction: "scenic-detail",
                            attractionDetail: "scenic-detail",
                            store: "store-detail",
                            storeDetail: "store-detail",
                            catering: "restaurant-detail",
                            cateringDetail: "restaurant-detail",
                            show: "show-detail",
                            showDetail: "show-detail",
                            event: "activity-detail",
                            eventDetail: "activity-detail",
                            hotel: "hotel-detail",
                            hotelDetail: "hotel-detail",
                            vip: "vip-detail",
                            vipDetail: "vip-detail",
                            restroom: "washroom-detail",
                            1: "service-detail",
                            2: "service-detail",
                            3: "service-detail",
                            4: "service-detail",
                            5: "service-detail",
                            6: "service-detail",
                            7: "service-detail",
                            8: "service-detail",
                            9: "service-detail",
                            10: "service-detail",
                            11: "service-detail",
                            12: "service-detail",
                            13: "service-detail",
                            14: "service-detail",
                            15: "service-detail",
                            16: "service-detail",
                            17: "service-detail",
                            18: "service-detail",
                            19: "service-detail",
                            20: "service-detail"
                        };
                        switch (n) {
                          case "back":
                            (0, o.routeBack)();
                            break;

                          case "location-open":
                            (0, o.routeTo)({
                                name: u[n],
                                params: {}
                            });
                            break;

                          case "tab":
                            t.switchTab({
                                url: [ "pages/index/home/home", "pages/index/map/map", "pages/index/mall/mall", "pages/index/personal/personal" ][i]
                            });
                            break;

                          case "navigation":
                            this.api.$map.to(c);
                            break;

                          case "indoor-map":
                            this.updatePoi.tabCategory = c.tabCategory, this.updatePoi.serviceCategory = c.serviceCategory, 
                            this.updatePoi.poiId = c.poiId;
                            break;

                          case "indoor-map-navigation":
                            var l = null, s = null;
                            try {
                                l = JSON.parse(c.startPoint);
                            } catch (t) {}
                            try {
                                s = JSON.parse(c.destPoint);
                            } catch (t) {}
                            s ? this.api.$map.from(l).to({
                                latitude: s.latitude,
                                longitude: s.longitude,
                                pic: s.image,
                                title: s.name,
                                type: s.tabCategory
                            }) : this.api.$toast("请稍候再试");
                            break;

                          default:
                            u[n] ? r ? (0, o.routeTo)({
                                name: u[n],
                                params: {
                                    id: i,
                                    materialId: r
                                }
                            }) : (0, o.routeTo)({
                                name: u[n],
                                params: {
                                    id: i
                                }
                            }) : this.$loading("敬请期待");
                        }
                    },
                    loginHandler: function() {
                        this.api.$loginNew();
                    }
                }),
                onLoad: function(t) {
                    this.initLocation(), this.initNavigation();
                },
                onReady: function() {}
            };
            e.default = h;
        }).call(this, a("543d").default);
    },
    "32e9": function(t, e, a) {
        var n = a("cb4a");
        a.n(n).a;
    },
    "48c8": function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.paramReady ? encodeURIComponent(t.baseUrl) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, i = [];
    },
    "6fdf": function(t, e, a) {
        a.r(e);
        var n = a("0b7d"), i = a.n(n);
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = i.a;
    },
    aa71: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("6cdc"), e(a("66fd")), t(e(a("cf4e")).default);
        }).call(this, a("543d").createPage);
    },
    cb4a: function(t, e, a) {},
    cf4e: function(t, e, a) {
        a.r(e);
        var n = a("48c8"), i = a("6fdf");
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        a("32e9");
        var r = a("f0c5"), c = Object(r.a)(i.default, n.b, n.c, !1, null, "3b800e90", null, !1, n.a, void 0);
        e.default = c.exports;
    }
}, [ [ "aa71", "common/runtime", "common/vendor" ] ] ]);