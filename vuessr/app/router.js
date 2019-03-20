'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/:locale?', controller.home.index.index);

};