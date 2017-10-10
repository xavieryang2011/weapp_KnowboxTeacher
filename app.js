//app.js
const userData=require('libraries/data.js');
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    userData.getData('get-info',{
      source:'androidTeacher',
      version:'1.4.2',
      channel:'knowbox',
      token: 'PzFzi7AuePOEUtAe+OSVow8RHCoFBpVga/m+PXFMos/2WRC0MUEDwSm4+E06GP07',
      kbparam:'kbparam'
    })
    .then(d=>{
      this.globalData.userInfo = d.data
    })
  },
  globalData: {
    userInfo: null
  }
})