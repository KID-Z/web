var timer = null;
var ul = document.querySelector('.init');
var lis = document.querySelectorAll('#wrapper li');
var close = document.querySelectorAll('.close');

var curLi = null;
timer = setInterval(function () {
    ul.className = '';
}, 200)
lis.forEach(function (item, index) {
    item.onclick = function () {
        ul.setAttribute('id', 'ulWrap');
        curLi && (curLi.className = '');
        item.className = 'active';
        curLi = this;
    }
    close[index].onclick = function (e) {
        e.stopPropagation();
        ul.setAttribute('id', '');
        item.className = '';
        curLi = null;
    }
})