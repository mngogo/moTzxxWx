{
  Page({
    /**
     * 页面的初始数据
     */
    data: {
      hasLocation: false,
    },
    getLocation:function(){

    },


    getLocation:function(){
      wx.navigateTo({
        url: '/pages/gofly/get-location/get-location'
      })
    },
    wxPayment:function(){
      wx.navigateTo({
        url: '/pages/gofly/request-payment/request-payment'
      })
    },
    //查看日志
    see_logs: function () {
        wx.navigateTo({
          url: '/pages/logs/logs'
        })
    },
    //沸腾测试
    fetowTest:function(){
      wx.navigateTo({
        url: '/pages/fetow/test/index'
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
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
      
    }
  })
}