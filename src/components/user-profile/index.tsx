import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Component } from "react";
// import { ListOutline, Trophy } from "@tarojs/icons";

interface Props {
  userInfo?: {
    nickName?: string;
    avatarUrl?: string;
  };
  setUserInfo: any;
}
const UserProfile = (props: Props) => {
  const { userInfo, setUserInfo } = props;

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

  return (
    <View
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        position: "relative",
        color: "#ffffff",
      }}
    >
      {/* Background Image */}
      <Image
        src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/profile-bg.jpg"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <View style={{ position: "relative", zIndex: 2, padding: "20px" }}>
        {/* Profile Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <View
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "40px",
              border: "2px solid #FFD700",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <Image
              src={userInfo?.avatarUrl || ""}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </View>
          <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
            {userInfo?.nickName}
          </Text>
        </View>

        {/* Competition Card */}
        {/* <View
            style={{
              backgroundColor: "rgba(255, 215, 0, 0.1)",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "30px",
              border: "1px solid #FFD700",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                2025春季芭蕾舞大赛
              </Text>
              <View
                style={{
                  backgroundColor: "#FFD700",
                  padding: "4px 8px",
                  borderRadius: "12px",
                }}
              >
                <Text style={{ color: "#000000", fontSize: "12px" }}>
                  已确认
                </Text>
              </View>
            </View>
            <Text style={{ color: "#999999", fontSize: "14px" }}>
              比赛时间：2025年03月15日
            </Text>
            <Text style={{ color: "#999999", fontSize: "14px" }}>
              参赛组别：少年A组
            </Text>
          </View> */}

        {/* Menu Items */}
        <View style={{ marginBottom: "30px" }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              padding: "13px 15px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginBottom: "15px",
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50% 50%",
                background: "#463e0f",
                width: "35px",
                height: "35px",
              }}
            >
              <Image
                src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/todolist.png"
                style={{ width: "16px", height: "16px" }}
              ></Image>
            </View>
            <Text style={{ marginLeft: "10px" }}>我的报名</Text>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              padding: "13px 15px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50% 50%",
                background: "#463e0f",
                width: "35px",
                height: "35px",
              }}
            >
              <Image
                src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/jiangbei.png"
                style={{ width: "16px", height: "16px" }}
              ></Image>
            </View>
            <Text style={{ marginLeft: "10px" }}>我的奖品</Text>
          </View>
        </View>

        {/* Logout Button */}
        <View
          style={{
            backgroundColor: "#FFD700",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "30px",
          }}
          onClick={confirmLogout}
        >
          <Text style={{ color: "#000000", fontWeight: "bold" }}>退出登录</Text>
        </View>

        {/* Contact Info */}
        <View
          style={{
            textAlign: "center",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ color: "#999999", fontSize: "14px" }}>
            主办单位：舞颂九州
          </Text>
          <Text style={{ color: "#999999", fontSize: "14px" }}>
            联系电话：+86 755-8888-8888
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
