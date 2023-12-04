//enum 선언 - 같은유형을 하나로 묶는 요소
//spring enum(문자형 열거) 선언법
enum GenderType{
  Male ='male',
  Female='female'
}

let studentID: number = 12345;
let studentName: string = "soyoung";
let courseCompleted: boolean = false;

let student1={
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
    gender: 'male'
}
interface Student {
  readonly studentID: number;
  studentName?: string; 
  courseCompleted: boolean;
  // gender: GenderType; enum사용
  gender: 'male'|'female' //리터럴타입 사용
  //addComment(comment:string):string
  addComment?:(comment:string)=>string
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "soyoung",
    courseCompleted: false,
    gender: 'female'
  };
}

//매개변수 타입으로도 사용가능한 interface
function saveStudentDetails(student:Student):void{

}
saveStudentDetails(student1)