/**
 * Created by 15135 on 2016/11/22.
 */

    //直接调用  四个参数分别是 每一屏、左按钮、右按钮、速度
var slideHor = function (horArea, leftBtn, rightBtn, speed) {
    if(!horArea.length){
        return false;
    }
    var hr = horArea;
    hr.css('position', 'absolute');
    var lb = leftBtn;
    var rb = rightBtn;
    var left = hr.position().left;
    var top = hr.position().top;
    var width = hr.outerWidth()+parseInt(hr.css("marginLeft"))+parseInt(hr.css("marginRight"));
    var count = hr.size();
    var success_arr = new Array(count);
    hr.each(function (i) {
        if (i){
            $(this).css({
                'left': i * width,
                'top': top
            });
        }
    });
    lb.click(function () {
        if (success_arr.length != count || count < 2)
            return false;
        success_arr = [];
        hr.each(function () {
            if ($(this).position().left >= (count - 1) * width)
                $(this).css('left', -width);
            $(this).animate({
                'left': $(this).position().left + width
            }, speed, 'linear', function () {
                success_arr.push(true);
            });
        });
    });
    rb.click(function () {
        if (success_arr.length != count || count < 2)
            return false;
        success_arr = [];
        hr.each(function () {
            if ($(this).position().left < -(count - 2) * width)
                $(this).css('left', width);
            $(this).animate({
                'left': $(this).position().left - width
            }, speed, 'linear', function () {
                success_arr.push(true);
            });
        });
    });
};