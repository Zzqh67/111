Page({
  data: {
    games: [], // 存储球局信息的列表
    showModal: false,
    selectedGame: {}
  },

  onLoad: function() {
    // 在这里加载球局数据，可以从服务器拉取
    this.loadGames();
  },

  loadGames: function() {
    // 模拟加载数据
    const games = [
      {id: 1, name: '周末篮球赛', date: '2023-07-18', location: '体育馆', details: '详细信息...'},
      // 添加更多模拟数据...
    ];
    this.setData({ games });
  },

  showGameDetails: function(event) {
    const gameId = event.currentTarget.dataset.id;
    const selectedGame = this.data.games.find(game => game.id === gameId);
    this.setData({ selectedGame, showModal: true });
  },

  closeModal: function() {
    this.setData({ showModal: false });
  },

  joinGame: function() {
    // 处理加入比赛的逻辑，可以是向服务器发送请求
    wx.showToast({
      title: '成功加入比赛',
      icon: 'success',
      duration: 2000
    });
    this.closeModal();
  }
});