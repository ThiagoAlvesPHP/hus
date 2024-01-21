const config = {
  development: {
    path: "/",
    baseUrl: `http://localhost:${window.location.port}`,
    requestUrl: "http://localhost/WP/hus/wp-json/",
  },
  production: {
    path: "/projects/hus/",
    baseUrl: "https://ltdeveloper.com.br",
    requestUrl: "/",
  },
};

export const appConfig = config[process.env.NODE_ENV];
