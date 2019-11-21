


var user = {
    logout: function (callback) {
        // 2. 调用接口
        $.post(APIURLS.user_logout, function (res) {
            callback(res);
        })
    },
    login: function (userName, userPassword, callback) {

        $.post(APIURLS.user_login, {
            user_name: userName,
            password: userPassword
        }, function (res) {
            callback(res);
        })
    },

    getInfo: function (callback) {
        $.get(APIURLS.user_getInfo, function (res) {
            callback(res)
        })
    }

}



