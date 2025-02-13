import { View, Text, Button, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";
import UserProfile from "../../components/user-profile";
import Login from "../../components/login";

export default function Profile() {
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

  // 如果已登录，显示用户信息页面
  if (userInfo) {
    return <UserProfile userInfo={userInfo} setUserInfo={setUserInfo} />;
  }

  // 未登录时显示登录页面
  return <Login setUserInfo={setUserInfo} />;
}
