(function () {
    function PageObj(options, wrap) {
        this.wrap = wrap;
        this.size = options.size || 5;
        this.current = options.current || 1;
        this.allPage = options.allPage || (options.allSize ? Math.ceil(options.allSize / options.size) : 1);
        this.changePage = options.changePage || function () {};
    }
    PageObj.prototype.init = function () {
        if (this.current > this.allPage) {
            alert('当前页数大于总页数')
        } else {
            this.fillHTML();
            this.bindEvent();
        }
    }
    PageObj.prototype.bindEvent = function () {
        var self = this;
        $('.previous', this.wrap).click(function () {
            self.current--;
            self.change();
        })
        $('.next', this.wrap).click(function () {
            self.current++;
            self.change();
        })
        $('.num', this.wrap).click(function () {
            self.current = parseInt($(this).text());
            self.change();
        })
        $('.my-page-size-inp', this.wrap).change(function () {
            self.size = parseInt($(this).val());
            self.current = 1;
            self.change();
        })
    }

    PageObj.prototype.change = function () {
        this.fillHTML()
        this.bindEvent();
        this.changePage(this.current, this.size);
    }
    PageObj.prototype.fillHTML = function () {
        $(this.wrap).empty();
        var myPageDiv = $('<div class="myPageDiv"></div>');
        var pageSizeDiv = $('<div class="pageSizeDiv">每一页条数:<input class="my-page-size-inp" type="number" min="5" max="50" value=' + this.size + '></div>');
        var myTurnPage = $('<ul class="myTurnPage"></ul>');
        if (this.current > 1) {
            $('<li class="previous">上一页</li>').appendTo(myTurnPage);
        }
        $('<li class="num">1</li>').appendTo(myTurnPage).addClass(this.current === 1 ? 'active' : '');

        if (this.current - 2 - 1 > 1) {
            $('<li class="omit">...</li>').appendTo(myTurnPage);
        }
        for (var i = this.current - 2; i <= this.current + 2; i++) {
            if (i > 1 && i < this.allPage) {
                $('<li class="num"></li>').text(i).appendTo(myTurnPage).addClass(this.current === i ? 'active' : '');;
            }
        }
        if (this.allPage - (this.current + 2) > 1) {
            $('<li class="omit">...</li>').appendTo(myTurnPage);
        }
        this.allPage !== 1 && $('<li class="num"></li>').text(this.allPage).appendTo(myTurnPage).addClass(this.current === this.allPage ? 'active' : '');;

        if (this.current < this.allPage) {
            $('<li class="next">下一页</li>').appendTo(myTurnPage);
        }
        myPageDiv.append(pageSizeDiv).append(myTurnPage).appendTo(this.wrap);
    }

    $.fn.page = function (options) {
        var obj = new PageObj(options, this);
        obj.init();
    }
}())