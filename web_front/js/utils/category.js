// 文章类型管理

var category = {
    // 获取文章数据类型
    show: function (callback) {

        $.get(APIURLS.category_show, function (res) {
            callback(res);

        })
    },


}