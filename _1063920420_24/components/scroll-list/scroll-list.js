(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/scroll-list/scroll-list" ], {
    "013f": function(e, t, n) {
        var i = n("8155");
        n.n(i).a;
    },
    "21f3": function(e, t, n) {
        n.r(t);
        var i = n("8231"), l = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = l.a;
    },
    "26dc2": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return l;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.list, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f0: "play" == e.types ? e._f("globalTitleFilter")(t.subtitle) : null,
                    f1: "restaurant" == e.types && t.cuisine ? e._f("globalTitleFilter")(t.cuisine) : null,
                    f2: "hotel" !== e.types && "store" !== e.types || !t.tags[0] ? null : e._f("globalTitleFilter")(t.tags[0]),
                    f3: "hotel" !== e.types && "store" !== e.types || !t.tags[1] ? null : e._f("globalTitleFilter")(t.tags[1])
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, l = [];
    },
    8155: function(e, t, n) {},
    8231: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n("2d48"), l = (a(n("5ca6")), n("aa3e")), o = a(n("4738"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var r = {
                name: "ScorllList",
                components: {
                    FontWeight: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/font-weight") ]).then(function() {
                            return resolve(n("269f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OmImage: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/om-image/index") ]).then(function() {
                            return resolve(n("2f8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CircleBox: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/circle-box/index") ]).then(function() {
                            return resolve(n("a65e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    filterText: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/ui/filterText") ]).then(function() {
                            return resolve(n("6af9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    types: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        indicatorDots: !1,
                        autoplay: !1,
                        interval: 3e3,
                        duration: 500,
                        currentIndex: 0,
                        margin: "90rpx",
                        newList: [],
                        assetsImage: l.assetsImage.index,
                        isRelease1: e.getStorageSync("nowRelease")
                    };
                },
                computed: {
                    labelImageUrl: function() {
                        switch (this.types) {
                          case "hotel":
                            return "/static/images/index/label-dining.png";

                          case "store":
                            return "/static/images/index/label-hot.png";

                          default:
                            return "/static/images/index/label-express.png";
                        }
                    },
                    subColor: function() {
                        switch (this.types) {
                          case "hotel":
                            return "hotelColor";

                          case "store":
                            return "hotColor";

                          default:
                            return "otherColor";
                        }
                    }
                },
                mounted: function() {},
                methods: {
                    showTips: function() {
                        this.$loading("敬请期待");
                    },
                    onClickLeft: function() {
                        this.$emit("clickLeft");
                    },
                    onClickRight: function() {
                        this.$emit("clickRight");
                    },
                    goDetail: function(e, t) {
                        var n = "";
                        "show" === this.types ? ((0, i.routeTo)({
                            name: "show-detail",
                            params: {
                                id: e.material_id
                            }
                        }), n = "perform") : "play" === this.types ? ((0, i.routeTo)({
                            name: "scenic-detail",
                            params: {
                                id: e.material_id
                            }
                        }), n = "scenic") : "hotel" === this.types ? ((0, i.routeTo)({
                            name: "hotel-detail",
                            params: {
                                id: e.material_id
                            }
                        }), n = "hotel") : "store" === this.types ? ((0, i.routeTo)({
                            name: "store-detail",
                            params: {
                                id: e.material_id
                            }
                        }), n = "store") : "restaurant" === this.types && ((0, i.routeTo)({
                            name: "restaurant-detail",
                            params: {
                                id: e.material_id
                            }
                        }), n = "restaurant"), o.default.Event.event({
                            id: "click_home_recommend_list",
                            label: "",
                            params: {
                                title: this.title,
                                block_type: n,
                                material_title: e.title,
                                material_id: e.material_id,
                                material_type: e.material_type,
                                index: t,
                                land: e.area
                            }
                        }), o.default.Event.event({
                            id: "show_home_recommend_list",
                            label: "",
                            params: {
                                title: this.title,
                                block_type: n,
                                material_title: e.title,
                                material_id: e.material_id,
                                material_type: e.material_type,
                                index: t,
                                land: e.area
                            }
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    "901d": function(e, t, n) {
        n.r(t);
        var i = n("26dc2"), l = n("21f3");
        for (var o in l) "default" !== o && function(e) {
            n.d(t, e, function() {
                return l[e];
            });
        }(o);
        n("013f");
        var a = n("f0c5"), r = Object(a.a)(l.default, i.b, i.c, !1, null, "582e8259", null, !1, i.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/scroll-list/scroll-list-create-component", {
    "components/scroll-list/scroll-list-create-component": function(e, t, n) {
        n("543d").createComponent(n("901d"));
    }
}, [ [ "components/scroll-list/scroll-list-create-component" ] ] ]);