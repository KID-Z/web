var boxBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f']; //box背景色
var bodyBg = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#6161616']; //body背景色
var rot = ['rotateX(-180deg)', 'rotateY(-180deg)', 'rotateX(180deg)', 'rotateX(180deg)']
var boxs = document.querySelectorAll('.box');
var content = document.getElementById('content');
var style = document.createElement('style');
var str = '';
boxBg.forEach(function (item, index) {
    str += `.box:nth-of-type(${index+1}) div {
        background: ${item} url(./img/${index+1}.png) no-repeat center;
    }`
})
style.innerHTML = str;
document.head.append(style)


boxs.forEach(function (box, index) {
    box.onmouseenter = function (e) {
        var dir = getAngle(e, this);
        this.style.transform = rot[dir];
        document.body.style.background = bodyBg[Math.round(Math.random() * (bodyBg.length - 1))];
    }
    box.onmouseleave = function (e) {
        this.style.transform = '';
    }
})

//获取鼠标进入方块的方向
function getAngle(e, dom) {
    //getBoundingClientRect()返回盒模型里的信息	width,height:,left,top,right,bottom
    var l = dom.getBoundingClientRect().left;
    var t = dom.getBoundingClientRect().top;
    var w = dom.getBoundingClientRect().width;
    var h = dom.getBoundingClientRect().height;

    //不需要关心正负值  求出鼠标点e.client 和中心点的差值
    var x = e.clientX - l - w / 2;
    var y = e.clientY - t - h / 2;

    //Math.atan2(y, x) 得到的是弧度 / (Math.PI / 180) 得到角度
    var deg = Math.atan2(y, x) / (Math.PI / 180);

    //得到0 1 2 3
    var d = (Math.round((deg + 180) / 90) + 3) % 4;
    return d;
}
document.onmousemove = function (e) {
    var x = (0.5 - e.clientY / window.innerHeight) * 20;
    var y = (e.clientX / window.innerWidth - 0.5) * 20;

    // var x = (e.clientY / window.innerHeight-0.5) * 20;
    // var y = (0.5-e.clientX / window.innerWidth) * 20;
    content.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
}