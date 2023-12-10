var numberPrice;
//타입가드에 의한 타입에러
var setPrice1 = function (price) {
    numberPrice = price;
};
//if문을 통해 type확인후 실행
var setPrice2 = function (price) {
    if (typeof price === 'number') {
        numberPrice = price;
    }
};
