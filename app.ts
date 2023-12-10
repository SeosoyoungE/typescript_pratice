//함수의 타입선언 방법: 변수타입, 반환타입

//선택적 파라미터로 만들고 값이 들어오지 않았을때 undefined가 
//출력되는걸 방지하기위해 기본매개변수 선언(선택적표시인 ?삭제)
function greet(message:string='Hi',name:string='user!'):void{
  console.log(`${message}, ${name}`);
}

//함수 호출 결과
greet(); //Hi, user!
greet('Hello'); //Hello, user!
greet('Hello','soyoung'); //Hello, user!