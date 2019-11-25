// 文章评论

var comment = {
    add: function (name, content, article_id, callback) {
        $.post(APIURLS.comment_add, {
            'name': name,
            'content': content,
            'aritcle_id': article_id,
        },
            function (res) {
                callback(res)
            })
    },
    get: function (article_id, callback) {
        $.get(APIURLS.comment_get, {
            'aritcle_id': article_id
        }, function (res) {
            callback(res)
        })
    }
}