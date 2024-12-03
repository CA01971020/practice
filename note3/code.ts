class Now {
    time: string;
    constructor(time: string) {
        this.time = time;
    }
    getTime() {
        return this.time;
    }
}
let nowTime = new Date();

document.body.innerHTML = nowTime.getTime().toString();
