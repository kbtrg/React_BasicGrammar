/*第4回課題*/
document.write(
  "------------------------------------------------------------<br><br>"
);
document.write("**第4回課題** <br><br>");

/*分割代入（配列）*/
document.write("【分割代入（配列）】 <br>");
let list = [1, 2, 3];
let [x, y, z] = list;
document.write("list = [1,2,3] <br>");
document.write("[x,y,z] = list <br>");
document.write(`x=${x}, y=${y}, z=${z} <br><br>`);

/*分割代入（オブジェクト）*/
document.write("【分割代入（オブジェクト）】 <br>");
let obj = {
  name: "kuboryu",
  age: 22
};
let { name, age } = obj;
document.write(`obj = {name: "kuboryu", age: 22} <br>`);
document.write("{ name, age } = obj <br>");
document.write(`name=${name}, age=${age} <br><br>`);

/*分割代入（変数変換）*/
document.write("【分割代入（変数変換）】 <br>");
let { name: myName, age: myAge } = obj;
document.write("{name: myName, age: myAge} = obj <br>");
document.write(`myName=${myName}, myAge=${myAge}<br><br>`);

/* デフォルト値 */
document.write("【デフォルト値】<br>");
const user1 = {
  age1: 20
};
const { name1 = "ゲスト", age1 } = user1;
document.write(`name1 = ${name1}, age1 = ${age1}<br>`);

const welcomeMessage = (username = "ゲスト") => {
  const message = `こんにちは。${username}さん。<br>`;
  document.write(message);
};
welcomeMessage();
welcomeMessage("kuboryu");
document.write(`<br>`);

/* スプレッド構文（配列編） */
document.write(`【スプレッド構文（配列編）】<br>`);
const list1 = [1, 2];
document.write(`list1 = ${list1}`);
//document.write(`...list1 = ${...list1}`) //恐らく表示させる文中ではスプレッド構文は使えない?;
document.write(`<br>`);

const list2 = [1, 2, 3, 4, 5];
const [num1, num2, ...sublist] = list2;
document.write(`num1 = ${num1}, num2 = ${num2}, sublist = ${sublist}`);
document.write(`<br>`);

const list3 = [1, 2];
const list4 = [3, 4];
const list5 = [...list3];
const list6 = [...list3, ...list4];
document.write(`list5 = ${list5}<br>`);
document.write(`list6 = ${list6}<br><br>`);

/* スプレッド構文（オブジェクト編） */
document.write(`【スプレッド構文（オブジェクト編）】<br>`);
const obj1 = {
  title: "t1",
  content: "c1"
};
const obj2 = { ...obj1 };
document.write(`obj1 = ${obj1}<br>`);
document.write(`obj2 = ${obj2}<br><br>`);

/* プリミティブ型とオブジェクト型 */
document.write(`【プリミティブ型とオブジェクト型】<br>`);
const list7 = [1, 2];
const list8 = list7; //アドレスコピー
list8[0] = 10;
document.write(`list7[0] = ${list7[0]}<br>`); //lsit7にも影響
document.write(`list7[0] = ${list8[0]}<br><br>`);

/* map関数 */
document.write(`【map関数】<br>`);
const list9 = [1, 2, 3, 4, 5];
const list10 = list9.map((item, index) => {
  document.write(`要素：${item}, `, `index：${index}<br>`);
  return item * 2; //要素を２倍した数値はlist10に入れる
});
document.write(`list10 = ${list10}<br><br>`);

/* filter関数 */
document.write(`【filter関数】<br>`);
const list11 = [1, -10, 12, 60, 100];
const list12 = list11.filter((item, index) => {
  document.write(`要素：${item}, `, `index：${index}<br>`);
  return item > 10; //10より大きい要素をlist12に入れる
});
document.write(`list12 = ${list12}<br><br>`); //messageに値が入らない...

/* null合体演算子 */

document.write(`【null合体演算子】<br>`);
const errorMessage = "error";
const nullMessage = null;
const undefinedMessage = undefined;
const emptyMessage = "";
let message;
message = nullMessage ?? errorMessage;
document.write(`nullMessage ?? errorMessage = ${message}<br>`);
message = undefinedMessage ?? errorMessage;
document.write(`undefinedMessage ?? errorMessage = ${message}<br>`);
message = emptyMessage ?? errorMessage;
document.write(`emptyMessage ?? errorMessage = ${message}<br><br>`);

/* クラス構文 */
document.write(`【クラス構文】<br>`);
class Animal {
  //コンストラクタ
  constructor(species, color) {
    this.species = species;
    this.color = color;
    this.create();
  }
  //初期生成メッセージ
  create() {
    document.write(`${this.color}色の${this.species}が生成されました。<br>`);
  }
  //feedメソッド
  feed(item) {
    document.write(`${this.species}に${item}を与えました。<br>`);
  }
}
const black_dog = new Animal("dog", "black");
black_dog.feed("apple");

document.write("<br><br>");
document.write(
  "------------------------------------------------------------<br><br>"
);
