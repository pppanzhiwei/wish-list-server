'use strict';
const Service = require('egg').Service;

class WishService extends Service {
  async setWishList() {
    const { app } = this;
    const res = await app.mysql.query('select * from wishList order by id desc');
    return res;
  }
  async addWish(wish) {
    const { app } = this;
    const res = await app.mysql.insert('wishlist', {
      content: wish.content,
      date: wish.date,
      complete: (wish.complete) === true ? 1 : 0,
    });
    return res.affectedRows === 1 ? res.insertId : false;
  }
  async delWish(uid) {
    const { app } = this;
    const res = await app.mysql.delete('wishlist', {
      id: uid,
    });
    return res.affectedRows === 1;
  }
  async updateWish(uid) {
    const { app } = this;
    const row = {
      id: uid,
      complete: 1,
    };
    const res = await app.mysql.update('wishlist', row);
    return res.affectedRows === 1;
  }
}

module.exports = WishService;
