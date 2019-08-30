const knex = require("knex");
const bookshelf = require('bookshelf');
// https://bookshelfjs.org/文档 https://knexjs.org/

function createConnection(config) {
    let bookshelfClient = bookshelf(knex(config));
    bookshelfClient.plugin('pagination'); // fetchPage
    // Enable it on your models let User = bookshelf.Model.extend({ tableName: 'users', uuid: true })
    bookshelfClient.plugin('bookshelf-uuid'); // 自动为模型生成uuid
    return bookshelfClient;
}

module.exports = {
    createConnection
};
