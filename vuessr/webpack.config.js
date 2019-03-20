'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  plugins: {
    imagemini: false
  },
  alias: {
    '@asset': 'app/web/asset',
    '@component': 'app/web/component',
    '@framework': 'app/web/framework',
    '@page': 'app/web/page'
  },
  module: {
    rules: [
      { scss: true },
      { sass: true }
    ]
  }
};