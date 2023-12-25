//class 사용법
class user{
  name:string;
  age:number;
  job:string;
  hourlyRate:number;
  constructor(name:string,
    age:number,
    job:string,
    hourlyRate:number){
      this.name=name;
      this.age=age;
      this.job=job;
      this.hourlyRate=hourlyRate;

  }

  userInfo=():void=>{
    console.log(`${this.name}의 나이는 ${this.age}, 직업은 ${this.job}`)
  }
}
let user1=new user('soyoung',25,'주니어개발자',10000);
user1.userInfo();