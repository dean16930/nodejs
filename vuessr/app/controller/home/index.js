'usestrict';
const Controller = require('../../core/baseController');
module.exports = class IndexController extends Controller {
  async index() {
    //const result = this.service.article.getArtilceList();
    const renderData = {
      locale: this.locale
    };

    await this.ctx.render(`${this.deviceType.name}/index/index.js`, renderData);
  }

  async list() {
    // this.ctx.body = this.service.article.getArtilceList(this.ctx.query);
  }

  async detail() {
    const id = this.ctx.query.id;
  }
};