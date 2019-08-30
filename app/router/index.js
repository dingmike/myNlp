const router = require("koa-router")();

const apiv1 = require("./modules/apiv1");

// const web = require("./web");

router.use("/apiv1", apiv1.routes(), apiv1.allowedMethods({ throw: true }));
// router.use("/web", web.routes(), web.allowedMethods({ throw: true }));

module.exports = router;
