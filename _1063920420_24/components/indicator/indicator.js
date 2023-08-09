(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/indicator/indicator" ], {
    "1a0b": function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.indicatorStatus = e.INDICATOR_ERROR_PREVIEW = e.INDICATOR_SUCCESS = e.INDICATOR_ERROR = e.INDICATOR_LOADING = e.INDICATOR_NONE = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a("823b")), i = a("aa3e");
        var r = o.default.useLogger("indicator.vue"), s = "INDICATOR_NONE";
        e.INDICATOR_NONE = s;
        var n = "INDICATOR_LOADING";
        e.INDICATOR_LOADING = n;
        var c = "INDICATOR_ERROR";
        e.INDICATOR_ERROR = c;
        var I = "INDICATOR_SUCCESS";
        e.INDICATOR_SUCCESS = I;
        var u = "INDICATOR_ERROR_PREVIEW";
        e.INDICATOR_ERROR_PREVIEW = u;
        var h = {
            INDICATOR_NONE: s,
            INDICATOR_LOADING: n,
            INDICATOR_ERROR: c,
            INDICATOR_SUCCESS: I,
            INDICATOR_ERROR_PREVIEW: u
        };
        e.indicatorStatus = h;
        var d = {
            components: {
                customNavigation: function() {
                    Promise.all([ a.e("common/vendor"), a.e("components/navigation/custom-navigation") ]).then(function() {
                        return resolve(a("c2e7"));
                    }.bind(null, a)).catch(a.oe);
                }
            },
            props: {
                loadingText: {
                    type: String,
                    default: "加载中"
                },
                errorText: {
                    type: String,
                    default: "暂时无法加载"
                },
                homeErrorText: {
                    type: String,
                    default: "网络异常  请检查网络"
                },
                buttonText: {
                    type: String,
                    default: "点击重试"
                },
                status: {
                    type: String,
                    default: s
                },
                type: {
                    type: String,
                    default: ""
                },
                useWhiteMask: {
                    type: Boolean,
                    default: !0
                },
                useCustomNavigationBar: {
                    type: Boolean,
                    default: !0
                },
                isHome: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isShowSelf: !0,
                    isShowLoading: !1,
                    isShowError: !1,
                    hasShown: !1,
                    assetsImage: i.assetsImage.common,
                    errorImage: i.assetsImage.newstory,
                    isShowBt: !0,
                    isImage: i.assetsImage.newstory.noip
                };
            },
            watch: {
                status: function() {
                    r.tag("indicator").log("status status =>", this.status), this.updateInnerStatus();
                },
                type: {
                    handler: function(t, e) {
                        this.setErrorImage(t);
                    }
                }
            },
            created: function() {
                r.tag("indicator").log("created status =>", this.status), this.updateInnerStatus();
            },
            methods: {
                setErrorImage: function(t) {
                    switch (t) {
                      case "1":
                        this.isImage = this.errorImage.gfxmError;
                        break;

                      case "2":
                        this.isImage = this.errorImage.xhrError;
                        break;

                      case "3":
                        this.isImage = this.errorImage.ssjError;
                        break;

                      case "4":
                        this.isImage = this.errorImage.bxjgError;
                        break;

                      case "5":
                        this.isImage = this.errorImage.zljError;
                        break;

                      case "6":
                        this.isImage = this.errorImage.hlwError;
                        break;

                      case "7":
                        this.isImage = this.errorImage.hlbtError;
                    }
                },
                updateInnerStatus: function() {
                    switch (this.status) {
                      case s:
                        r.tag("indicator").log("case INDICATOR_NONE"), this.isShowSelf = !0, this.isShowLoading = !1, 
                        this.isShowError = !1;
                        break;

                      case n:
                        r.tag("indicator").log("case INDICATOR_LOADING"), this.isShowSelf = !0, this.isShowLoading = !0, 
                        this.isShowError = !1;
                        break;

                      case c:
                        r.tag("indicator").log("case INDICATOR_ERROR"), this.isShowSelf = !0, this.isShowLoading = !1, 
                        this.isShowError = !0, this.isShowBt = !0;
                        break;

                      case I:
                        r.tag("indicator").log("case INDICATOR_SUCCESS"), this.isShowSelf = !1, this.isShowLoading = !1, 
                        this.isShowError = !1, this.hasShown = !0;
                        break;

                      case u:
                        r.tag("indicator").log("case INDICATOR_ERROR_PREVIEW"), this.isShowSelf = !0, this.isShowLoading = !1, 
                        this.isShowError = !0, this.isShowBt = !1;
                    }
                },
                emitReload: function() {
                    this.$emit("reload");
                }
            }
        };
        e.default = d;
    },
    "76b5": function(t, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "821a": function(t, e, a) {
        a.r(e);
        var o = a("1a0b"), i = a.n(o);
        for (var r in o) "default" !== r && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    c0c6: function(t, e, a) {},
    e361: function(t, e, a) {
        a.r(e);
        var o = a("76b5"), i = a("821a");
        for (var r in i) "default" !== r && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(r);
        a("e573");
        var s = a("f0c5"), n = Object(s.a)(i.default, o.b, o.c, !1, null, "14689993", null, !1, o.a, void 0);
        e.default = n.exports;
    },
    e573: function(t, e, a) {
        var o = a("c0c6");
        a.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/indicator/indicator-create-component", {
    "components/indicator/indicator-create-component": function(t, e, a) {
        a("543d").createComponent(a("e361"));
    }
}, [ [ "components/indicator/indicator-create-component" ] ] ]);