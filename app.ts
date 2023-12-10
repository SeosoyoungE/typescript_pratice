//type guard
type StrOrNum=string|number;
let numberPrice:number;

//타입가드에 의한 타입에러
const setPrice1=(price:StrOrNum)=>{
  numberPrice=price;
}


//if문을 통해 type확인후 실행
const setPrice2=(price:StrOrNum)=>{
  if(typeof price==='number'){
    numberPrice=price;
}
}