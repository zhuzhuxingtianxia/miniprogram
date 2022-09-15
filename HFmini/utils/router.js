
const Router = (page, flag = false) => {
  if (flag) {
    let isLogin = false
    let _onShow = page.onShow
    page.onShow = () => {
      if(isLogin) {
        _onShow.call(this)
      }else {
        wx.navigateTo({
          url: '/pages/login/index',
        })
      }

    }
    
  }
  return Page(page)
}

export default Router;