//クラス名はUpperCamelCase（アッパーキャメルケース）を使う。
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return this.name + "です。";
    };
    return Dog;
}());
var shiro = new Dog("しろいぬ");
document.body.innerHTML = shiro.sayHello();
shiro.sayHello();
// メソッドsayHelloは文字列を返す
var rates;
rates = [120, 130, 140];
rates.push(200);
var june = {
    age: 15,
    name: "june"
};
document.body.innerHTML = june.name.toString();
