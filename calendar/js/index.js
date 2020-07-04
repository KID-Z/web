var time1 = document.querySelector('.time1');
var time2 = document.querySelector('.time2');
var time3 = document.querySelector('.time3');
var week = document.querySelector('.week');
var date = document.querySelector('.date');
var up = document.querySelector('.up');
var down = document.querySelector('.down');
//设置语言环境
moment.locale('zh-cn');

//设置显示时间
function setShowTime() {
    var time = moment().format('LTS');
    time1.innerHTML = time;
}
setInterval(setShowTime, 1000);

//设置年月日 
var show = window.calendar.solar2lunar(moment().year(), moment().month() + 1, moment().date());
time2.innerHTML = moment().format('LL') + ' ' + show.IMonthCn + show.IDayCn + ' ' + (show.Term ? show.Term : '');

//得到星期
var getWeek = moment.weekdaysMin();
var str = '';
//添加星期一 到 星期日
getWeek.forEach(function (item) {
    str += `<span>${item}</span>`;
    week.innerHTML = str;
})

//得到当月的第一天是星期几(下标索引)
function getFirstDay(moment) {
    return moment.startOf('month').weekday();
}
//得到当前月的天数
function getEndDay(moment) {
    return moment.daysInMonth();
}

//当前月
var toDay = moment();
setDate(toDay)

//设置日期
function setDate(m) {
    //当月第一天是星期几
    var week = getFirstDay(m.clone());
    console.log(week)
    //得到上个月的最后一天
    var endDay = getEndDay(m.clone().month(m.month() - 1))
    //得到当前月的天数
    var curDay = getEndDay(m);
    //下个月的天数
    var nextDay = 0;
    var str = '';
    for (var i = 0; i < 42; i++) {
        if (i < week) {
            str = `
            <li class="color">
            <span>${endDay}</span>
            <span>${getLunarCalendar(m.year(), m.month(), endDay)}</span>
            </li>${str}`;
            endDay--;
        } else if (i >= week + curDay) {
            nextDay++;
            str += `
            <li class="color">
            <span>${nextDay}</span>
            <span>${getLunarCalendar(m.year(), m.month()+2, nextDay)}</span>
            </li>`;
        } else {
            var cl = '';
            if (m.date() === i - week + 1) {
                cl = 'active';
            }
            if (m.year() !== moment().year() || m.month() !== moment().month()) {
                cl = '';
            }
            str += `
            <li class="${cl}">
            <span>${i-week+1}</span>
            <span>${getLunarCalendar(m.year(), m.month()+1, i-week+1)}</span>
            </li>`;
        }
    }
    time3.innerHTML = m.format('YYYY年MMM');
    date.innerHTML = str;
}
up.onclick = function () {
    setDate(toDay.subtract(1, 'month'))
}
down.onclick = function () {
    setDate(toDay.add(1, 'month'))
}
//得到农历
function getLunarCalendar(year, month, data) {
    var record = window.calendar.solar2lunar(year, month, data);
    var result;
    if (record.IDayCn === '初一') {
        result = record.IMonthCn;
    } else if (record.Term) {
        result = record.Term;
    } else if (record.lunarFestival) {
        result = record.lunarFestival;
    } else if (record.festival) {
        result = record.festival;
    } else {
        result = record.IDayCn;
    }
    return result;
}
