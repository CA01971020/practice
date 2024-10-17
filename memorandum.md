# 備忘録
「はじめてのTypeScript2」を基に学習した内容をまとめる。
## 2024年3月29日の記録
### コンパイル・jsonファイル
TypeScriptファイルをJavaScriptにコンパイルする際の条件（コンパイル・オプション）をjsonファイルに書き込む。
### クラスとクラスの命名規則
#### クラスの宣言
クラスは以下のように記述する。
```ts
class Dog{
    name:string;
}
```
クラス変数の定義は、
```ts
name:string;
//name→属性
//string→文字列型
```
のように属性と型情報を定義します。
#### プリミティブ型（型情報・型注釈）
- string（文字列型） 
- number（数値型）
- boolean（論理型,false or true）
- undefined型（値が未定義であることを表す）
- null型（値が無いことを表す,値の欠如,意図的に使用することが多い）
- symbol型（シンボル型-一意で不変の値）
- bigint型（長整数型-number型では扱えない大きい整数）
#### 命名規則
クラス名はUpperCamelCaseで記述する。→UpperCamelCaseは単語の先頭一文字が大文字の記法。  
例：UpperCamelCase,TypeScriptCode,DogName,
#### 22pまで。

## 2024年4月2日の記録
### コンストラクタ
- TypeScript はクラスベースのオブジェクト指向言語  
- クラスに値を与えたオブジェクトで動作や処理を行う  
- クラスからオブジェクトを新規作成する際に必要となる値を決めることをコンストラクタという  
クラス→（コンストラクタ）→オブジェクト
```ts
 constructor(name:string){ //引数name
    this.name=name; //引数nameに与えられた値を属性nameに与える
 }
```
値→引数→値→属性  
A→引数→A→属性

### メソッド
メソッドはオブジェクトを新規作成する際に使用する  
```ts
 sayHello(){
    return this.name+"です。";
 }
```
メソッドの後が空なのは引数を渡さなくていいから  
メソッドsayHelloはコンストラクタに従って作成したオブジェクトが行う処理  
nameに入った値に「です。」を付けてreturnするというのがメソッドの処理  
### 以上でクラスの定義が完了
### トップレベル
- クラスなどを定義した内容を使って実際に処理する箇所は、括弧に何も入っていない。（）←多分これ。
- この文による処理をトップレベルの処理という
### オブジェクトを作成
コンストラクタを書く代わりにnew + ○○ でオブジェクトが作成される  
括弧の中に、引数に渡す値を書く
```ts
let shiro = new Dog("白犬")
```
```ts
document.body.innerHTML = shiro.sayHello();
// 左→TypeScript を変換してできたJavaScript がHTMLファイルに組み込まれる
// 右→オブジェクトshiroがメソッドsayHelloを呼び出す
```
### クラス定義と実行まで
```ts
class Dog{
    name:string;
    constructor(name:string){ //引数name
        this.name = name;
     }
     sayHello(){
        return this.name+"です。";
     }
}

let shiro = new Dog("しろいぬ");

document.body.innerHTML = shiro.sayHello();

shiro.sayHello();
```
### 実行
tasks.jsonを作成
表示 → コマンドパレット → task → タスク構成 → tsconfig.json → ビルドタスクの実行 → jsファイルに変換  
index.htmlを確認
#### 22p~29pまで

## 2024年4月5日
### ローカル変数（let）
letは制御文や関数、クラスなどの括弧のなかでのみ有効な変数  
トップレベルでも使用できる
### constの使用場面
constは定数や識別値など、値を変えずに変数名で表したいときに使用する  
```ts
const g = 9.8 //重力加速度9.8を変数gで定義する
```
変数の値を変更したり、誤って書くとエラーになる  
constは、定数やフラグ、文字列の置き換えと判断できる

### 配列
TypeScriptにおいて配列の型名はArray型となる。
```ts
let rates:number[];
rates = [120, 130, 140]
document.body.innerHTML = rates.toString();
```
配列に要素を加えるメソッドpushで値を追加できる
```ts
let rates:number[];
rates = [120, 130, 140];
rates.push(200);
document.body.innerHTML = rates.toString();
```

### 列挙型
enumは問題点が多いとのことなので、オブジェクトリテラルを使用した列挙型を示す
```ts
const Mammal = {
   Human: 0,
   Lion: 1,
   Bear: 2,
}as const;
```
as constでオブジェクトのプロパティがreadonlyになる  
参照：
https://qiita.com/KokiSakano/items/51cafbf7bda527a9d5bf

#### 30p~50pまで

## 2024年4月8日
### インターフェース
TypeScript のインターフェースはJavaScriptのオブジェクトと同じようなもの  
```ts
// インターフェース"member"を定義した例
interface member {
   age:number;
   name:string;
}
// データ型を明記した上で、属性と属性値を記述した例
let june: member = {
   age: 15,
   name:"june"
};
```
インターフェースとクラスの違い
https://www.ragate.co.jp/blog/articles/17897
### 以下note2

