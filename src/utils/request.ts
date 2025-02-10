import Taro from "@tarojs/taro";

// 添加请求拦截器
const requestInterceptor = function (chain) {
  const requestParams = chain.requestParams;

  // 从存储中获取 token
  const token = Taro.getStorageSync("token");

  // 添加 token 到请求头
  if (token) {
    requestParams.header = {
      ...requestParams.header,
      Authorization: `Bearer ${token}`,
    };
  }

  return chain.proceed(requestParams);
};

// 注册拦截器
Taro.addInterceptor(requestInterceptor);

// 封装请求方法
export const request = async (options: any) => {
  try {
    const response = await Taro.request(options);

    // 处理 token 过期的情况
    if (response.statusCode === 401) {
      // 清除本地存储的 token
      await Taro.removeStorage({ key: "token" });
      // 跳转到登录页
      Taro.redirectTo({
        url: "/pages/profile/index",
      });
      throw new Error("token expired");
    }

    return response;
  } catch (error) {
    console.error("请求错误:", error);
    throw error;
  }
};
