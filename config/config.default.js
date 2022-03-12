/* eslint valid-jsdoc: "off" */

'use strict';

exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true,
  },
  domainWhiteList: [ '*' ], // 配置白名单
};
exports.cors = {
  origin: '*',
  credentials: true, // 允许 Cookie 跨域
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
};
exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'pzw199745',
    database: 'wishlistdatabase',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
