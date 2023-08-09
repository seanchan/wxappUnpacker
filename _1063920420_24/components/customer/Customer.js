(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/customer/Customer" ], {
    "0ffe": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("2d48"), a = {
                props: {
                    axisY: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        topStyle: "",
                        x: 0,
                        y: 0,
                        areaHeaght: 0,
                        dragWidth: 0,
                        isShow: !1
                    };
                },
                created: function() {},
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        t.createSelectorQuery().in(e).select("#J_btn").boundingClientRect(function(t) {
                            e.dragWidth = t.width, e.getSystemStyle();
                        }).exec();
                    });
                },
                methods: {
                    openService: function() {
                        this.$emit("clickCustomer"), (0, o.routeTo)({
                            name: "customer",
                            params: {}
                        });
                    },
                    getSystemStyle: function() {
                        try {
                            var e = t.$globalData.systemInfo, n = e.frontImageHeight, o = e.screenHeight, a = e.screenWidth;
                            this.x = Math.floor(.947 * a - this.dragWidth), this.axisY ? this.y = o - n - 20 : this.y = .88 * (o - n), 
                            this.areaHeaght = "".concat(o - n / 2 - 10, "px"), this.topStyle = "top:".concat(n / 2, "px;height: ").concat(this.areaHeaght), 
                            this.isShow = !0;
                        } catch (t) {}
                    }
                },
                onLoad: function() {}
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    "2eea": function(t, e, n) {
        var o = n("823b0");
        n.n(o).a;
    },
    "7e26": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "823b0": function(t, e, n) {},
    "9ca3": function(t, e, n) {
        n.r(e);
        var o = n("7e26"), a = n("e103");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("2eea");
        var i = n("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, "f4947a74", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    e103: function(t, e, n) {
        n.r(e);
        var o = n("0ffe"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/customer/Customer-create-component", {
    "components/customer/Customer-create-component": function(t, e, n) {
        n("543d").createComponent(n("9ca3"));
    }
}, [ [ "components/customer/Customer-create-component" ] ] ]);