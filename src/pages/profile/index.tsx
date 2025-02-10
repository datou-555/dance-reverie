import { View, Text, Button, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    // 检查是否已经登录
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        setUserInfo(res.data);
      },
    });
  }, []);

  const handleAuth = async () => {
    try {
      setIsLoading(true);

      const { userInfo: wxUserInfo } = await Taro.getUserProfile({
        desc: "用于完善会员资料",
      });

      const { code } = await Taro.login();

      const { data: res } = await Taro.request({
        url: "https://abih4f7gx4.hzh.sealos.run/login",
        method: "GET",
        data: { code },
      });

      if (res.data.token) {
        await Taro.setStorage({
          key: "token",
          data: res.data.token,
        });

        await Taro.setStorage({
          key: "userInfo",
          data: wxUserInfo,
        });

        setUserInfo(wxUserInfo);

        Taro.showToast({
          title: "登录成功",
          icon: "success",
        });
      } else {
        throw new Error("登录失败");
      }
    } catch (error) {
      console.error("登录错误:", error);
      Taro.showToast({
        title: error.message || "登录失败",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      // 显示加载提示
      Taro.showLoading({
        title: "退出中...",
        mask: true,
      });

      // 清除所有登录相关的存储
      await Promise.all([
        Taro.removeStorage({ key: "userInfo" }),
        Taro.removeStorage({ key: "token" }),
      ]);

      // 更新状态，触发重新渲染
      setUserInfo(null);

      // 隐藏加载提示
      Taro.hideLoading();

      // 显示成功提示
      Taro.showToast({
        title: "已退出登录",
        icon: "success",
        duration: 2000,
      });
    } catch (error) {
      console.error("退出登录错误:", error);

      // 隐藏加载提示
      Taro.hideLoading();

      // 显示错误提示
      Taro.showToast({
        title: "退出失败",
        icon: "error",
        duration: 2000,
      });
    }
  };

  // 添加退出确认
  const confirmLogout = () => {
    Taro.showModal({
      title: "确认退出",
      content: "是否确认退出登录？",
      success: function (res) {
        if (res.confirm) {
          handleLogout();
        }
      },
    });
  };

  // 如果已登录，显示用户信息页面
  if (userInfo) {
    return (
      <View className="profile-page">
        <View className="profile-header" style={{ height: "400rpx" }}></View>

        <View className="profile-container">
          <View className="profile-content">
            <Text className="content-title">个人中心</Text>

            <View className="user-info">
              <Image
                className="avatar"
                src={userInfo.avatarUrl || "/placeholder.svg"}
                mode="aspectFill"
              />
              <Text className="username">{userInfo.nickName}</Text>
            </View>

            <View className="menu-list">
              <View className="menu-item">
                <Text className="menu-text">我的报名</Text>
                <Text className="menu-arrow">›</Text>
              </View>

              <View className="menu-item">
                <Text className="menu-text">成绩查询</Text>
                <Text className="menu-arrow">›</Text>
              </View>
            </View>
          </View>

          <View className="contact-footer">
            <View className="contact-item">
              <Text className="contact-text">
                咨询单位：舞颂九州全国艺术展演
              </Text>
            </View>
            <View className="contact-item">
              <Text className="contact-text">咨询电话：400-123-4567</Text>
            </View>
            <View className="contact-item">
              <Text className="contact-text">
                咨询邮箱：contact@example.com
              </Text>
            </View>
            <View className="contact-item">
              <Text className="contact-text">
                咨询时间：周一至周五 9:00-18:00
              </Text>
            </View>
          </View>

          <Button className="logout-button" onClick={confirmLogout}>
            退出登录
          </Button>
        </View>
      </View>
    );
  }

  // 未登录时显示登录页面
  return (
    <View className="login-page">
      <View className="login-header">
        <Text className="header-title"></Text>
      </View>

      <View className="login-content">
        <Image
          className="logo"
          src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/WechatIMG126.png"
          mode="aspectFit"
        />

        <View className="auth-text">
          <Text className="auth-title">申请获取以下权限</Text>
          <Text className="auth-desc">获得你的公开信息(昵称、头像等)</Text>
        </View>

        <Button
          className="auth-button"
          onClick={handleAuth}
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? "登录中..." : "登录授权"}
        </Button>
      </View>
    </View>
  );
}
