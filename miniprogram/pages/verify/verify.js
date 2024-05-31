Page({
  data: {
    username: '',
    password: ''
  },
  inputUsername(e) {
    this.setData({
      username: e.detail.value
    });
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value
    });
  },
  doLogin() {
    // 在实际应用中这里应发送请求到后台验证用户名和密码
    if (this.data.username && this.data.password) {
      // 假设登录验证通过
      wx.navigateTo({
        url: '/pages/index/index'
      });

      // 实际应用中的做法示例：
      /*
      wx.request({
        url: 'https://yourdomain.com/api/login',
        method: 'POST',
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success: function(res) {
          if (res.data.isLoginSuccessful) {
            wx.navigateTo({
              url: '/pages/index/index'
            });
          } else {
            wx.showToast({
              title: '登录失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function() {
          wx.showToast({
            title: '网络错误',
            icon: 'none',
            duration: 2000
          });
        }
      });
      */
    } else {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none',
        duration: 2000
      });
    }
  }
});