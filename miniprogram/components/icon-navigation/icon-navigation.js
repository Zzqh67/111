Component({
  methods: {
    goBack: function() {
      wx.navigateBack({
        delta: 1
      });
    },
    goHome: function() {
      wx.reLaunch({
        url: '/pages/index/index'
      });
    }
  }
});