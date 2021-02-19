import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller, middleware } = app;
    const auth = middleware.auth;
    const api = '/api/v1';

    // 视频
    router.get(`${api}/animates`, auth(100), controller.backend.animate.query);
    router.post(`${api}/animates`, auth(100), controller.backend.animate.create);
    router.put(`${api}/animates`, auth(100), controller.backend.animate.updateMany);
    router.delete(`${api}/animates`, auth(100), controller.backend.animate.destroyMany);
    router.get(`${api}/animates/:id`, auth(100), controller.backend.animate.info);
    router.put(`${api}/animates/:id`, auth(100), controller.backend.animate.update);
    router.delete(`${api}/animates/:id`, auth(100), controller.backend.animate.destroy);

    // 漫画
    router.get(`${api}/comics`, auth(100), controller.backend.comic.query);
    router.post(`${api}/comics`, auth(100), controller.backend.comic.create);
    router.put(`${api}/comics`, auth(100), controller.backend.comic.updateMany);
    router.delete(`${api}/comics`, auth(100), controller.backend.comic.destroyMany);
    router.get(`${api}/comics/:id`, auth(100), controller.backend.comic.info);
    router.put(`${api}/comics/:id`, auth(100), controller.backend.comic.update);
    router.delete(`${api}/comics/:id`, auth(100), controller.backend.comic.destroy);

    // 季数
    router.get(`${api}/seasons`, auth(100), controller.backend.season.query);
    router.post(`${api}/seasons`, auth(100), controller.backend.season.create);
    router.put(`${api}/seasons`, auth(100), controller.backend.season.updateMany);
    router.delete(`${api}/seasons`, auth(100), controller.backend.season.destroyMany);
    router.get(`${api}/seasons/:id`, auth(100), controller.backend.season.info);
    router.put(`${api}/seasons/:id`, auth(100), controller.backend.season.update);
    router.delete(`${api}/seasons/:id`, auth(100), controller.backend.season.destroy);

    // 剧集
    router.get(`${api}/eposides`, auth(100), controller.backend.eposide.query);
    router.post(`${api}/eposides`, auth(100), controller.backend.eposide.create);
    router.put(`${api}/eposides`, auth(100), controller.backend.eposide.updateMany);
    router.delete(`${api}/eposides`, auth(100), controller.backend.eposide.destroyMany);
    router.get(`${api}/eposides/:id`, auth(100), controller.backend.eposide.info);
    router.put(`${api}/eposides/:id`, auth(100), controller.backend.eposide.update);
    router.delete(`${api}/eposides/:id`, auth(100), controller.backend.eposide.destroy);

    // 文章
    router.get(`${api}/posts`, auth(100), controller.backend.post.query);
    router.post(`${api}/posts`, auth(100), controller.backend.post.create);
    router.put(`${api}/posts`, auth(100), controller.backend.post.updateMany);
    router.delete(`${api}/posts`, auth(100), controller.backend.post.destroyMany);
    router.get(`${api}/posts/:id`, auth(100), controller.backend.post.info);
    router.put(`${api}/posts/:id`, auth(100), controller.backend.post.update);
    router.delete(`${api}/posts/:id`, auth(100), controller.backend.post.destroy);

    // 轻博客
    router.get(`${api}/blogs`, auth(100), controller.backend.blog.query);
    router.post(`${api}/blogs`, auth(100), controller.backend.blog.create);
    router.put(`${api}/blogs`, auth(100), controller.backend.blog.updateMany);
    router.delete(`${api}/blogs`, auth(100), controller.backend.blog.destroyMany);
    router.get(`${api}/blogs/:id`, auth(100), controller.backend.blog.info);
    router.put(`${api}/blogs/:id`, auth(100), controller.backend.blog.update);
    router.delete(`${api}/blogs/:id`, auth(100), controller.backend.blog.destroy);

    // 分类
    router.get(`${api}/category`, auth(100), controller.backend.category.query);
    router.post(`${api}/category`, auth(100), controller.backend.category.create);
    router.put(`${api}/category`, auth(100), controller.backend.category.updateMany);
    router.delete(`${api}/category`, auth(100), controller.backend.category.destroyMany);
    router.get(`${api}/category/:id`, auth(100), controller.backend.category.info);
    router.put(`${api}/category/:id`, auth(100), controller.backend.category.update);
    router.delete(`${api}/category/:id`, auth(100), controller.backend.category.destroy);
    router.get(`${api}/category/query/:type`, auth(100), controller.backend.category.queryByType);

    // 用户
    router.get(`${api}/users`, auth(100), controller.backend.user.query);
    router.post(`${api}/users`, auth(100), controller.backend.user.create);
    router.put(`${api}/users`, auth(100), controller.backend.user.updateMany);
    router.delete(`${api}/users`, auth(100), controller.backend.user.destroyMany);
    router.get(`${api}/users/:id`, auth(100), controller.backend.user.info);
    router.put(`${api}/users/:id`, auth(100), controller.backend.user.update);
    router.delete(`${api}/users/:id`, auth(100), controller.backend.user.destroy);

    // 商品
    router.get(`${api}/shop`, auth(100), controller.backend.shop.query);
    router.post(`${api}/shop`, auth(100), controller.backend.shop.create);
    router.put(`${api}/shop`, auth(100), controller.backend.shop.updateMany);
    router.delete(`${api}/shop`, auth(100), controller.backend.shop.destroyMany);
    router.get(`${api}/shop/:id`, auth(100), controller.backend.shop.info);
    router.put(`${api}/shop/:id`, auth(100), controller.backend.shop.update);
    router.delete(`${api}/shop/:id`, auth(100), controller.backend.shop.destroy);

    // 激活码
    router.get(`${api}/key`, auth(100), controller.backend.key.query);
    router.post(`${api}/key`, auth(100), controller.backend.key.create);
    router.put(`${api}/key`, auth(100), controller.backend.key.updateMany);
    router.delete(`${api}/key`, auth(100), controller.backend.key.destroyMany);
    router.get(`${api}/key/:id`, auth(100), controller.backend.key.info);
    router.put(`${api}/key/:id`, auth(100), controller.backend.key.update);
    router.delete(`${api}/key/:id`, auth(100), controller.backend.key.destroy);

    // 订单
    router.get(`${api}/order`, auth(100), controller.backend.order.query);
    router.post(`${api}/order`, auth(100), controller.backend.order.create);
    router.delete(`${api}/order`, auth(100), controller.backend.order.destroyMany);
    router.get(`${api}/order/:id`, auth(100), controller.backend.order.info);
    router.delete(`${api}/order/:id`, auth(100), controller.backend.order.destroy);

    // 评论
    router.get(`${api}/comments`, auth(100), controller.backend.comment.query);
    router.post(`${api}/comments`, auth(100), controller.backend.comment.create);
    router.put(`${api}/comments`, auth(100), controller.backend.comment.updateMany);
    router.delete(`${api}/comments`, auth(100), controller.backend.comment.destroyMany);
    router.get(`${api}/comments/:id`, auth(100), controller.backend.comment.info);
    router.put(`${api}/comments/:id`, auth(100), controller.backend.comment.update);
    router.delete(`${api}/comments/:id`, auth(100), controller.backend.comment.destroy);

    // 评分
    router.get(`${api}/rates`, auth(100), controller.backend.rate.query);
    router.post(`${api}/rates`, auth(100), controller.backend.rate.create);
    router.put(`${api}/rates`, auth(100), controller.backend.rate.updateMany);
    router.delete(`${api}/rates`, auth(100), controller.backend.rate.destroyMany);
    router.get(`${api}/rates/:id`, auth(100), controller.backend.rate.info);
    router.put(`${api}/rates/:id`, auth(100), controller.backend.rate.update);
    router.delete(`${api}/rates/:id`, auth(100), controller.backend.rate.destroy);

    // 弹幕
    router.get(`${api}/danmus`, auth(100), controller.backend.danmu.query);
    router.post(`${api}/danmus`, auth(100), controller.backend.danmu.create);
    router.put(`${api}/danmus`, auth(100), controller.backend.danmu.updateMany);
    router.delete(`${api}/danmus`, auth(100), controller.backend.danmu.destroyMany);
    router.get(`${api}/danmus/:id`, auth(100), controller.backend.danmu.info);
    router.put(`${api}/danmus/:id`, auth(100), controller.backend.danmu.update);
    router.delete(`${api}/danmus/:id`, auth(100), controller.backend.danmu.destroy);

    // 举报
    router.get(`${api}/reports`, auth(100), controller.backend.report.query);
    router.post(`${api}/reports`, auth(100), controller.backend.report.create);
    router.put(`${api}/reports`, auth(100), controller.backend.report.updateMany);
    router.delete(`${api}/reports`, auth(100), controller.backend.report.destroyMany);
    router.get(`${api}/reports/:id`, auth(100), controller.backend.report.info);
    router.put(`${api}/reports/:id`, auth(100), controller.backend.report.update);
    router.delete(`${api}/reports/:id`, auth(100), controller.backend.report.destroy);

    // 配置
    router.get(`${api}/config`, auth(100), controller.backend.config.query);
    router.post(`${api}/config`, auth(100), controller.backend.config.create);
    router.get(`${api}/init`, auth(0), controller.backend.config.existAdmin);
    router.post(`${api}/init`, auth(0), controller.backend.config.initAdmin);

    // 文件相关
    router.post(`${api}/image`, auth(100), controller.backend.uploads.uploadImg);
    router.get(`${api}/image/:type`, auth(100), controller.backend.uploads.queryImg);
    router.delete(`${api}/image`, auth(100), controller.backend.uploads.deleteImg);

    // 记录
    router.get(`${api}/data/all`, auth(100), controller.backend.data.query);
    router.get(`${api}/data/today`, auth(100), controller.backend.data.todayData);
    router.get(`${api}/data/search`, auth(100), controller.backend.data.search);
    router.get(`${api}/data/work`, auth(100), controller.backend.data.workData);
    router.get(`${api}/data/sort`, auth(100), controller.backend.data.activeSort);

    // 工具
    router.post(`${api}/tools/replace`, auth(100), controller.backend.tools.replace);
    router.post(`${api}/tools/downimg`, auth(100), controller.backend.tools.downImg);
    router.post(`${api}/tools/upload`, auth(100), controller.backend.tools.upload);

    // 资源列表
    router.get(`${api}/clouds`, auth(100), controller.backend.cloud.query);
    router.delete(`${api}/clouds`, auth(100), controller.backend.cloud.destroyMany);
    router.get(`${api}/clouds/:id`, auth(100), controller.backend.cloud.info);
    router.delete(`${api}/clouds/:id`, auth(100), controller.backend.cloud.destroy);
    router.post(`${api}/clouds/save`, auth(100), controller.backend.cloud.save);

    // 来源列表
    router.get(`${api}/sources`, auth(100), controller.backend.source.query);
    router.post(`${api}/sources`, auth(100), controller.backend.source.create);
    router.put(`${api}/sources`, auth(100), controller.backend.source.updateMany);
    router.delete(`${api}/sources`, auth(100), controller.backend.source.destroyMany);
    router.get(`${api}/sources/:id`, auth(100), controller.backend.source.info);
    router.put(`${api}/sources/:id`, auth(100), controller.backend.source.update);
    router.delete(`${api}/sources/:id`, auth(100), controller.backend.source.destroy);
    router.post(`${api}/sources/import`, auth(100), controller.backend.source.import);

    // 操作记录列表
    router.get(`${api}/records`, auth(100), controller.backend.record.query);
    router.delete(`${api}/records`, auth(100), controller.backend.record.destroyMany);
    router.delete(`${api}/records/:id`, auth(100), controller.backend.record.destroy);
};
