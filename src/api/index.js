import axios from "axios";
axios.defaults.withCredentials = true;
const $axios = axios.create({
  // 设置超时时间
  timeout: 50000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_FREFIX_URL,
});

$axios.interceptors.request.use(
  (config) => {
    config.url = "/api" + config.url
    return config
  }
)

export default {
  post(url, data) {
    return $axios({
      method: "post",
      url,
      data: {
        ...data,
      },
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  },
  get(url, params = {}) {
    return $axios({
      method: "get",
      url,
      headers: {
        "x-user-type": 2,
      },
      params,
    });
  },
}