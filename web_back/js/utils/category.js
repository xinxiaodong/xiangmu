// 文章类型管理
var baseUrl = 'http://localhost:8000/';

var category = {
    // 获取文章数据类型
    show: function (callback) {

        $.get(baseUrl + 'admin/category_search', function (res) {
            callback(res);

        })
    }
}