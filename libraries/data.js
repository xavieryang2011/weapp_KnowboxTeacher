const API_URL = 'https://www.easy-mock.com/mock/59db19a547bc3811aa7c3e0f/teacher/';

function fetchApi(type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: API_URL+type,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  getData(type, params) {
    return fetchApi(type, params)
      .then(res => res.data)
  }
}
