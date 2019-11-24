// 接口的地址
var baseUrl = 'http://localhost:8000/';

// 把所有要用的接口地址进行集中管理
var APIURLS = {
    user_login: baseUrl + 'admin/login',
    user_logout: baseUrl + 'admin/logout',
    user_getInfo: baseUrl + 'admin/getuser',
    category_show: baseUrl + 'admin/category_search',
    category_del: baseUrl + 'admin/category_delete',
    category_add: baseUrl + 'admin/category_add',
} 