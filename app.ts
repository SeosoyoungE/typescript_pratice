//syntax
let studentID: number = 12345;
let studentName: string = "soyoung";
let courseCompleted: boolean = false;

interface Student {
  studentID: number;
  studentName: string;
  courseCompleted: boolean;
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
  };
}
