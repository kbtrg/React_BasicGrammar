import "./styles.css";

/*第4回課題*/
document.write(
  "------------------------------------------------------------<br><br>"
);
document.write("**第4回課題** <br><br>");
/*分割代入（配列）*/
let list = [1, 2, 3];
let [x, y, z] = list;
document.write(`a=${x}, b=${y}, c=${z}`);
/*分割代入（オブジェクト）*/
let obj = {
  name: "kuboryu",
  age: 22
};
let { name, age } = obj;
document.write(`name=${name}, age=${age}`);
/*分割代入（変数変換）*/
let { name: myName, age: myAge } = obj;
document.write(`myName=${myName}, myAge=${myAge}`);

document.write(
  "------------------------------------------------------------<br><br>"
);
