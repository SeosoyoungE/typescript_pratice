//enum 선언 - 같은유형을 하나로 묶는 요소
//spring enum(문자형 열거) 선언법
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var studentID = 12345;
var studentName = "soyoung";
var courseCompleted = false;
var student1 = {
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
    gender: GenderType.Male
};
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: "soyoung",
        courseCompleted: false,
        gender: GenderType.Female
    };
}
//매개변수 타입으로도 사용가능한 interface
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
