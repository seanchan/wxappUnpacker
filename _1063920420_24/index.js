var e = getApp();

module.exports = {
    setStorageSync: function(e, o) {
        console.log("主程序setStorageSync", e, o), wx.setStorageSync(e, o);
    },
    report: function(o) {
        console.log("插件上报参数", o), console.log("app-----", e), e.TDSDK.Event.event({
            id: o.e,
            label: o.l,
            params: o.p
        });
    }
};