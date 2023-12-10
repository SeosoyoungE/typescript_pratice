//class 사용법
var user = /** @class */ (function () {
    function user() {
        var _this = this;
        this.userInfo = function () {
            console.log("".concat(_this.name, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, ", \uC9C1\uC5C5\uC740 ").concat(_this.job));
        };
    }
    return user;
}());
var user1 = new user();
user1.age = 25;
user1.name = 'soyoung';
user1.userInfo();
