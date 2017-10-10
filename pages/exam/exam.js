const api = require("../../libraries/data.js")
Page({
  data: {
    class_arrow_src: 'images/bt_question_link_array_down.png',
    array: ['yangxh', '默认班级', '+新建班级'],
    index: 0,

    publisher: ['人教版', '鲁教版'],
    publisherId: 0,
    grade: [{ name: '人教版', grades: ['七年级上', '八年级上'] },
    { name: '鲁教版', grades: ['鲁教六上', '鲁教六下'] }],
    gradeId: 0,

    unitInfos: {}
  },
  bindClassChange: function (e) {
    console.log("picker发送事件:", e.detail.value);
    this.setData({
      index: e.detail.value
    })
  },
  bindPublisherChange: function (e) {
    console.log("bindPublisherChange发送事件值：", e.detail.value);
    this.setData({
      publisherId: e.detail.value,
      gradeId: 0
    })
  },
  bindGradeChange: function (e) {
    console.log("bindGradeChange发送事件值：", e.detail.value);
    this.setData({
      gradeId: e.detail.value,
    })
  },
  onLoad() {
    api.getData('getUnitList')
      .then(d => {
        this.setData({
          unitInfos: d.data.unitList
        })
      })
  },
  showDetail: function (event) {
    console.log(event.currentTarget.dataset.unitinfo);
    wx.navigateTo({
      url: '../examDetail/examDetail?unitID=' + event.currentTarget.dataset.unitinfo
    })
  }
})