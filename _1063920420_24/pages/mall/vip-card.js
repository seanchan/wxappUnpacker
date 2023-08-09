(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/vip-card" ], {
    "1bb3": function(t, e, n) {},
    3752: function(t, e, n) {
        var a = n("1bb3");
        n.n(a).a;
    },
    "39f2": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "8a0d": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = n("2d48"), i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("4738"));
        var l = {
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
                listData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {
                    list: []
                };
            },
            computed: {},
            watch: {
                listData: {
                    handler: function(t) {
                        if (t[0].label_info.forEach(function(t) {
                            t.value = "".concat(t.value.substring(0, 5));
                        }), this.list = JSON.parse(JSON.stringify(t[0].label_info)), t[0].label_info[1]) {
                            this.list[1] = {};
                            var e = t[0].label_info[1];
                            this.list[2] = e;
                        }
                        if (t[0].label_info[2]) {
                            this.list[3] = {};
                            var n = t[0].label_info[2];
                            this.list[4] = n;
                        }
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t.listData.length > 0 && t.listData.forEach(function(e, n) {
                        i.default.Event.event({
                            id: "show_mall_vip_ticket",
                            label: "",
                            params: {
                                material_title: t.listData[n].title
                            }
                        });
                    });
                }, 500);
            },
            methods: {
                showTips: function() {
                    i.default.Event.event({
                        id: "click_mall_vip_ticket",
                        label: "",
                        params: {
                            material_title: this.listData[0].title
                        }
                    }), (0, a.routeTo)({
                        name: "vip-list",
                        params: {}
                    });
                }
            }
        };
        e.default = l;
    },
    "9f5b": function(t, e, n) {
        n.r(e);
        var a = n("39f2"), i = n("fd37");
        for (var l in i) "default" !== l && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(l);
        n("3752");
        var o = n("f0c5"), c = Object(o.a)(i.default, a.b, a.c, !1, null, "130343c2", null, !1, a.a, void 0);
        e.default = c.exports;
    },
    fd37: function(t, e, n) {
        n.r(e);
        var a = n("8a0d"), i = n.n(a);
        for (var l in a) "default" !== l && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(l);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/mall/vip-card-create-component", {
    "pages/mall/vip-card-create-component": function(t, e, n) {
        n("543d").createComponent(n("9f5b"));
    }
}, [ [ "pages/mall/vip-card-create-component" ] ] ]);