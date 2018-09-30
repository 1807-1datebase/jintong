$(function () {
    let enter = $("footer .enter");
    let close=$(".close");
    let set=$(".set");
    console.log(enter,close);
    enter.click(function () {
        set.css("transform","scale(1)");
    })
    close.click(function () {
        set.css("transform","scale(0)");
    })
})