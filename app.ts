//syntax
let studentID: number = 12345;
let studentName: string = "soyoung";
let courseCompleted: boolean = false;

let student1={
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
}
interface Student {
  readonly studentID: number;
  studentName?: string; //optional
  courseCompleted: boolean;
  //method정의법
  //addComment(comment:string):string
  addComment?:(comment:string)=>string
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
  };
}

//매개변수 타입으로도 사용가능한 interface
function saveStudentDetails(student:Student):void{

}
saveStudentDetails(student1)