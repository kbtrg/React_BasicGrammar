/*第3回課題*/
document.write(
  "------------------------------------------------------------<br><br>"
);
document.write("**第3回課題** <br><br>");
/*constは再宣言・再代入ともに不可能*/
/*letは再宣言不可能、再代入可能*/
/*varは再宣言・再代入ともに可能*/
let a = 1;
let b = 2;
let c = 3;

document.write(`a=1, b=2, c=3 とします.<br><br>`);

/*四則演算*/
document.write("【四則演算】<br>");
document.write(`a + b = ${a + b} <br>`); //a+b=3
document.write(`a - b = ${a - b} <br>`); //a-b=-1
document.write(`a * b = ${a * b} <br>`); //a+b=2
document.write(`a / b = ${a / b} <br>`); //a+b=0.5
document.write(`++a = ${++a} <br>`); //a++=2
document.write(`--a = ${--a} <br><br>`); //a--=1 前の結果から1引く

/*比較演算子*/
document.write("【比較演算子】<br>");
document.write(`a === a -> ${a === a} <br>`); //1=1
document.write(`a !== a -> ${a !== a} <br>`); //1!=1
document.write(`a < b -> ${a < b} <br><br>`); //1<2

/*論理演算子*/
document.write("【論理演算子】<br>");
document.write(`a === a && b === b -> ${a === a && b === b} <br>`); //1=1かつ2=2 -> true
document.write(`a === a || b !== b -> ${a === a || b !== b} <br>`); //1=1または2!=2 -> true
document.write(`!(a === a) -> ${!(a === a)} <br>`); //!(1=1) -> false
document.write(`(a===a) ? b : c -> ${a === a ? b : c} <br><br>`); //if(a=a){b}else{c}

/*for文*/
document.write("【for文】<br>");
document.write("array = [1,2,3]<br>");
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  document.write(`array[${i}] = ${array[i]}, `);
}
document.write("<br><br>");

/*while文*/
document.write("【while文】<br>");
let i = 0;
while (i < 3) {
  document.write(`3回表示します. `);
  i++;
}
document.write("<br><br>");

/*if else文*/
document.write("【if else文】<br>");
if (a === a) {
  document.write("a===a -> true");
} else {
  document.write("a===a -> false");
}
document.write("<br><br>");

/*switch文*/
document.write("【switch文】<br>");
const str = "B";
switch (str) {
  case "A":
    document.write(`Aが選ばれました`);
    break;
  case "B":
    document.write(`Bが選ばれました`);
    break;
  case "C":
    document.write(`Cが選ばれました`);
    break;
  default:
    document.write("該当する物がありませんでした");
    break;
}
document.write("<br><br>");

/*try catch文*/
document.write("【try catch文】<br>");
function positiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive! <br>`); //errorメッセージを投げる
  }
}
try {
  positiveNumber(-1);
} catch (error) {
  document.write(`${error.message}`); //errorメッセージの表示
}
document.write(
  "------------------------------------------------------------<br><br>"
);
