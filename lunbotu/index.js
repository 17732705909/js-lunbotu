// 1.点击按钮切换图片
var index = 1;
// 获取prev按钮,注册点击事件
var prev = document.querySelector('.prev');
// 获取next按钮,注册点击事件
var next = document.querySelector('.next');
// 获取.pic
var pic = document.querySelector('.pic')
// 获取li的父元素，事件委托注册点击事件
var lis = document.querySelector('.lis')

// 1.1点击上一张
prev.addEventListener('click', function() {
    // index--
    index--;
    // 判断当前页是否是第一页(index <0)
    if(index < 0) {
        // 是，将索引改为0，移动
        index = 0;
    }
    console.log(index);
    // 否，移动
    pic.style.marginLeft = -790 * index + 'px';

})

// 1.2点击下一张
next.addEventListener('click', function () {
    // index++
    index++;
    // 判断当前页是否是最后一页(index >8)
    if(index > 8) {
        // 是，并将索引改为8,移动
        index = 8;
    }
    console.log(index)
    // 否，移动
    pic.style.marginLeft = -790 * index + 'px';
})

