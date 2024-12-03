var Now = /** @class */ (function () {
    function Now(time) {
        this.time = time;
    }
    Now.prototype.getTime = function () {
        return this.time;
    };
    return Now;
}());
var nowTime = new Date();
document.body.innerHTML = nowTime.getTime().toString();
