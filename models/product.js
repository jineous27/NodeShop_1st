// product와 관련된 파일들을 저장하는 곳이다//

const mongoose = require("mongoose");
// 몽그스안에 스키마라는 함수가 있다.  // 그 안에 스카마를 정의하면 되겠지. name/price 추가하고 싶으면 나중에 추가
const productSchema = mongoose.Schema({
    name: String,
    price: Number
});






// 몽그스라는 모델에 프로덕트라는 폴더가 생길 것이고, 그 안에 프로덕트 스키마내용이 담길것이다. 이 것들을 모듈화시켜서 내보낸다.

module.exports = mongoose.model("product", productSchema);