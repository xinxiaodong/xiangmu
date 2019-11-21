var baseUrl = 'http://localhost:8000/';


var user = {
    logout: function (callback) {
        // 2. 调用接口
        $.post(baseUrl + 'admin/logout', function (res) {
            callback(res);
        })
    },
    login: function (userName, userPassword, callback) {

        $.post(baseUrl + 'admin/login', {
            user_name: userName,
            password: userPassword
        }, function (res) {
            callback(res);
        })
    },

    getInfo: function (callback) {
        $.get(baseUrl + 'admin/getuser', function (res) {
            callback(res)
        })
    }

}



