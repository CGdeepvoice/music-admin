import axios from "axios";
import router from "../router";

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true; // 允许跨域

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 不同环境url不同
if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "http://localhost:8888";
} else {
  axios.defaults.baseURL = "http://localhost:8888";
}

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 未登录
        case 401:
          router.replace({
            path: "/",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;
        case 403:
          // forbidden
          setTimeout(() => {
            router.replace({
              path: "/",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;
        case 404:
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

// 封装GET方法
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function deletes(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
