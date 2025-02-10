import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

interface Activity {
  id: number;
  title: string;
  description: string;
}

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return <View className="index"></View>;
}
