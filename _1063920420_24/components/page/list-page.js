(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/page/list-page" ], {
    "06db": function(t, e, n) {
        var o = n("0c04");
        n.n(o).a;
    },
    "0c04": function(t, e, n) {},
    2409: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("823b")).default.useLogger("list-page.vue"), i = 0, a = {
                components: {
                    ScrollList: function() {
                        n.e("components/ui/scroll-list").then(function() {
                            return resolve(n("6fd6"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    NavigationBar: function() {
                        n.e("components/navigation/navigation-bar").then(function() {
                            return resolve(n("b6d4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ErrorPage: function() {
                        n.e("components/page/error-page").then(function() {
                            return resolve(n("e95a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Indicator: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/indicator/indicator") ]).then(function() {
                            return resolve(n("e361"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    nearStyle: {
                        type: Number,
                        default: 0
                    },
                    navHight: {
                        type: Number,
                        default: 0
                    },
                    collectStyle: {
                        type: Number,
                        default: 0
                    },
                    wrapStyle: {
                        type: String,
                        default: ""
                    },
                    customNavigationBar: {
                        type: Boolean,
                        default: !1
                    },
                    customNavigationBarType: {
                        type: String,
                        default: "default"
                    },
                    customNavigationBarShowHome: {
                        type: Boolean,
                        default: !1
                    },
                    inited: {
                        type: Boolean,
                        default: !1
                    },
                    error: {
                        type: Object,
                        default: function() {
                            return {
                                errorType: "",
                                errorMessage: ""
                            };
                        }
                    },
                    emptyErrorType: {
                        type: String,
                        default: ""
                    },
                    status: {
                        type: String,
                        default: ""
                    },
                    showLoadMore: {
                        type: Boolean,
                        default: !0
                    },
                    globalLoading: {
                        type: Boolean,
                        default: !0
                    },
                    hasBottomBar: {
                        type: Boolean,
                        default: !1
                    },
                    hasTopBar: {
                        type: Boolean,
                        default: !1
                    },
                    topBarHeight: {
                        type: Number,
                        default: 0
                    },
                    listTypes: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        ipxClass: "",
                        platform: "",
                        templateClass: "",
                        h5Class: "",
                        indicatorStatus: "INDICATOR_NONE",
                        useWhiteMask: !1
                    };
                },
                computed: {
                    showLoading: function() {
                        return !this.inited && "loading" === this.status;
                    },
                    showError: function() {
                        return this.error && !this.inited;
                    },
                    listEmptyError: function() {
                        return !(!this.emptyErrorType || "empty" !== this.status) && {
                            errorType: this.emptyErrorType
                        };
                    },
                    showList: function() {
                        return this.inited;
                    },
                    tabHeight: function() {
                        var t = this.ipxClass ? 170 : 120;
                        return ((this.hasBottomBar ? t : 0) + (this.topBarHeight || 0)) / 2;
                    }
                },
                watch: {
                    showLoading: function(t) {
                        var e = this;
                        o.tag("indicator").log("watch showLoading =>", t), t && (i && clearTimeout(i), i = setTimeout(function() {
                            e.indicatorStatus = "INDICATOR_LOADING";
                        }, 300));
                    },
                    showError: function(t) {
                        var e = this;
                        o.tag("indicator").log("watch showError =>", t), t && setTimeout(function() {
                            e.error.errorRetCode && 10010 === e.error.errorRetCode ? e.indicatorStatus = "INDICATOR_ERROR_PREVIEW" : e.indicatorStatus = "INDICATOR_ERROR", 
                            e.useWhiteMask = !0;
                        }, 900);
                    },
                    inited: function(t) {
                        o.tag("indicator").log("watch inited =>", t), t && (i && (clearTimeout(i), i = 0), 
                        this.indicatorStatus = "INDICATOR_SUCCESS", this.useWhiteMask = !1);
                    }
                },
                created: function() {
                    var e = t.$globalData.systemInfo;
                    this.ipxClass = e.ipxClass, this.platform = e.platform, this.templateClass = "tmpl-".concat(t.$template), 
                    this.h5Class = "h5" === t.$platform ? "h5Class" : "", this.initIndicator();
                },
                mounted: function() {},
                methods: {
                    containerHeight: function(t) {
                        this.$emit("containerHeight", t);
                    },
                    reachBottom: function() {
                        this.$emit("reachBottom");
                    },
                    handleRefresh: function() {
                        this.$emit("refresh");
                    },
                    handleNavigate: function() {
                        this.$emit("navigate");
                    },
                    initIndicator: function() {
                        var t = this;
                        o.tag("indicator").log("initIndicator inited => ".concat(this.inited, " loading => ").concat(this.showLoading, " error => ").concat(this.showError)), 
                        this.inited || (i && clearTimeout(i), i = setTimeout(function() {
                            t.indicatorStatus = "INDICATOR_LOADING";
                        }, 300));
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    "427f": function(t, e, n) {
        n.r(e);
        var o = n("2409"), i = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    },
    "76f8": function(t, e, n) {
        n.r(e);
        var o = n("9b93"), i = n("427f");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("06db");
        var r = n("f0c5"), s = Object(r.a)(i.default, o.b, o.c, !1, null, "2f84de60", null, !1, o.a, void 0);
        e.default = s.exports;
    },
    "9b93": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/page/list-page-create-component", {
    "components/page/list-page-create-component": function(t, e, n) {
        n("543d").createComponent(n("76f8"));
    }
}, [ [ "components/page/list-page-create-component" ] ] ]);