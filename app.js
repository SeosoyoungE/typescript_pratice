//syntax
var studentID = 12345;
var studentName = "soyoung";
var courseCompleted = false;
var student1 = {
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
};
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: "soyoung",
        courseCompleted: false,
    };
}
//매개변수 타입으로도 사용가능한 interface
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
