import { useLaunch } from "@tarojs/taro";
import { PropsWithChildren } from "react";

import "./utils/request"; // 引入请求拦截器

import "./app.scss";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
