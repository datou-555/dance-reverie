import { View, Text, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Component, useState } from "react";

export default function Login(props) {
  const { setUserInfo } = props;
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <View
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        position: "relative",
        color: "#ffffff",
        padding: "0px 20px",
      }}
    >
      {/* Background Image */}
      <Image
        src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/profile-bg.jpg"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <View
        style={{
          position: "relative",
          zIndex: 2,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <Image
            src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/dance.png"
            style={{ width: "28px", height: "28px", marginBottom: "10px" }}
          />
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            大湾区芭蕾艺术季
          </Text>
          <Text
            style={{
              fontSize: "16px",
              color: "#FFD700",
            }}
          >
            Greater Bay Area Ballet Season
          </Text>
        </View>

        {/* Login Info Section */}
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Image
              src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/get-avatar.png"
              style={{ width: "24px", height: "24px", marginRight: "6px" }}
            />
            <Text
              style={{
                marginLeft: "10px",
                color: "#fff",
                fontSize: "15px",
              }}
            >
              将获取您的微信头像
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Image
              src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/signature.png"
              style={{ width: "24px", height: "24px", marginRight: "6px" }}
            />{" "}
            <Text
              style={{
                marginLeft: "10px",
                color: "#fff",
                fontSize: "15px",
              }}
            >
              将获取您的微信昵称
            </Text>
          </View>

          {/* WeChat Login Button */}
          <Button
            onClick={handleAuth}
            loading={isLoading}
            style={{
              backgroundColor: "#FFD700",
              color: "#000000",
              borderRadius: "8px",
              border: "none",
              padding: "5px 12px",
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isLoading ? "登录中..." : "微信一键登录"}
          </Button>
        </View>
      </View>
    </View>
  );
}
