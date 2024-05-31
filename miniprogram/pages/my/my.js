Page({
  data: {
    userInfo: {
      avatarUrl: '默认头像链接',   // 默认头像链接
      nickName: '赵庆豪',          // 默认昵称
    }
  },
  logout: function(){
    // 清除本地存储的用户信息，具体取决于如何存储用户信息
    wx.clearStorageSync();
    // 或者更精确地清除特定项
    // wx.removeStorageSync('userInfo');

    // 跳转到登录页面
    wx.redirectTo({
      url: '/pages/login/login' // 确保这里的路径是正确的
    });
  },

  onLoad: function() {
    // 在页面加载时获取用户信息, 请确保正确处理权限请求
    this.getUserInfo();
  },

  getUserInfo: function() {
    const that = this;
    // 提示用户获取权限
    wx.getUserProfile({
      desc: '用于展示在“我的”页面',
      success: function(res) {
        that.setData({
          userInfo: res.userInfo
        });
      },
      fail: function() {
        // 处理获取信息失败
      }
    });
  },

  goToPersonalInfo: function() {
    // 导航至个人信息页面
    wx.navigateTo({
      url: '/pages/personalInfo/personalInfo', // 实际的路径根据项目结构设置
    });
  },

  goToMatchRecord: function() {
    // 导航至约球记录页面
    wx.navigateTo({
      url: '/path/to/matchRecord', // 实际的路径根据项目结构设置
    });
  }
});