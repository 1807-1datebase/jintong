$(function () {
    let enter = $("footer ul .enter");
    let close=$(".close");
    let set=$(".set");
    let input=$(".search input")
    console.log(enter,close);
    enter.click(function () {
        set.css("display","block");
    })
    close.click(function () {
        set.css("display","none");
    })
    input.click(function() {
        location.href="zcy-search.html";
    });
})