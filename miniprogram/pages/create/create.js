Page({
  data: {
    sports: ['篮球', '足球', '羽毛球'],
    selectedSport: '',
    selectedDate: '',
    selectedTime: '',
    selectedRegion: [],
    location: '',
    requiredCount: 0,
    existingCount: 0,
    description: '',
  },

  onSportChange(e) {
    this.setData({
      selectedSport: this.data.sports[e.detail.value]
    });
  },

  onDateChange(e) {
    this.setData({
      selectedDate: e.detail.value
    });
  },

  onTimeChange(e) {
    this.setData({
      selectedTime: e.detail.value
    });
  },

  onRegionChange(e) {
    this.setData({
      selectedRegion: e.detail.value
    });
  },

  inputLocation(e) {
    this.setData({
      location: e.detail.value
    });
  },

  inputRequiredCount(e) {
    this.setData({
      requiredCount: e.detail.value
    });
  },

  inputExistingCount(e) {
    this.setData({
      existingCount: e.detail.value
    });
  },

  inputDescription(e) {
    this.setData({
      description: e.detail.value
    });
  },

  submitForm() {
    // 执行创建球局的逻辑
    console.log(this.data);
    // 跳转至其他页面或显示成功消息等
    wx.showToast({
      title: '球局创建成功',
      icon: 'success',
      duration: 2000
    });
  },
});