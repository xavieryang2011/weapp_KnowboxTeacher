// pages/deploy/deploy.js
const api=require('../../libraries/data.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      unitName:'Unit1',
      time:'00:00',
      classInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myDate=new Date();
    var hours=myDate.getHours<10?'0'+myDate.getHours():myDate.getHours();
    var mins=myDate.getMinutes()<10?'0'+myDate.getMinutes():myDate.getMinutes();
     this.setData({
       unitName:options.unitName,
       time:hours+':'+mins
     })
     wx.setNavigationBarTitle({
       title: '发布测验',
     })
    
    api.getData("classList")
        .then(d=>{
          this.setData({
            classInfo:d.data.classList
          })
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindTimeChange: function(e){
    this.setData({
      time:e.detail.value
    })
  },
  switchBindChange:function(e){

  },
  checkboxchanged:function(e){
    console.log(e);
  }
})