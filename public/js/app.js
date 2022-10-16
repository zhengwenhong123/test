const oPointer = document.getElementsByTagName("img")[0];
const oTurntable = document.getElementsByTagName("img")[1];

const data = [{name: '免单4999'}, {name: '未中奖'}, {name: '50'}, {name: '免单10'}, {name: '免单5'}, {name: '免分期'}, {name: '提高白条'},]

const cat = 360 / data.length;
let num = 0;
let offOn = true;
oPointer.onclick = function () {
    if (offOn) {
        oTurntable.style.transform = `rotate(0deg)`;
        offOn = !offOn;
        angle();
    }
}

function angle() {
    console.log(123)
    let time = null;
    let rdm = 0;
    time = setInterval(function () {
        if (Math.floor(rdm / 360) < 3) {
            rdm = Math.floor(Math.random() * 7200);
        } else {
            oTurntable.style.transform = `rotate(${rdm}deg)`;
            clearInterval(time);
            setTimeout(function () {
                offOn = !offOn;
                num = rdm % 360;
                oTurntable.addEventListener('transitionend',function(){
                    if (num <= cat * 1) {
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "4999元");
                        alert("4999元");
                    } else if (num <= cat * 2) {
                        alert("50元");
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "50元");
                    } else if (num <= cat * 3) {
                        alert("10元");
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "10元");
                    } else if (num <= cat * 4) {
                        alert("5元");
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "5元");
                    } else if (num <= cat * 5) {
                        alert("免息服务");
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "免息服务");
                    } else if (num <= cat * 6) {
                        alert("提交白金");
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "提交白金");
                    } else if (num <= cat * 7) {
                        alert("未中奖");
                        console.log("rdm=" + rdm + "，num=" + num + "，" + "未中奖");
                    }
                },{
                    once:true,
                })
            },4000)
        }
    },30)
}