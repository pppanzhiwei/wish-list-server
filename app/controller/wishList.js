'use strict';

const Controller = require('egg').Controller;

const addRule = {
  content: 'string',
  date: 'string',
  complete: 'boolean',
};

const delRule = {
  id: 'number',
};
const updateRule = {
  id: 'number',
};

class WishController extends Controller {
  async setList() {
    const { ctx } = this;
    const res = await ctx.service.wishList.setWishList();
    ctx.body = {
      wishList: res,
    };
    ctx.status = 200;
  }
  async addWish() {
    const { ctx } = this;
    ctx.validate(addRule, ctx.request.body);
    const { content, date, complete } = ctx.request.body;
    const res = await ctx.service.wishList.addWish({ content, date, complete });
    ctx.body = {
      id: res,
    };
    ctx.status = 200;
  }
  async delWish() {
    const { ctx } = this;
    ctx.validate(delRule, ctx.request.body);
    const { id } = ctx.request.body;
    await ctx.service.wishList.delWish(Number(id));
    const res = await ctx.service.wishList.setWishList();
    ctx.body = {
      wishList: res,
    };
    ctx.status = 200;
  }
  async updateWish() {
    const { ctx } = this;
    console.log('测试完成');
    console.log(ctx.request.body);
    ctx.validate(updateRule, ctx.request.body);
    const { id } = ctx.request.body;
    await ctx.service.wishList.updateWish(Number(id));
    ctx.status = 200;
  }
}

module.exports = WishController;
