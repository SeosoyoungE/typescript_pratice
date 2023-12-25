//class 사용법
var user = /** @class */ (function () {
    function user(name, age, job, hourlyRate) {
        var _this = this;
        this.userInfo = function () {
            console.log("".concat(_this.name, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, ", \uC9C1\uC5C5\uC740 ").concat(_this.job));
        };
        this.name = name;
        this.age = age;
        this.job = job;
        this.hourlyRate = hourlyRate;
    }
    return user;
}());
var user1 = new user('soyoung', 25, '주니어개발자', 10000);
user1.userInfo();
