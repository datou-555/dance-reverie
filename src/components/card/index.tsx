import { View, Image, Text } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import "./index.scss";

interface CardProps {
  activity_name: string;
  activity_short_name: string;
}

export default function Card({
  activity_name,
  activity_short_name,
}: CardProps) {
  const handleRegister = () => {
    navigateTo({
      url: "../register/index",
    }).catch((err) => {
      console.error("Navigation failed:", err);
    });
  };

  return (
    <View className="ballot-card">
      <View className="logo-container"></View>

      <View className="content-container">
        {/* Dark overlay gradient */}
        <View className="overlay" />

        {/* Background Image */}

        {/* Content */}
        <View className="text-content">
          <Text className="title">{activity_name}</Text>
          <Text className="subtitle">{activity_short_name}</Text>
        </View>

        {/* Registration Button */}
        <View className="card-btn" onClick={handleRegister}>
          立即报名 {`>`}
        </View>
      </View>
    </View>
  );
}
