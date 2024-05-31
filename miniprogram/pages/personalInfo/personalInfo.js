// pages/personalInfo/personalInfo.js
Page({
  data: {
    userInfo: {
      height: 175,
      weight: 65,
      gender: '男',
      genderIndex: 1, // 该索引应与genders数组中的性别对应
      bio: '',
      phone: ''
    },
    genders: ['未选择', '男', '女', '其他']
  },
  onInput: function(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({[`userInfo.${type}`]: e.detail.value});
  },
  onGenderChange: function(e) {
    this.setData({
      'userInfo.genderIndex': e.detail.value,
      'userInfo.gender': this.data.genders[e.detail.value]
    });
  },
  onSave: function() {
    console.log('保存个人信息', this.data.userInfo);
    // 在这里编写保存逻辑，比如通过wx.request发送到后端服务器
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
  }
});