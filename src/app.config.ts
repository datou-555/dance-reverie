export default {
  pages: ["pages/index/index", "pages/profile/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#333",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/home.png",
        selectedIconPath: "assets/home.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "assets/profile.png",
        selectedIconPath: "assets/profile.png",
      },
    ],
  },
};
