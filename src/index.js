// var val1 = "var関数";
// console.log(val1);

// //var変数は上書き可能

// val1 = "var関数を上書き";
// console.log(val1);

/**var　関数再宣言 */

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を上書き";

// const val3 = "const変数";
// console.log(val3);

// // val3 = 'const変数上書き';

// const val3 ='const変数再宣言'

// constで定義したプロパティの変更が可能
// const val4 = {
//   name: "naoya",
//   age: 28
// };

// val4.name = "jake";
// val4.address = "兵庫県";
// console.log(val4);

// constで定義したプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "尚也";
// const age = 25;
// // 「私の名前は尚也です。年齢は２５歳です」
// // 従来の方法
// const messege1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(messege1);

// // テンプレート文字列を用いた方法
// const messege2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(messege2);

// アロー関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => str;
// console.log(func2("funk"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "naoya",
//   age: 25
// };
// const { name, age } = myProfile;

// const messege1 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(messege1);

// const myProfile = ["尚也", 25];

// const messege3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// // console.log(messege3);

// const [name, age] = myProfile;
// const messege4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(messege4);

// デフォルト値

// const sayHello = (name = 'ゲスト') => {
//   console.log(`こんにちは！${name}さん`);
// };
// sayHello('尚也');

// スプレッド構文...

// 配列の展開
// const arr1 = [1, 2];
// console.log(arrl);
// console.log(...arrl);

// const sumFunc = (num1, num2) => console.log(num1 - num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr4);
// arr8[0] = 100;
// console.log(arr4);

// mapやfilterを使った配列の処理

// const nameArr = ["田中", "山田", "尚也"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// 新しい配列を作成する方法
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// 繰り返し実行する処理
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// fileter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "尚也") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// 三項演算子
// ある条件？条件がtrueのとき；条件がfalseのとき
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を代入して下さい";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
// };
// console.log(checkSum(30, 60));

// 論理演算子の本当の意味を知ろう！ && ||
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('1か2はtrueです');
// }
// if (flag1 && flag2) {
//   console.log('１かつ２はtrueになります');
// }

// ||は、左側がfalseとなるとき右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&はtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
