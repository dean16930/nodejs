'use strict';
const currentLocale = Symbol('Context#currentLocale');
const USERTOKEN = Symbol('Context#USERTOKEN');

module.exports = {
  // 获取国际化语言
  get lang() {
    const cookieLocale = this.cookies.get('locale', { httpOnly: false, signed: false });
    //语言白名单数据池
    const localeArr = ['cn', 'en'];
    let paramsLocale = this.params.locale;
    if (paramsLocale !== 'null' && paramsLocale != undefined) {
      if (localeArr.indexOf(paramsLocale) > -1) {
        // 如果在白名单,采用传入数据，否则使用默认语言
        this[currentLocale] = paramsLocale;
      } else {
        this[currentLocale] = 'cn';
      }
      if (cookieLocale && cookieLocale !== this[currentLocale]) {
        this.cookies.set('locale', this[currentLocale], { httpOnly: false, signed: false });
      }
    } else {
      if (!cookieLocale) {
        this[currentLocale] = 'cn';
        this.cookies.set('locale', this[currentLocale], { httpOnly: false, signed: false });
      } else {
        this[currentLocale] = cookieLocale;
      }
    }
    return this[currentLocale];
  },

  /**
   * fetch API请求方法封装
   * @param {String} method  请求方式
   * @param {String} url  请求接口地址
   * @param {Object} options  请求{method, data, headers..., token}
   * @return {Object} 
   */
  async fetch(method, url, options = {}) {
    try {
      // 根据本地化语种请求数据
      let currentLocale = this.lang;
      if (currentLocale === 'cn') currentLocale = 'zh-CN';
      if (currentLocale === 'hant') currentLocale = 'zh-Hant';

      // 根据设备类型请求数据
      const deviceAgent = this.headers['user-agent'].toLowerCase();
      const isMobile = deviceAgent.match(/(iphone|ipad|android)/);
      const deviceType = isMobile ? 4 : 0;
      const defaultOptions = {
        method: method,
        dataType: 'json',
        // Boolean 如果为 true 即使在POST情况下，也会强制将options.data以 querystringstringify处理后拼接到url的query参数上
        dataAsQueryString: options.dataAsQueryString || false,
        timeout: 50000,
        headers: {
          'language-code': currentLocale,
          'ClientType': deviceType,
          'Content-Type': 'application/json'
        }
      };
      defaultOptions.headers.Authorization = this.cookies.get('token', { httpOnly: true, encrypt: true, signed: false }) || ''
      const opts = { ...defaultOptions, ...options };
      const result = await this.curl(url, opts);

      /**
       * 调试模式日志输出
       */
      if (process.env.npm_config_debug) {
        console.log(`\x1B[33m == ${method}----------->  请求主站START ------------------
                  \n \u001b[34m url=>\u001b[39m ${url}
                      \n \u001b[34m 请求头信息=>\u001b[39m ${JSON.stringify(defaultOptions)}
                  \n \u001b[34m 请求参数=>\u001b[39m ${JSON.stringify(options)}
                  \n \u001b[34m ${method}请求主站返回值==> \u001b[39m ${JSON.stringify(result.data)}
                  \n \x1B[33m -----------------END------------------------------------------- \x1B[39m
              `);
      }
      return result;
    } catch (error) {
      this.logger.error(error)
    }
  }
}
