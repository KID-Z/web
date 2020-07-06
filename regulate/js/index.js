var uName = getCookie('username');

var tableAll = [];
var nowPage = 1;
var pageSize = 10;
var allPage;
if (uName) {
    $('.username').text(uName);
} else {
    location.href = 'login.html';
}

function bindEvent() {
    //点击切换状态
    $('.menu').on('click', 'dd', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var id = $(this).data('id');
        $('#' + id).fadeIn().siblings().fadeOut();
    });
    //新增学生按钮
    $('#add-submit').click(function (e) {
        e.preventDefault();
        var formData = $('#add-student-form').serializeArray();
        var data = getTableData(formData);
        if (data.status === 'success') {
            packagingAjax('/api/student/addStudent', data.data, function (res) {
                alert('新增成功');
                $('#add-student-form')[0].reset();
                $('.menu dd[data-id=student-list]').trigger('click');
                getAllStudents();
            })
        } else {
            alert(data.msg);
        }
    });
    //编辑按钮
    $('#tbody').on('click', '.edit', function () {
        $('.modal').slideDown();
        var index = $(this).parents('tr').index();
        startRenderForm(tableAll[index]);
    });
    //删除按钮
    $('#tbody').on('click', '.remove', function () {
        var index = $(this).parents('tr').index();
        var isRemove = confirm('确定要删除该学好为' + tableAll[index].sNo + '的学生吗');
        if (isRemove) {
            packagingAjax('/api/student/delBySno', {
                sNo: tableAll[index].sNo
            }, function () {
                alert('删除成功');
                nowPage = 1;
                getAllStudents();
            })
        }
    });
    //提交修改
    $('#eait-submit').click(function (e) {
        e.preventDefault();
        var formData = $('#eait-student-form').serializeArray();;
        var data = getTableData(formData);
        console.log(data)
        if (data.status === 'success') {
            packagingAjax('/api/student/updateStudent', data.data, function () {
                alert('修改成功');
                nowPage = 1;
                $('.modal').slideUp();
                getAllStudents();
            })
        } else {
            alert(data.msg);
        }
    })
    //点击隐藏蒙层
    $('.modal').click(function (e) {
        if (e.target === this) {
            $('.modal').slideUp();
        }
    })
    //点击搜索
    $('#search-submit').click(function () {
        nowPage = 1;
        var val = $('#search-word').val();
        if (val) {
            packagingAjax('/api/student/searchStudent', {
                sex: -1,
                search: val,
                page: nowPage,
                size: pageSize,
            }, function (data) {
                allPage = Math.ceil(data.cont / pageSize);
                renderTable(data.searchList)
            })
        } else {
            getAllStudents()
        }
    })
}

bindEvent();

//得到所有学生信息
function getAllStudents() {
    packagingAjax('/api/student/findByPage', {
        page: nowPage,
        size: pageSize
    }, function (data) {
        allPage = Math.ceil(data.cont / pageSize);
        tableAll = data.findByPage;
        renderTable(tableAll);
    })
}
getAllStudents()

//回填数据
function startRenderForm(data) {
    var form = $('#eait-student-form')[0];
    for (var prop in data) {
        if (form[prop]) {
            form[prop].value = data[prop]
        }
    }
}

//渲染页面
function renderTable(data) {
    var strHtml = data.reduce(function (and, item) {
        return and + `<tr>
        <td>${item.sNo}</td>
        <td>${item.name}</td>
        <td>${item.sex===0?'男':'女'}</td>
        <td>${item.email}</td>
        <td>${item.birth}</td>
        <td>${item.phone}</td>
        <td>${item.address}</td>
        <td>
            <button class="btn edit">编辑</button>
            <button class="btn remove">删除</button>
        </td>
    </tr>`;
    }, '');
    $('#tbody').html(strHtml);

    $('.turn-page').page({
        size: pageSize,
        current: nowPage,
        allPage: allPage,
        changePage: function (page, size) {
            nowPage = page;
            pageSize = size;
            var val = $('#search-word').val();
            if (val) {
                packagingAjax('/api/student/searchStudent', {
                    sex: -1,
                    search: val,
                    page: nowPage,
                    size: pageSize,
                }, function (data) {
                    allPage = Math.ceil(data.cont / pageSize);
                    renderTable(data.searchList)
                })
            } else {
                getAllStudents()
            }
        }
    })
}

//获取table input的学生信息
function getTableData(data) {
    var result = {
        status: "success",
        msg: "查询成功",
        data: {}
    }
    for (var i = 0; i < data.length; i++) {
        if (!data[i].value) {
            result.status = "fail";
            result.msg = "查询失败";
            result.data = [];
            break;
        }
        if (data[i].name === 'sNo' && !/^\d{4,16}$/.test(data[i].value)) {
            result.status = "fail";
            result.msg = "学号格式不正确";
            result.data = [];
            break;
        } else if (data[i].name === 'phone' && !/^1\d{10}$/.test(data[i].value)) {
            result.status = "fail";
            result.msg = "手机号格式不正确";
            result.data = [];
            break;
        } else if (data[i].name === 'birth' && (data[i].value < 1920 || data[i].value >= 2020)) {
            result.status = "fail";
            result.msg = "出生日期应该是1920-2020年之间";
            result.data = [];
            break;
        }
        result.data[data[i].name] = data[i].value;
    }
    return result;
}

//封装ajax请求
function packagingAjax(url, data, callback) {
    $.ajax({
        url: 'http://open.duyiedu.com' + url,
        type: 'get',
        data: $.extend({
            appkey: 'Q_A_Q_1590927055348'
        }, data),
        dataType: 'json',
        success: function (res) {
            if (res.status === 'success') {
                callback(res.data)
            } else {
                alert(res.msg);
            }
        }
    })
}