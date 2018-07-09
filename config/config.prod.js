'use strict';
const path = require('path')
module.exports = appInfo => {
  const config = exports = {};
  config.view = {
    root: path.join(appInfo.baseDir, 'app/prod_view'),
    mapping: {
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
  };
  return config;
};
