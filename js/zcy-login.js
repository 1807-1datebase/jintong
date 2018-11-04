$(function () {
    let p1=$("main .title p1");
    let p2=$("main .title p2");
    let border1=$("main .title .border1");
    let border2=$("main .title .border2");
    p1.click(function () {
        border1.css("display","block");
        p2.css({"color": "#c9cbcc","font-weight": "400"});
        p1.css({"color":"#000"});
        border2.css("display","none");
    })
    p2.click(function () {
        border2.css("display","block");
        p1.css({"color": "#c9cbcc","font-weight": "400"});
        p2.css({"color":"#000"});
        border1.css("display","none");
    })
    //判断
   $("#phone").blur(function () {
       let val=$("#phone").val();
       if(val){
           $("#message").blur(function () {
               let val1 = $("#message").val();
               if (val1) {
                   let button=$(".button");
                   button.click(function () {
                       location.href="zcy-wechat.html";
                   })
               } else {
                   alert("请输入短信验证码");
               }
           })
       }else{
           alert("请输入手机号");
       }
   })


})