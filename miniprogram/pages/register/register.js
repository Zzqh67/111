// 注册页面逻辑
Page({
  data: {
    username: '',
    password: '',
    avatar: ''
  },
  inputUsername: function(e) {
    this.setData({
      username: e.detail.value
    });
  },
  inputPassword: function(e) {
    this.setData({
      password: e.detail.value
    });
  },
  // 处理头像上传
  doUpload: function() {
    var that = this;
    // Choose and upload the picture
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          avatar: tempFilePaths[0]
        });
        // You can add upload logic here
      }
    });
  },
  // 处理注册逻辑
  doRegister: function() {
    // Here, you would generally have an HTTP request to your backend to register the user
    // For simplicity, the pseudo code is used here
    if (this.data.username && this.data.password && this.data.avatar) {
      // Implement actual registration logic with HTTP request
      console.log('Sending registration data to backend:', this.data);
    } else {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
    }
  }
});