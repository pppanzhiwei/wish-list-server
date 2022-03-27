'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/wishList', controller.wishList.setList); // 查询列表
  router.delete('/api/wishList', controller.wishList.delWish); // 删除愿望
  router.put('/api/wishList', controller.wishList.updateWish); // 更新愿望
  router.post('/api/wishList', controller.wishList.addWish); // 添加愿望
};
