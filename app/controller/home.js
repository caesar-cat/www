'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.logger.debug('debug info');
    await this.ctx.render('home');
  }
}

module.exports = HomeController;
