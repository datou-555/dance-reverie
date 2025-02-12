export default defineAppConfig({
  pages: ["pages/index/index", "pages/register/index", "pages/profile/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000000",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#333",
    backgroundColor: "#000000",
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
});
