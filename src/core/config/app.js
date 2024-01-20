const config = {
  development: {
    path: "/",
    baseUrl: `http://localhost:${window.location.port}`,
    requestUrl: "/",
  },
  production: {
    path: "/projects/hus/",
    baseUrl: "https://ltdeveloper.com.br",
    requestUrl: "/",
  },
};

export const appConfig = config[process.env.NODE_ENV];
