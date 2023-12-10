//class 사용법
class user{
  name:string;
  age:number;
  job:string;

  userInfo=():void=>{
    console.log(`${this.name}의 나이는 ${this.age}, 직업은 ${this.job}`)
  }
}
let user1=new user();
user1.age=25;
user1.name='soyoung'
user1.userInfo();