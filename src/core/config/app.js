const config = {
  development: {
    path: "/",
    baseUrl: `http://localhost:${window.location.port}`,
    requestUrl: "https://wordpress.ltdeveloper.com.br/wp-json/",
  },
  production: {
    path: "/projects/hus/",
    baseUrl: "https://ltdeveloper.com.br",
    requestUrl: "https://wordpress.ltdeveloper.com.br/wp-json/",
  },
};

export const appConfig = config[process.env.NODE_ENV];
