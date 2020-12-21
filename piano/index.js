/*
 * @Author: your name
 * @Date: 2020-12-21 23:04:46
 * @LastEditTime: 2020-12-22 00:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /piano/index.js
 */

const container = document.getElementById('container');
let isDown = false;

function initUi() {
    const keys = Object.keys(MIDISound);
    // 白色键宽度
    const whiteWidth = container.clientWidth / 52;
    // 黑色键宽度
    const blackWidth = whiteWidth * 3 / 5;
    // 前面的白键数量
    let beforeWhiteNumber = 0;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const div = document.createElement('div');
        if (key.length === 2) {
            // 白键
            div.style.width = whiteWidth + 'px';
            div.style.left = beforeWhiteNumber * whiteWidth + 'px';
            div.classList.add("white");
            beforeWhiteNumber++;
        } else {
            // 黑键
            div.style.width = blackWidth + 'px';
            div.style.left = beforeWhiteNumber * whiteWidth - blackWidth / 2 + 'px';
            div.classList.add("black");
        }
        div.classList.add("item");
        div.setAttribute("key", key);
        div.innerHTML = `<span>${key}</span>`
        container.appendChild(div);
        // 注册事件
        bindEvent(div);
    }
}

initUi();


function createAudio(key) {
    // 创建音频对象
    const audio = new Audio(MIDISound[key]);
    const div = document.querySelector(`div[key=${key}]`); // 选中自定义属性key等于某个值的div
    let timer = null; // 停止时，音量逐渐减少的计时器
    return {
        start() {
            // 播放声音
            clearTimeout(timer);
            audio.currentTime = 0;
            audio.volume = 1;
            audio.play(); // 播放音频
            // 更改样式
            div.classList.add("active");
        },
        stop() {
            // 停止声音
            timer = setTimeout(() => {
                // 不断的减少音量
                const v = audio.volume - 0.02; // 获取当前音量
                if (v <= 0) {
                    // 静音
                    audio.pause(); // 停止播放
                    clearTimeout(timer);
                } else {
                    audio.volume = v;
                }
            }, 15);
            // 去掉类样式active
            div.classList.remove("active");
        }
    }
}

const aud = {};

// 初始化所有的音频
function initAudio() {
    for (const key in MIDISound) {
        aud[key] = createAudio(key);
    }
}
initAudio();

window.onmousedown = () => {
    isDown = true;
}
window.onmouseup = () => {
    isDown = false;
}

// 给 div 绑定事件
function bindEvent(div) {
    div.onmousedown = () => {
        var key = div.getAttribute("key"); // 拿到自定义属性key
        aud[key].start();
    }
    div.onmouseup = () => {
        var key = div.getAttribute("key"); // 拿到自定义属性key
        aud[key].stop();
    }
    div.onmouseenter = () => {
        if (isDown) {
            // 只有鼠标按下时，才会播放
            var key = div.getAttribute("key"); // 拿到自定义属性key
            aud[key].start();
        }
    }
    div.onmouseleave = () => {
        var key = div.getAttribute("key"); // 拿到自定义属性key
        aud[key].stop();
    }
}


//禁止选择网页文字
document.documentElement.onselectstart = function () {
    return false;
};