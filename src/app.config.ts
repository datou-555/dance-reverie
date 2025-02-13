export default defineAppConfig({
  pages: ["pages/index/index", "pages/register/index", "pages/profile/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000000",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#9498a5",
    selectedColor: "#c4ab3c",
    backgroundColor: "#000000",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/home.png",
        selectedIconPath: "assets/home-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "assets/mine.png",
        selectedIconPath: "assets/mine-active.png",
      },
    ],
  },
});
