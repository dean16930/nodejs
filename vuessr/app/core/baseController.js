'use strict';
const { Controller } = require('egg');

class BaseController extends Controller {
    // 获取当前访问设备，用以切换pc/wap端模板
    get deviceType() {
        const { ctx } = this;
        const deviceAgent = ctx.headers['user-agent'].toLowerCase();
        const agentID = deviceAgent.match(/(iphone|ipad|android)/);
        if (agentID) {
            return {
                name: 'wap',
                code: 4
            };
        } else {
            return {
                name: 'pc',
                code: 0
            };
        }
    }

    // 获取当前国际语言，用以切换不同语言模板
    get locale() {
        const { ctx } = this;
        return ctx.lang;
    }

    // 获取用户信息
    get userInfo() {
        const { ctx } = this
        const userInfo = ctx.session.userInfo ? ctx.session.userInfo : ''
        return userInfo
    }
};

module.exports = BaseController;
