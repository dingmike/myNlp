// common
const shortid = require("shortid");
const axios = require("axios");
// util plugin
const validator = require("../../util/validator");
const parse = require("../../util/parse");

const mysqlModel = require("../../mysqlModel");

const robotService = require("../../service/commnon/bot.service");

class Controller {
  // https://bookshelfjs.org/api.html#Model-instance-fetchPage // bookshelfjs文档
  /*
  * 说明
  * 举例
  * */
/*    Car
.query(function (qb) {
        qb.innerJoin('manufacturers', 'cars.manufacturer_id', 'manufacturers.id');
        qb.groupBy('cars.id');
        qb.where('manufacturers.country', '=', 'Sweden');
    })
.orderBy('-productionYear') // Same as .orderBy('cars.productionYear', 'DESC')
.fetchPage({
               pageSize: 15, // Defaults to 10 if not specified
               page: 3, // Defaults to 1 if not specified

               // OR
               // limit: 15,
               // offset: 30,

               withRelated: ['engine'] // Passed to Model#fetchAll
           })
.then(function (results) {
        console.log(results); // Paginated results object with metadata example below
    })*/


  // 测试robot
  async robotMsg(ctx, next) {
    let body = validator(ctx, ['msg']);
    if (body.error) {
      return (ctx.body = {
        code: 400,
        msg: body.error
      });
    }
    let doc = await robotService.onTurn(body)

    ctx.body = {
      code: 200,
      data: doc,
    };
  }
}


let ins = new Controller();
module.exports = ins;
