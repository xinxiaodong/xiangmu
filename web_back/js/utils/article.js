var article = {
    // callback 是调用article.show时传入的一个函数
    // 用这个函数来做具体的处理数据的工作
    show: function (obj, callback) {
        console.log('article.show的参数', obj)
        $.get(APIURLS.article_show, { page: obj.page, type: obj.type, state: obj.status }, function (res) {
            callback(res)
        })
    },
    del: function (id, callback) {
        $.get(APIURLS.article_del, { 'id': id }, function (res) {
            console.log(res)
        })
    },
    getDetail: function (id, callback) {
        console.log('getDetail的参数', id)
        $.get(APIURLS.article_show, { id: id }, function (res) {
            callback(res)
        })
    }
}