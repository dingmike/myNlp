const router = require("koa-router")();
const testController = require("../../controller/api/test.controller");



// 測試機器人
router.get('/robot/msg', testController.robotMsg);


module.exports = router;
