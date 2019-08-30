let bookshelf = require("./../plugin").newscnnMysql;

/*const CnnNews = bookshelf.Model.extend({
    tableName: "nlp",
});
const CnnAd = bookshelf.Model.extend({
    tableName: "cnn_ad",
});
const SysUser = bookshelf.Model.extend({
    tableName: "sys_user",
});*/
const Nlp = bookshelf.Model.extend({
  tableName: "nlp",
});
module.exports = {
  Nlp,
  // CnnNews,
  // SysUser,
  // CnnAd
};
