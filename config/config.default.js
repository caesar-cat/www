'use strict';
const path = require('path')
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530843483749_5329';

  // add your config here
  config.middleware = [];
  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG'
  }
  config.view = {
    root: path.join(appInfo.baseDir, 'app/local_view'),
    mapping: {
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
  };
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public')
  }
  return config;
};
