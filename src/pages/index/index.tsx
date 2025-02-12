import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import { Component } from "react";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

// 确保在组件之前定义页面配置
definePageConfig({
  navigationBarTitleText: "",
  navigationBarBackgroundColor: "#000000",
  navigationBarTextStyle: "#000000",
  // navigationStyle: "custom", // 使用自定义导航栏
});

const cardImages = {
  judges:
    "https://public.readdy.ai/ai/img_res/6fa9eb82e54b24d58ec724937019f85c.jpg",
  awards:
    "https://public.readdy.ai/ai/img_res/51346ab14f7eae056fd518fb665c5a6b.jpg",
  groups:
    "https://public.readdy.ai/ai/img_res/93e2a93f6365e1775d7371c9b3df2930.jpg",
  review:
    "https://public.readdy.ai/ai/img_res/38214bd991ea25aecdb406fc83856df9.jpg",
};

export default class Index extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          paddingBottom: "4px",
          fontFamily:
            'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        }}
      >
        {/* Header */}
        <View
          style={{
            padding: "10px 20px 12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/dance.png"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                大湾区芭蕾艺术季
              </Text>
              <Text style={{ color: "#D4AF37", fontSize: "12px" }}>
                Greater Bay Area Ballet Season
              </Text>
            </View>
          </View>
          <Image
            src="/more-icon.png"
            style={{ width: "24px", height: "24px" }}
          />
        </View>

        {/* Navigation Icons */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 52px",
          }}
        >
          {[
            {
              src: "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/about.png",
              text: "赛事介绍",
              subText: "About",
            },
            {
              src: "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/companies.png",
              text: "参赛单位",
              subText: "Partners",
            },
            {
              src: "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/certificate.png",
              text: "领取证书",
              subText: "Certificate",
            },
            {
              src: "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/call.png",
              text: "赛事咨询",
              subText: "Contact",
            },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50% 50%",
                  backgroundColor: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "8px",
                }}
              >
                <Image
                  src={item.src}
                  style={{ width: "16px", height: "16px" }}
                />
              </View>
              <Text style={{ color: "#ffffff", fontSize: "12px" }}>
                {item.text}
              </Text>
              <Text style={{ color: "#D4AF37", fontSize: "10px" }}>
                {item.subText}
              </Text>
            </View>
          ))}
        </View>

        {/* Registration Button */}
        <View style={{ padding: "14px 20px" }}>
          <View
            style={{
              backgroundColor: "#D4AF37",
              padding: "9px 12px",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <Text style={{ color: "#000000" }}>
              在线报名 Online Registration
            </Text>
          </View>
        </View>

        {/* Image Slider */}
        <Swiper style={{ height: "200px" }} indicatorDots autoplay circular>
          <SwiperItem>
            <Image
              src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/swiper-pic1.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/swiper-pic2.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              src="https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/swiper-pic3.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperItem>
          {/* Add more SwiperItems as needed */}
        </Swiper>

        {/* Registration Sections */}
        {[
          {
            title: "初赛入口",
            subTitle: "Preliminary Round",
            deadline: "2025-03-01",
            competition: "2025-03-15 至 2025-03-20",
            bgSrc:
              "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/card-1.jpg",
          },
          {
            title: "复赛入口",
            subTitle: "Semi-final Round",
            deadline: "2025-04-01",
            competition: "2025-04-15 至 2025-04-20",
            bgSrc:
              "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/card-2.jpg",
          },
          {
            title: "决赛入口",
            subTitle: "Final Round",
            deadline: "2025-05-01",
            competition: "2025-05-15 至 2025-05-20",
            bgSrc:
              "https://objectstorageapi.hzh.sealos.run/8mmd8voe-dance-reverie-public/card-3.jpg",
          },
        ].map((section, index) => (
          <View
            className="round-card"
            key={index}
            style={{
              margin: "20px",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* 背景图片 */}
            <Image
              src={section.bgSrc}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* 内容区域 */}
            <View
              className="registration-content"
              style={{
                position: "relative",
                zIndex: 2,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                margin: "-20px",
                padding: "20px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      marginBottom: "2px",
                    }}
                  >
                    {section.title}
                  </Text>
                  <Text style={{ color: "#D4AF37", fontSize: "12px" }}>
                    {section.subTitle}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#D4AF37",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "20px",
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    报名
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    display: "block",
                  }}
                >
                  报名截止: {section.deadline}
                </Text>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                  }}
                >
                  比赛时间: {section.competition}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
