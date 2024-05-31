// Page({
//   data: {
//     username: '',
//     password: '',
//   },
//   handleInput(e) {
//     const type = e.currentTarget.dataset.type;
//     this.setData({
//       [type]: e.detail.value,
//     });
//   },
//   handleLogin() {
//     const { username, password } = this.data;
//     if (username && password) {
//       // TODO: 在这里添加登录逻辑，例如发送请求到服务器
//       wx.showToast({
//         title: '成功登录',
//         icon: 'success',
//         duration: 2000,
//       });
//       // TODO: 在成功登录后进行页面跳转
//     } else {
//       wx.showToast({
//         title: '请输入用户名和密码',
//         icon: 'none',
//         duration: 2000,
//       });
//     }
//   },
//   handleGoToRegister() {
//     wx.navigateTo({
//       url: '/pages/register/register' // 确保这里的路径是正确的
//     });
//   }
// });


Page({
  data: {
    username: '',
    password: '',
  },
  handleInput(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      [type]: e.detail.value,
    });
  },
  handleLogin() {
    // 直接显示登录成功的消息
    wx.showToast({
      title: '成功登录',
      icon: 'success',
      duration: 2000,
    });
    // 直接跳转到index页面
    wx.reLaunch({ // 使用reLaunch方法是为了关闭所有其他页面，模拟登录后的新“会话”
      url: '/pages/index/index' // 确保这里的路径是正确的
    });
  },
  handleGoToRegister() {
    wx.navigateTo({
      url: '/pages/register/register' // 确保这里的路径是正确的
    });
  }
});