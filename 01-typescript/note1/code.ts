//クラス名はUpperCamelCase（アッパーキャメルケース）を使う。
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
// メソッドsayHelloは文字列を返す

let rates:number[];
rates = [120, 130, 140];
rates.push(200);
// document.body.innerHTML = rates.toString();

interface Member {
   age:number;
   name:string;
}

let june: Member = {
   age: 15,
   name:"june"
};

document.body.innerHTML = june.name.toString();