// index.js
Page({
  // 跳转到篮球页面
  goToBasketball: function () {
    wx.navigateTo({
      url: '/pages/basketball/basketball',
    })
  },
  // 跳转到足球页面
  goToFootball: function () {
    wx.navigateTo({
      url: '/pages/football/football',
    })
  },
  // 跳转到羽毛球页面
  goToBadminton: function () {
    wx.navigateTo({
      url: '/pages/badminton/badminton',
    })
  }
})